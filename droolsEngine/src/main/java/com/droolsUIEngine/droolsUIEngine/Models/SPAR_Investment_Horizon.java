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
    public String vc;
    public String FundMasterList;
    public boolean pass;
    public boolean test;

    public void setValues(String HKRegulated, String Direction, String ProductType, String ProductSubType, String ExecutionType, String InvestmentHorizon, String ProductTenor, String Tenor, String vc, String FundMasterList){
        this.HKRegulated = HKRegulated;
        this.Direction = Direction;
        this.ProductType = ProductType;
        this.ProductSubType = ProductSubType;
        this.ExecutionType = ExecutionType;
        this.InvestmentHorizon = InvestmentHorizon;
        this.ProductTenor = ProductTenor;
        this.Tenor = Tenor;
        this.vc = vc;
        this.FundMasterList = FundMasterList;
    }

    public void setStatus(boolean pass){
        this.pass = pass;
    }

    public void setTest(boolean test){
        this.test = test;
    }
}
