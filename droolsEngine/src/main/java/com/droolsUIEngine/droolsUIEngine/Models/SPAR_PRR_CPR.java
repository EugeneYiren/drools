package com.droolsUIEngine.droolsUIEngine.Models;

public class SPAR_PRR_CPR {
    public String HKRegulated;
    public String Direction;
    public String ProductType;
    public String ProductSubType;
    public String HYBFIndicator;
    public String ExecutionType;
    public String VCStatus;
    public String HedgingIndicator;
    public String CPR;
    public String PRR;
    public String isPRRMoreThanOREqualsToCPR;
    public String Status;

    public void setValues(String HKRegulated, String Direction, String ProductType, String ProductSubType, String HYBFIndicator, String ExecutionType,
                          String VCStatus, String HedgingIndicator, String CPR, String PRR, String isPRRMoreThanOREqualsToCPR, String Status){
        this.HKRegulated = HKRegulated;
        this.Direction = Direction;
        this.ProductType = ProductType;
        this.ProductSubType = ProductSubType;
        this.HYBFIndicator = HYBFIndicator;
        this.ExecutionType = ExecutionType;
        this.VCStatus = VCStatus;
        this.HedgingIndicator = HedgingIndicator;
        this.CPR = CPR;
        this.PRR = PRR;
        this.isPRRMoreThanOREqualsToCPR = isPRRMoreThanOREqualsToCPR;
        this.Status = Status;
    }

    public void setStatus(String status){
        this.Status = status;
    }
}
