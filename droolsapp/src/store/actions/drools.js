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
