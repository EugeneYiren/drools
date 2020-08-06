export const createNewRuleResponse = (
  hkRegulated,
  direction,
  productType,
  productSubType,
  executionType,
  investmentHorizon,
  productTenor,
  tenor,
  vcStatus,
  fundMasterList
) => ({
  HKRegulated: hkRegulated,
  Direction: direction,
  ProductType: productType,
  ProductSubType: productSubType,
  ExecutionType: executionType,
  InvestmentHorizon: investmentHorizon,
  ProductTenor: productTenor,
  Tenor: tenor,
  VC: vcStatus,
  FundMasterList: fundMasterList,
})

export default {}
