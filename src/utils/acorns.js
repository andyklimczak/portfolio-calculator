// VOO = Large Company Stocks
// VB = Small Company Stocks
// VWO = Emerging Market Stocks
// VNQ = Real Estate Stocks
// SHY = Government Bonds
// LQD = Corporate Bonds
// VEA = Intl Large Company Stocks
function acornsPortfolio (type) {
  switch (type) {
    case 'conservative' :
      return {
        'VOO': 0.12,
        'VB': 0.02,
        'VWO': 0,
        'VNQ': 0.02,
        'SHY': 0.4,
        'LQD': 0.4,
        'VEA': 0.04
      }
    case 'moderateConservative' :
      return {
        'VOO': 0.24,
        'VB': 0.04,
        'VWO': 0,
        'VNQ': 0.04,
        'SHY': 0.3,
        'LQD': 0.3,
        'VEA': 0.08
      }
    case 'moderate':
      return {
        'VOO': 0.29,
        'VB': 0.1,
        'VWO': 0.03,
        'VNQ': 0.06,
        'SHY': 0.2,
        'LQD': 0.2,
        'VEA': 0.12
      }
    case 'moderateAggressive':
      return {
        'VOO': 0.38,
        'VB': 0.14,
        'VWO': 0.04,
        'VNQ': 0.08,
        'SHY': 0.1,
        'LQD': 0.1,
        'VEA': 0.16
      }
    case 'aggressive':
      return {
        'VOO': 0.4,
        'VB': 0.2,
        'VWO': 0.1,
        'VNQ': 0.1,
        'SHY': 0,
        'LQD': 0,
        'VEA': 0.2
      }
  }
}

export { acornsPortfolio }
