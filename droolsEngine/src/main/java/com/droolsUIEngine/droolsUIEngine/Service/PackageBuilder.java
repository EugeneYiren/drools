package com.droolsUIEngine.droolsUIEngine.Service;

import com.droolsUIEngine.droolsUIEngine.Models.SPAR_Investment_Horizon;
import com.droolsUIEngine.droolsUIEngine.Models.SPAR_Investment_Objective;
import com.droolsUIEngine.droolsUIEngine.Models.SPAR_PRR_CPR;
import org.drools.compiler.lang.api.*;
import org.drools.compiler.lang.descr.AndDescr;

public class PackageBuilder {

    public static PackageDescrBuilder addRule(SPAR_Investment_Horizon s){
        PackageDescrBuilder pkgDescrBuilder = DescrFactory.newPackage();
        pkgDescrBuilder.name("rules").getDescr();
        pkgDescrBuilder.newImport().target("com.droolsUIEngine.droolsUIEngine.Models.SPAR_Investment_Horizon");
        RuleDescrBuilder ruleBuilder = pkgDescrBuilder.newRule().name("SPAR_Investment_Horizon_1");
        CEDescrBuilder<RuleDescrBuilder, AndDescr> lhsBuilder = ruleBuilder.lhs();
        PatternDescrBuilder<CEDescrBuilder<RuleDescrBuilder, AndDescr>> patternBuilder = lhsBuilder.pattern("SPAR_Investment_Horizon").id("$a", false);
        patternBuilder.constraint("HKRegulated == " + "\"" + s.HKRegulated + "\"").end();
        patternBuilder.constraint("Direction == " + "\"" + s.Direction + "\"").end();
        patternBuilder.constraint("ProductType == " + "\"" + s.ProductType + "\"").end();
        patternBuilder.constraint("ProductSubType == " + "\"" + s.ProductSubType + "\"").end();
        patternBuilder.constraint("ExecutionType == " + "\"" + s.ExecutionType + "\"").end();
        patternBuilder.constraint("InvestmentHorizon == " + "\"" + s.InvestmentHorizon + "\"").end();
        patternBuilder.constraint("ProductTenor == " + "\"" + s.ProductTenor + "\"").end();
        patternBuilder.constraint("Tenor == " + "\"" + s.Tenor + "\"").end();
        patternBuilder.constraint("VC == " + "\"" + s.VC + "\"").end();
        patternBuilder.constraint("FundMasterList == " + "\"" + s.FundMasterList + "\"").end();
        ruleBuilder.rhs("$a.setStatus(\"" + s.Status + "\");").end();
        return pkgDescrBuilder;
    }

    public static PackageDescrBuilder addRule(SPAR_Investment_Objective s){
        PackageDescrBuilder pkgDescrBuilder = DescrFactory.newPackage();
        pkgDescrBuilder.name("rules").getDescr();
        pkgDescrBuilder.newImport().target("com.droolsUIEngine.droolsUIEngine.Models.SPAR_Investment_Objective");
        RuleDescrBuilder ruleBuilder = pkgDescrBuilder.newRule().name("SPAR_Investment_Objective_1");
        CEDescrBuilder<RuleDescrBuilder, AndDescr> lhsBuilder = ruleBuilder.lhs();
        PatternDescrBuilder<CEDescrBuilder<RuleDescrBuilder, AndDescr>> patternBuilder = lhsBuilder.pattern("SPAR_Investment_Objective").id("$a", false);
        patternBuilder.constraint("HKRegulated == " + "\"" + s.HKRegulated + "\"").end();
        patternBuilder.constraint("Direction == " + "\"" + s.Direction + "\"").end();
        patternBuilder.constraint("ProductType == " + "\"" + s.ProductType + "\"").end();
        patternBuilder.constraint("ProductSubType == " + "\"" + s.ProductSubType + "\"").end();
        patternBuilder.constraint("ExecutionType == " + "\"" + s.ExecutionType + "\"").end();
        patternBuilder.constraint("VCStatus == " + "\"" + s.VCStatus + "\"").end();
        patternBuilder.constraint("ClientInvObjective == " + "\"" + s.ClientInvObjective + "\"").end();
        patternBuilder.constraint("ProductInvObjective == " + "\"" + s.ProductInvObjective + "\"").end();
        ruleBuilder.rhs("$a.setStatus(\"" + s.Status + "\");").end();
        return pkgDescrBuilder;
    }

    public static PackageDescrBuilder addRule(SPAR_PRR_CPR s){
        PackageDescrBuilder pkgDescrBuilder = DescrFactory.newPackage();
        pkgDescrBuilder.name("rules").getDescr();
        pkgDescrBuilder.newImport().target("com.droolsUIEngine.droolsUIEngine.Models.SPAR_PRR_CPR");
        RuleDescrBuilder ruleBuilder = pkgDescrBuilder.newRule().name("SPAR_PRR_CPR_1");
        CEDescrBuilder<RuleDescrBuilder, AndDescr> lhsBuilder = ruleBuilder.lhs();
        PatternDescrBuilder<CEDescrBuilder<RuleDescrBuilder, AndDescr>> patternBuilder = lhsBuilder.pattern("SPAR_PRR_CPR").id("$a", false);
        patternBuilder.constraint("HKRegulated == " + "\"" + s.HKRegulated + "\"").end();
        patternBuilder.constraint("Direction == " + "\"" + s.Direction + "\"").end();
        patternBuilder.constraint("ProductType == " + "\"" + s.ProductType + "\"").end();
        patternBuilder.constraint("ProductSubType == " + "\"" + s.ProductSubType + "\"").end();
        patternBuilder.constraint("HYBFIndicator == " + "\"" + s.HYBFIndicator + "\"").end();
        patternBuilder.constraint("ExecutionType == " + "\"" + s.ExecutionType + "\"").end();
        patternBuilder.constraint("VCStatus == " + "\"" + s.VCStatus + "\"").end();
        patternBuilder.constraint("CPR == " + "\"" + s.CPR + "\"").end();
        patternBuilder.constraint("PRR == " + "\"" + s.PRR + "\"").end();
        patternBuilder.constraint("IsPRRMoreThanOREqualsToCPR == " + "\"" + s.IsPRRMoreThanOREqualsToCPR + "\"").end();
        ruleBuilder.rhs("$a.setStatus(\"" + s.Status + "\");").end();
        return pkgDescrBuilder;
    }
}
