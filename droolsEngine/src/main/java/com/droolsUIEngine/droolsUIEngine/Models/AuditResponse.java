package com.droolsUIEngine.droolsUIEngine.Models;

public class AuditResponse {
    public String ReqId;
    public String Timestamp;
    public String Category;
    public String Operation;
    public String Rule;
    public String Status;

    public AuditResponse(String ReqId, String Timestamp, String Category, String Operation, String Rule, String Status){
        this.ReqId = ReqId;
        this.Timestamp = Timestamp;
        this.Category = Category;
        this.Operation = Operation;
        this.Rule = Rule;
        this.Status = Status;
    }
}

