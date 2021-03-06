import { get } from '../../../services/HttpService'

let url = 'https://finnhub.io/api/v1/crypto/symbol'
let API_KEY = process.env.FINNHUB_API_KEY

export default async function handler(req, res) {
  let { exchange } = req.query
  let data = await get(`${url}?exchange=${exchange}&token=${API_KEY}`)

  res.json(data)
}
