const promisic = (func) => {
  return (params = {}) => {
    return new Promise((resolve, reject) => {
      const args = {
        ...params,
        success: (res) => {
          resolve(res)
        },
        fail: (error) => {
          reject(error)
        },
      }
      func(args)
    })
  }
}

// 代理模式
export { promisic }
