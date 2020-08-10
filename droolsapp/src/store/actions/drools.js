export const POST_INVESTMENT_HORIZON_RULE = 'POST_INVESTMENT_HORIZON_RULE'
export const POST_INVESTMENT_HORIZON_RULE_SUCCESS =
  'POST_INVESTMENT_HORIZON_RULE_SUCCESS'
export const POST_INVESTMENT_HORIZON_RULE_FAILURE =
  'POST_INVESTMENT_HORIZON_RULE_FAILURE'
export const POST_INVESTMENT_OBJECTIVE_RULE = 'POST_INVESTMENT_OBJECTIVE_RULE'
export const POST_INVESTMENT_OBJECTIVE_RULE_SUCCESS =
  'POST_INVESTMENT_OBJECTIVE_RULE_SUCCESS'
export const POST_INVESTMENT_OBJECTIVE_RULE_FAILURE =
  'POST_INVESTMENT_OBJECTIVE_RULE_FAILURE'
export const POST_PRR_CPR_RULE = 'POST_PRR_CPR_RULE'
export const POST_PRR_CPR_RULE_SUCCESS = 'POST_PRR_CPR_RULE_SUCCESS'
export const POST_PRR_CPR_RULE_FAILURE = 'POST_PRR_CPR_RULE_FAILURE'

export const GET_INVESTMENT_HORIZON_RULE = 'GET_INVESTMENT_HORIZON_RULE'
export const GET_INVESTMENT_HORIZON_RULE_SUCCESS =
  'GET_INVESTMENT_HORIZON_RULE_SUCCESS'
export const GET_INVESTMENT_HORIZON_RULE_FAILURE =
  'GET_INVESTMENT_HORIZON_RULE_FAILURE'
export const GET_INVESTMENT_OBJECTIVE_RULE = 'GET_INVESTMENT_OBJECTIVE_RULE'
export const GET_INVESTMENT_OBJECTIVE_RULE_SUCCESS =
  'GET_INVESTMENT_OBJECTIVE_RULE_SUCCESS'
export const GET_INVESTMENT_OBJECTIVE_RULE_FAILURE =
  'GET_INVESTMENT_OBJECTIVE_RULE_FAILURE'
export const GET_PRR_CPR_RULE = 'GET_PRR_CPR_RULE'
export const GET_PRR_CPR_RULE_SUCCESS = 'GET_PRR_CPR_RULE_SUCCESS'
export const GET_PRR_CPR_RULE_FAILURE = 'GET_PRR_CPR_RULE_FAILURE'

// GET calls
export const getInvestmentHorizonRule = (
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
) => ({
  type: GET_INVESTMENT_HORIZON_RULE,
  payload: {
    HKRegulated,
    Direction,
    ProductType,
    ProductSubType,
    ExecutionType,
    InvestmentHorizon,
    ProductTenor,
    Tenor,
    VC,
    FundMasterList,
  },
})

export const getInvestmentHorizonRuleSuccess = (data) => ({
  type: GET_INVESTMENT_HORIZON_RULE_SUCCESS,
  payload: { data },
})

export const getInvestmentHorizonRuleFailure = (error) => ({
  type: GET_INVESTMENT_HORIZON_RULE_FAILURE,
  payload: { error },
})

export const getInvestmentObjectiveRule = (
  HKRegulated,
  Direction,
  ProductType,
  ProductSubType,
  ExecutionType,
  VCStatus,
  ClientInvObjective,
  ProductInvObjective
) => ({
  type: GET_INVESTMENT_OBJECTIVE_RULE,
  payload: {
    HKRegulated,
    Direction,
    ProductType,
    ProductSubType,
    ExecutionType,
    VCStatus,
    ClientInvObjective,
    ProductInvObjective,
  },
})

export const getInvestmentObjectiveRuleSuccess = (data) => ({
  type: GET_INVESTMENT_OBJECTIVE_RULE_SUCCESS,
  payload: { data },
})

export const getInvestmentObjectiveRuleFailure = (error) => ({
  type: GET_INVESTMENT_OBJECTIVE_RULE_FAILURE,
  payload: { error },
})

export const getPrrCprRule = (
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
) => ({
  type: GET_PRR_CPR_RULE,
  payload: {
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
    IsPRRMoreThanOREqualsToCPR,
  },
})

export const getPrrCprRuleSuccess = (data) => ({
  type: GET_PRR_CPR_RULE_SUCCESS,
  payload: { data },
})

export const getPrrCprRuleFailure = (error) => ({
  type: GET_PRR_CPR_RULE_FAILURE,
  payload: { error },
})

// POST calls
export const postInvestmentHorizonRule = (data) => ({
  type: POST_INVESTMENT_HORIZON_RULE,
  payload: { data },
})

export const postInvestmentHorizonRuleSuccess = (data) => ({
  type: POST_INVESTMENT_HORIZON_RULE_SUCCESS,
  payload: { data },
})

export const postInvestmentHorizonRuleFailure = (error) => ({
  type: POST_INVESTMENT_HORIZON_RULE_FAILURE,
  payload: { error },
})

export const postInvestmentObjectiveRule = (data) => ({
  type: POST_INVESTMENT_OBJECTIVE_RULE,
  payload: { data },
})

export const postInvestmentObjectiveRuleSuccess = (data) => ({
  type: POST_INVESTMENT_OBJECTIVE_RULE_SUCCESS,
  payload: { data },
})

export const postInvestmentObjectiveRuleFailure = (error) => ({
  type: POST_INVESTMENT_OBJECTIVE_RULE_FAILURE,
  payload: { error },
})

export const postPrrCprRule = (data) => ({
  type: POST_PRR_CPR_RULE,
  payload: { data },
})

export const postPrrCprRuleSuccess = (data) => ({
  type: POST_PRR_CPR_RULE_SUCCESS,
  payload: { data },
})

export const postPrrCprRuleFailure = (error) => ({
  type: POST_PRR_CPR_RULE_FAILURE,
  payload: { error },
})
