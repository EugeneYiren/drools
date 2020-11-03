export const createNewRuleResponse = (obj) => {
  const newRuleResponseObj = {}
  // eslint-disable-next-line no-return-assign
  Object.keys(obj).map((key) => (newRuleResponseObj[key] = obj[key]))

  return JSON.stringify(newRuleResponseObj)
}

export default {}
