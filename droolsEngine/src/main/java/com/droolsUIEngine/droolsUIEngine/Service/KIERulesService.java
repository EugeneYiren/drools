package com.droolsUIEngine.droolsUIEngine.Service;

import com.google.common.io.Resources;
import org.drools.compiler.lang.DrlDumper;
import org.drools.compiler.lang.api.*;
import org.drools.compiler.lang.descr.AndDescr;
import org.kie.api.KieBase;
import org.kie.api.KieServices;
import org.kie.api.builder.*;
import org.kie.api.io.Resource;
import org.kie.api.io.ResourceType;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import com.droolsUIEngine.droolsUIEngine.Models.*;

import java.io.*;

@Service
public class KIERulesService {

    private final KieContainer kieContainer;

    @Autowired
    public KIERulesService(KieContainer kieContainer) {
        this.kieContainer = kieContainer;
    }

    private Resource getResource(KieServices kieServices, String resourcePath) {
        try {
            InputStream is = Resources.getResource(resourcePath).openStream(); //guava
            return kieServices.getResources()
                    .newInputStreamResource(is)
                    .setResourceType(ResourceType.DRL);
        } catch (IOException e) {
            throw new RuntimeException("Failed to load drools resource file.", e);
        }
    }

    public KieContainer build(KieServices kieServices, SPAR_Investment_Horizon invHor, SPAR_Investment_Objective invObj, SPAR_PRR_CPR cprObj) {
        KieFileSystem kieFileSystem = kieServices.newKieFileSystem();
        ReleaseId rid = kieServices.newReleaseId("com.example.rulesengine",
                "model-test", "1.0-SNAPSHOT");
        kieFileSystem.generateAndWritePomXML(rid);

        kieFileSystem.write("rules/rules.drl",
                getResource(kieServices, "rules/rules.drl"));

        addRule(kieFileSystem, invHor, invObj, cprObj);

        KieBuilder kieBuilder = kieServices.newKieBuilder(kieFileSystem);
        kieBuilder.buildAll();
        if (kieBuilder.getResults().hasMessages(Message.Level.ERROR)) {
            throw new RuntimeException("Build Errors:\n" +
                    kieBuilder.getResults().toString());
        }

        return kieServices.newKieContainer(rid);
    }

    private void addRule(KieFileSystem kieFileSystem, @Nullable SPAR_Investment_Horizon invHor, @Nullable SPAR_Investment_Objective invObj, @Nullable SPAR_PRR_CPR cprObj ) {
        /*PackageDescrBuilder pkgDescrBuilder = DescrFactory.newPackage();

        pkgDescrBuilder
                .name("rules")
                .newImport().target("com.droolsUIEngine.droolsUIEngine.Models.SPAR_Investment_Horizon").end()
                .newRule()
                .name("SPAR_Investment_Horizon_1")
                .lhs()
                .pattern("SPAR_Investment_Horizon").constraint("HKRegulated == " + "\"" + s.HKRegulated + "\"")
                //.pattern()
                .id("$a", false).end()
                .end()
                .rhs("$a.setTest( true );")
                .end();
        */
        PackageDescrBuilder pkgDescrBuilder = null;

        if (invHor != null)
            pkgDescrBuilder = PackageBuilder.addRule(invHor);
        else if(invObj != null)
            pkgDescrBuilder = PackageBuilder.addRule(invObj);
        else if(cprObj !=null)
            pkgDescrBuilder = PackageBuilder.addRule(cprObj);

        int counter = 0;
        File dir = new File("src/main/resources/rules/");
        File[] directoryListing = dir.listFiles();
        if (directoryListing != null) {
            for (File child : directoryListing) {
                try {
                    counter++;
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }

        String rules = new DrlDumper().dump(pkgDescrBuilder.getDescr());
        kieFileSystem.write("src/main/resources/rules/rules"+counter+".drl", rules);
        try{
            // create new file
            File file = new File("src/main/resources/rules/rules"+counter+".drl");
            file.createNewFile();
            FileWriter fw = new FileWriter(file.getAbsoluteFile());
            BufferedWriter bw = new BufferedWriter(fw);
            bw.write(rules);
            // close connection
            bw.close();
            System.out.println("File Created Successfully");
        }catch(Exception e){
            System.out.println(e);
        }
    }

    public KieServices getKieServices(){
        //get the stateful session
        KieServices kieServices = KieServices.Factory.get();
        KieFileSystem kfs = kieServices.newKieFileSystem();
        File dir = new File("src/main/resources/rules/");
        File[] directoryListing = dir.listFiles();
        if (directoryListing != null) {
            for (File child : directoryListing) {
                try {
                    FileInputStream fis = new FileInputStream("src/main/resources/rules/" + child.getName());
                    kfs.write("src/main/resources/rules/"+ child.getName(),
                            kieServices.getResources().newInputStreamResource(fis));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
        KieBuilder kieBuilder = kieServices.newKieBuilder( kfs ).buildAll();
        Results results = kieBuilder.getResults();
        if( results.hasMessages( Message.Level.ERROR ) ){
            System.out.println( results.getMessages() );
            throw new IllegalStateException( "### errors ###" );
        }
        return kieServices;
    }

    public SPAR_Investment_Horizon getRulesForInvestmentHorizon(SPAR_Investment_Horizon inv_horizon) {
        KieServices kieServices = getKieServices();
        KieContainer kieContainer =
                kieServices.newKieContainer( kieServices.getRepository().getDefaultReleaseId() );
        KieBase kieBase = kieContainer.getKieBase();
        KieSession kieSession = kieContainer.newKieSession();

        kieSession.insert(inv_horizon);
        kieSession.fireAllRules();
        kieSession.dispose();
        return inv_horizon;
    }

    public SPAR_Investment_Objective getRulesForInvestmentObjective(SPAR_Investment_Objective invObjective) {
        //get the stateful session
        KieServices kieServices = getKieServices();
        KieContainer kieContainer =
                kieServices.newKieContainer( kieServices.getRepository().getDefaultReleaseId() );
        KieBase kieBase = kieContainer.getKieBase();
        KieSession kieSession = kieContainer.newKieSession();

        kieSession.insert(invObjective);
        kieSession.fireAllRules();
        kieSession.dispose();
        return invObjective;
    }

    public SPAR_PRR_CPR getRulesForPRRCPR(SPAR_PRR_CPR sparPrrCpr) {
        KieServices kieServices = getKieServices();
        KieContainer kieContainer =
                kieServices.newKieContainer( kieServices.getRepository().getDefaultReleaseId() );
        KieBase kieBase = kieContainer.getKieBase();
        KieSession kieSession = kieContainer.newKieSession();

        kieSession.insert(sparPrrCpr);
        kieSession.fireAllRules();
        kieSession.dispose();
        return sparPrrCpr;
    }
}