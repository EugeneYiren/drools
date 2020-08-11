package com.droolsUIEngine.droolsUIEngine.Service;

import com.droolsUIEngine.droolsUIEngine.Models.AuditResponse;
import com.droolsUIEngine.droolsUIEngine.Models.SPAR_Investment_Horizon;
import com.droolsUIEngine.droolsUIEngine.Models.SPAR_Investment_Objective;
import com.droolsUIEngine.droolsUIEngine.Models.SPAR_PRR_CPR;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class DataUtility {
    public static boolean writeToFile(List<String> newRow){
        try{
            FileWriter csvWriter = new FileWriter("src/main/resources/audit/audit.csv", true);
            csvWriter.append("\n");
            csvWriter.append(String.join(",", newRow));
            csvWriter.flush();
            csvWriter.close();
        }catch(Exception e){
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public static boolean prrcprAudit(SPAR_PRR_CPR sparPrrCpr, String reqID, String operation){
        List<String> auditTrail = new ArrayList<String>();
        auditTrail.add(reqID);
        auditTrail.add("SPAR_PRR_CPR");
        auditTrail.add(operation);
        String audit = "HKRegulated: "  + sparPrrCpr.HKRegulated + " | Direction: " + sparPrrCpr.Direction + " | ProductType: " + sparPrrCpr.ProductType + " | ProductSubType:" + sparPrrCpr.ProductSubType +
                " | HYBFIndicator" + sparPrrCpr.HYBFIndicator + " | ExecutionType: "+ sparPrrCpr.ExecutionType + " | VCStatus: " + sparPrrCpr.VCStatus + " | HedgingIndicator: " + sparPrrCpr.HedgingIndicator +
                " | CPR: " + sparPrrCpr.CPR + " | PRR" + sparPrrCpr.PRR + " | IsPRRMoreThanOREqualsToCPR: " + sparPrrCpr.IsPRRMoreThanOREqualsToCPR;
        auditTrail.add(audit);
        auditTrail.add(sparPrrCpr.Status);
        return writeToFile(auditTrail);
    }

    public static boolean HorizonAudit(SPAR_Investment_Horizon investmentHorizon, String reqID, String operation){
        List<String> auditTrail = new ArrayList<String>();
        auditTrail.add(reqID);
        auditTrail.add("SPAR_Investment_Horizon");
        auditTrail.add(operation);
        String audit = "HKRegulated: "  + investmentHorizon.HKRegulated + " | Direction: " + investmentHorizon.Direction + " | ProductType: " + investmentHorizon.ProductType + " | ProductSubType:" + investmentHorizon.ProductSubType +
                " | ExecutionType: "+ investmentHorizon.ExecutionType + " | VCStatus: " + investmentHorizon.VC + " | Investment Horizon: " + investmentHorizon.InvestmentHorizon +
                " | ProductTenor: " + investmentHorizon.ProductTenor + " | Tenor" + investmentHorizon.Tenor + " | FundMasterList: " + investmentHorizon.FundMasterList;
        auditTrail.add(audit);
        auditTrail.add(investmentHorizon.Status);
        return writeToFile(auditTrail);
    }


    public static boolean ObjectiveAudit(SPAR_Investment_Objective investmentObjective, String reqID, String operation) {
        List<String> auditTrail = new ArrayList<String>();
        auditTrail.add(reqID);
        auditTrail.add("SPAR_Investment_Objective");
        auditTrail.add(operation);
        String audit = "HKRegulated: "  + investmentObjective.HKRegulated + " | Direction: " + investmentObjective.Direction + " | ProductType: " + investmentObjective.ProductType + " | ProductSubType:" + investmentObjective.ProductSubType +
                " | ExecutionType: "+ investmentObjective.ExecutionType + " | VCStatus: " + investmentObjective.VCStatus + " | ClientInvObjective: " + investmentObjective.ClientInvObjective +
                " | ProductInvObjective: " + investmentObjective.ProductInvObjective;
        auditTrail.add(audit);
        auditTrail.add(investmentObjective.Status);
        return writeToFile(auditTrail);
    }

    public static List<AuditResponse> readCsvFile() {
        //List<AuditResponse> aud = new ArrayList<AuditResponse>();
        Pattern pattern = Pattern.compile(",");
        try (BufferedReader in = new BufferedReader(new FileReader("src/main/resources/audit/audit.csv"));){
            List<AuditResponse> auditRows = in
                    .lines()
                    .skip(1)
                    .map(line -> {
                        String[] x = pattern.split(line);
                        return new AuditResponse(x[0],
                                x[1],
                                x[2],
                                x[3],
                                x[4]);
                    })
                    .collect(Collectors.toList());
            ObjectMapper mapper = new ObjectMapper();
            mapper.enable(SerializationFeature.INDENT_OUTPUT);
            mapper.writeValue(System.out, auditRows);
            return auditRows;
        }catch(Exception e){
            e.printStackTrace();
        }

        return null;
    }
}
