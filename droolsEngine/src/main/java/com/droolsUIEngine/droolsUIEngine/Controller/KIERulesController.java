package com.droolsUIEngine.droolsUIEngine.Controller;

import com.google.gson.Gson;
import org.kie.api.KieServices;
import org.kie.api.runtime.KieContainer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.droolsUIEngine.droolsUIEngine.Models.*;
import com.droolsUIEngine.droolsUIEngine.Service.KIERulesService;


@RestController
public class KIERulesController {

    private final KIERulesService KIERulesService;

    @Autowired
    public KIERulesController(KIERulesService KIERulesService) {
        this.KIERulesService = KIERulesService;
    }


    @RequestMapping(value = "/v0/rule/new-rule/SPAR-Investment-Objective", method = RequestMethod.POST, produces = "application/json")
    public void NewRuleCreationSPAROBJ(@RequestBody(required = true) String paramJSON) {
        Gson g = new Gson();
        SPAR_Investment_Objective s = g.fromJson(paramJSON, SPAR_Investment_Objective.class);
        KieContainer container=KIERulesService.build(KieServices.Factory.get(),null, s);
        System.out.println(container.getReleaseId());
        System.out.println(container.getKieBase());
    }

    @RequestMapping(value = "v0/rule/get-rule/SPAR_Investment_Objective", method = RequestMethod.GET, produces = "application/json")
    public SPAR_Investment_Objective SPARInvestmentObjective(@RequestParam(required = true) String HKRegulated, String Direction, String ProductType, String ProductSubType, String ExecutionType,
                                                           String VCStatus, String ClientInvObjective, String ProductInvObjective) {

        SPAR_Investment_Objective spar_investment_objective = new SPAR_Investment_Objective();
        spar_investment_objective.setValues(HKRegulated, Direction, ProductType, ProductSubType, ExecutionType, VCStatus, ClientInvObjective, ProductInvObjective, "");
        KIERulesService.getRulesForInvestmentObjective(spar_investment_objective);
        return spar_investment_objective;
    }

    @RequestMapping(value = "/v0/rule/new-rule/SPAR-Investment-Horizon", method = RequestMethod.POST, produces = "application/json")
    public void NewRuleCreationSPARInv(@RequestBody(required = true) String paramJSON) {
        Gson g = new Gson();
        SPAR_Investment_Horizon s = g.fromJson(paramJSON, SPAR_Investment_Horizon.class);
        KieContainer container=KIERulesService.build(KieServices.Factory.get(),s, null);
        System.out.println(container.getReleaseId());
        System.out.println(container.getKieBase());
    }

    @RequestMapping(value = "v0/rule/get-rule/SPAR_Investment_Horizon", method = RequestMethod.GET, produces = "application/json")
    public SPAR_Investment_Horizon SPARInvestmentHorizon(@RequestParam(required = true) String HKRegulated, String Direction, String ProductType, String ProductSubType, String ExecutionType,
                                String InvestmentHorizon, String ProductTenor, String Tenor, String VC, String FundMasterList) {

        SPAR_Investment_Horizon spar_investment_horizon = new SPAR_Investment_Horizon();
        spar_investment_horizon.setValues(HKRegulated, Direction, ProductType, ProductSubType, ExecutionType, InvestmentHorizon, ProductTenor, Tenor, VC, FundMasterList, "");
        KIERulesService.getRulesForInvestmentHorizon(spar_investment_horizon);
        return spar_investment_horizon;
    }
}
