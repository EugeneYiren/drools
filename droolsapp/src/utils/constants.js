export const INVESTMENT_HORIZON = {
  HKRegulated: ['Yes', 'No'],
  Direction: ['Buy', 'Sell'],
  ProductType: [
    'Bonds',
    'Funds',
    'IPO Bonds',
    'Equities',
    'IPO Equities',
    'FX Forwards',
    'FX Derivate',
    'Equity Derivative',
    'Loans',
    'Deposits',
    'FX Swaps',
    'FX Spots',
  ],
  ProductSubType: ['Mutual Funds', 'Exclude Mutual Funds'],
  ExecutionType: ['Advisory', 'Execution Only'],
  InvestmentHorizon: ['A', 'B', 'C', 'D', 'NA'],
  ProductTenor: ['A', 'B', 'C', 'D', 'NA'],
  Tenor: [
    'Invalid',
    'GT1',
    'GT2',
    'GT3',
    'GT4',
    'GT5',
    'GT6',
    'GT7',
    'GT8',
    'GT9',
    'GT10',
    'LTEQ1',
    'LTEQ2',
    'LTEQ3',
    'LTEQ4',
    'LTEQ5',
    'LTEQ6',
    'LTEQ7',
    'LTEQ8',
    'LTEQ9',
    'LTEQ10',
    'NA',
  ],
  VC: ['Y', 'N', 'NA'],
  FundMasterList: ['Y', 'N', 'NA'],
  Status: ['Hard Block', 'Soft Block', 'Pass'],
}

export const INVESTMENT_HORIZON_MAPPING = {
  HKRegulated: 'HK Regulated',
  Direction: 'Direction',
  ProductType: 'Product Type',
  ProductSubType: 'Product Sub Type',
  ExecutionType: 'Execution Type',
  InvestmentHorizon: 'Investment Horizon',
  ProductTenor: 'Product Tenor',
  Tenor: 'Tenor',
  VC: 'VC Status',
  FundMasterList: 'Fund Master List',
  Status: 'Status',
}

export const INVESTMENT_HORIZON_ATTRIBUTE_MAPPING = {
  A: '> 1 year',
  B: '> 5 years',
  C: '> 10 years',
  D: 'Any investment time horizon',
  NA: 'NA',
}

export const PRODUCT_TENOR_ATTRIBUTE_MAPPING = {
  A: '1 year',
  B: '4 years',
  C: '5 years',
  D: 'Up to 1 year',
  NA: 'NA',
}

export const INVESTMENT_OBJECTIVE = {
  HKRegulated: ['Yes', 'No'],
  Direction: ['Buy', 'Sell'],
  ProductType: [
    'Bonds',
    'Funds',
    'IPO Bonds',
    'Equities',
    'IPO Equities',
    'FX Forwards',
    'FX Derivate',
    'Equity Derivative',
    'Loans',
    'Deposits',
    'FX Swaps',
    'FX Spots',
  ],
  // ProductSubType: [
  //   'COCO Bonds',
  //   'Precious Metal',
  //   'FX KODA',
  //   'EQD KODA',
  //   'Accumulators',
  //   'Decumulators',
  //   'Pivot',
  //   'TEKO',
  //   'Exclude COCO Bonds',
  //   'Exclude EQD KODA',
  //   'Exclude FX KODA',
  //   'NA',
  // ],
  ProductSubType: ['Mutual Funds', 'Exclude Mutual Funds'],
  ExecutionType: ['Advisory', 'Execution Only'],
  VCStatus: ['Y', 'N'],
  ClientInvObjective: [
    'Capital Preservation',
    'Income generation with slight capital growth',
    'Income generation with capital growth',
    'Capital growth with slight income generation',
    'High capital growth',
    'Primarily capital preservation',
    'Primarily income generation along with slight capital growth',
    'To achieve a balance of income generation and capital growth',
    'Primarily capital growth along with slight income generation',
    'Primarily high capital growth',
  ],
  ProductInvObjective: [
    'Capital Preservation',
    'Income Generation',
    'Capital Appreciation',
    'NA',
  ],
  Status: ['Hard Block', 'Soft Block', 'Pass'],
}

export const INVESTMENT_OBJECTIVE_MAPPING = {
  HKRegulated: 'HK Regulated',
  Direction: 'Direction',
  ProductType: 'Product Type',
  ProductSubType: 'Product Sub Type',
  ExecutionType: 'Execution Type',
  VCStatus: 'VC Status',
  ClientInvObjective: 'Client Inv Objective',
  ProductInvObjective: 'Product Inv Objective',
  Status: 'Status',
}

export const PRR_CPR = {
  HKRegulated: ['Yes', 'No'],
  Direction: ['Buy', 'Sell'],
  ProductType: [
    'Bonds',
    'Funds',
    'IPO Bonds',
    'Equities',
    'IPO Equities',
    'FX Forwards',
    'FX Derivate',
    'Equity Derivative',
    'Loans',
    'Deposits',
    'FX Swaps',
    'FX Spots',
  ],
  // ProductSubType: [
  //   'COCO Bonds',
  //   'Precious Metal',
  //   'FX KODA',
  //   'EQD KODA',
  //   'Accumulators',
  //   'Decumulators',
  //   'Pivot',
  //   'TEKO',
  //   'Exclude COCO Bonds',
  //   'Exclude EQD KODA',
  //   'Exclude FX KODA',
  //   'NA',
  // ],
  ProductSubType: ['Mutual Funds', 'Exclude Mutual Funds'],
  HYBFIndicator: ['Y', 'N', 'NA'],
  ExecutionType: ['Advisory', 'Execution Only'],
  VCStatus: ['Y', 'N', 'NA'],
  HedgingIndicator: ['Y', 'N', 'NA'],
  CPR: ['1', '2', '3', '4', '5', 'NA'],
  PRR: ['1', '2', '3', '4', '5', 'NA'],
  IsPRRMoreThanOREqualsToCPR: ['Y', 'N', 'INVALID', 'NA'],
  Status: ['Hard Block', 'Soft Block', 'Pass'],
}

export const PRR_CPR_MAPPING = {
  HKRegulated: 'HK Regulated',
  Direction: 'Direction',
  ProductType: 'Product Type',
  ProductSubType: 'Product Sub Type',
  HYBFIndicator: 'HYBF Indicator',
  ExecutionType: 'Execution Type',
  VCStatus: 'VC Status',
  HedgingIndicator: 'Hedging Indicator',
  CPR: 'CPR',
  PRR: 'PRR',
  IsPRRMoreThanOREqualsToCPR: 'CPR<=PRR',
  Status: 'Status',
}
