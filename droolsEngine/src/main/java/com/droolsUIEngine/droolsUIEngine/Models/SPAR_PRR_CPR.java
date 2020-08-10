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
    public int CPR;
    public int PRR;
    public String IsPRRMoreThanOREqualsToCPR;
    public String Status;

    public void setValues(String HKRegulated, String Direction, String ProductType, String ProductSubType, String HYBFIndicator, String ExecutionType,
                          String VCStatus, String HedgingIndicator, int CPR, int PRR, String IsPRRMoreThanOREqualsToCPR, String Status){
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
        this.IsPRRMoreThanOREqualsToCPR = IsPRRMoreThanOREqualsToCPR;
        this.Status = Status;
    }

    public void setStatus(String status){
        this.Status = status;
    }
}
