export const POST_NEW_RULE = 'POST_NEW_RULE'
export const POST_NEW_RULE_SUCCESS = 'POST_NEW_RULE_SUCCESS'
export const POST_NEW_RULE_FAILURE = 'POST_NEW_RULE_FAILURE'

export const postNewRule = (data) => ({
  type: POST_NEW_RULE,
  payload: { data },
})

export const postNewRuleSuccess = (data) => ({
  type: POST_NEW_RULE_SUCCESS,
  payload: { data },
})

export const postNewRuleFailure = (error) => ({
  type: POST_NEW_RULE_FAILURE,
  payload: { error },
})
