package com.droolsUIEngine.droolsUIEngine.Models;

public class SPAR_Investment_Objective {
    public String HKRegulated;
    public String Direction;
    public String ProductType;
    public String ProductSubType;
    public String ExecutionType;
    public String VCStatus;
    public String ClientInvObjective;
    public String ProductInvObjective;
    public String Status;
    public String TimeTaken;

    public void setValues(String HKRegulated, String Direction, String ProductType, String ProductSubType, String ExecutionType, String VCStatus, String ClientInvObjective, String PublicInvObjective, String Status){
        this.HKRegulated = HKRegulated;
        this.Direction = Direction;
        this.ProductType = ProductType;
        this.ProductSubType = ProductSubType;
        this.ExecutionType = ExecutionType;
        this.VCStatus = VCStatus;
        this.ClientInvObjective = ClientInvObjective;
        this.ProductInvObjective = PublicInvObjective;
        this.Status = Status;
    }

    public void setStatus(String status){
        this.Status = status;
    }
}
