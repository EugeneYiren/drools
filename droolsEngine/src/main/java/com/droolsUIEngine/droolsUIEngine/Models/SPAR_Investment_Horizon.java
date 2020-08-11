package com.droolsUIEngine.droolsUIEngine.Models;

public class SPAR_Investment_Horizon {
    public String HKRegulated;
    public String Direction;
    public String ProductType;
    public String ProductSubType;
    public String ExecutionType;
    public String InvestmentHorizon;
    public String ProductTenor;
    public String Tenor;
    public String VC;
    public String FundMasterList;
    public String Status;
    public String timeTaken;

    public void setValues(String HKRegulated, String Direction, String ProductType, String ProductSubType, String ExecutionType, String InvestmentHorizon, String ProductTenor, String Tenor, String VC, String FundMasterList, String Status){
        this.HKRegulated = HKRegulated;
        this.Direction = Direction;
        this.ProductType = ProductType;
        this.ProductSubType = ProductSubType;
        this.ExecutionType = ExecutionType;
        this.InvestmentHorizon = InvestmentHorizon;
        this.ProductTenor = ProductTenor;
        this.Tenor = Tenor;
        this.VC = VC;
        this.FundMasterList = FundMasterList;
        this.Status = Status;
    }

    public void setStatus(String status){
        this.Status = status;
    }

}
