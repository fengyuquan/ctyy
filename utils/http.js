import { promisic } from './util'
import { config } from '../config/config'

class Http {
  static async request({ url, data, method = 'GET' }, ...params) {
    const res = await promisic(wx.request)({
      url: `${config.apiBaseUrl}${url}`,
      data,
      method,
      ...params
    })
    return res.data
  }
}

export { Http }
