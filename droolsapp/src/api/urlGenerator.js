export const generateUrlPostInvestmentHorizonRule = () =>
  '/v0/rule/new-rule/SPAR-Investment-Horizon'

export const generateUrlPostInvestmentObjectiveRule = () =>
  'v0/rule/new-rule/SPAR-Investment-Objective'

export const generateUrlPostPrrCprRule = () => 'v0/rule/new-rule/SPAR-PRR-CPR'

export const generateUrlGetInvestmentHorizonRule = (
  HKRegulated,
  Direction,
  ProductType,
  ProductSubType,
  ExecutionType,
  InvestmentHorizon,
  ProductTenor,
  Tenor,
  VC,
  FundMasterList
) =>
  `http://localhost:8080/v0/rule/get-rule/SPAR-Investment-Horizon?HKRegulated=${HKRegulated}&Direction=${Direction}&ProductType=${ProductType}&ProductSubType=${ProductSubType}&ExecutionType=${ExecutionType}&InvestmentHorizon=${InvestmentHorizon}&ProductTenor=${ProductTenor}&Tenor=${Tenor}&VC=${VC}&FundMasterList=${FundMasterList}`

export const generateUrlGetInvestmentObjectiveRule = (
  HKRegulated,
  Direction,
  ProductType,
  ProductSubType,
  ExecutionType,
  VCStatus,
  ClientInvObjective,
  ProductInvObjective
) =>
  `http://localhost:8080/v0/rule/get-rule/SPAR-Investment-Objective?HKRegulated=${HKRegulated}&Direction=${Direction}&ProductType=${ProductType}&ProductSubType=${ProductSubType}&ExecutionType=${ExecutionType}&VCStatus=${VCStatus}&ClientInvObjective=${ClientInvObjective}&ProductInvObjective=${ProductInvObjective}`

export const generateUrlGetPrrCprRule = (
  HKRegulated,
  Direction,
  ProductType,
  ProductSubType,
  HYBFIndicator,
  ExecutionType,
  VCStatus,
  HedgingIndicator,
  CPR,
  PRR,
  IsPRRMoreThanOREqualsToCPR
) =>
  `http://localhost:8080/v0/rule/get-rule/SPAR-PRR-CPR?HKRegulated=${HKRegulated}&Direction=${Direction}&ProductType=${ProductType}&ProductSubType=${ProductSubType}&HYBFIndicator=${HYBFIndicator}&ExecutionType=${ExecutionType}&VCStatus=${VCStatus}&HedgingIndicator=${HedgingIndicator}&CPR=${CPR}&PRR=${PRR}&IsPRRMoreThanOREqualsToCPR=${IsPRRMoreThanOREqualsToCPR}`
