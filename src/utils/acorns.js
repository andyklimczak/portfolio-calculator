function andy () {
  console.log('andy')
}

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
  }
}

export { andy, acornsPortfolio }
