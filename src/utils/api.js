import axios from 'axios'

async function getData () {
  const response = await axios.get('https://api.iextrading.com/1.0/stock/market/batch?symbols=voo,vb,vwo,vnq,shy,lqd,vea&types=stats')
  return response['data']
}

export { getData }
