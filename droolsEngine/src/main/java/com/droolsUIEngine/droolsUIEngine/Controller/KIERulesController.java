package com.droolsUIEngine.droolsUIEngine.Controller;

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


    @RequestMapping(value = "/new_rule", method = RequestMethod.POST, produces = "application/json")
    public void NewRuleCreation(@RequestParam(required = true) String arr) {
        SPAR_Investment_Horizon s = new SPAR_Investment_Horizon();
        //s.setValues(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]);
        s.setValues("N", "Buy", "12", "12", "12",
                "12", "12", "12", "12", "12");
        KieContainer container=KIERulesService.build(KieServices.Factory.get(),s);
        System.out.println(container.getReleaseId());
        System.out.println(container.getKieBase());
    }

    @RequestMapping(value = "/SPAR_Investment_Horizon", method = RequestMethod.GET, produces = "application/json")
    public SPAR_Investment_Horizon SPARInvestmentHorizon(@RequestParam(required = true) String HKRegulated, String Direction, String ProductType, String ProductSubType, String ExecutionType,
                                String InvestmentHorizon, String ProductTenor, String Tenor, String VC, String FundMasterList) {

        SPAR_Investment_Horizon spar_investment_horizon = new SPAR_Investment_Horizon();
        spar_investment_horizon.setValues(HKRegulated, Direction, ProductType, ProductSubType, ExecutionType, InvestmentHorizon, ProductTenor, Tenor, VC, FundMasterList);
        KIERulesService.getRulesForInvestmentHorizon(spar_investment_horizon);
        return spar_investment_horizon;
    }
}
