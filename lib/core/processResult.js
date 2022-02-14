/*
 * @Description: processResult
 * @Author: Gavin
 * @Date: 2022-02-13 19:42:52
 * @LastEditTime: 2022-02-14 15:18:58
 * @LastEditors: Gavin
 */




function processFulfilled(config) {
  config = JSON.parse(JSON.stringify(config))
  return function useResolve(res) {
    res.__proto__.config = config
    return Promise.resolve(res)
  }

}
function processRejected(config) {
  config = JSON.parse(JSON.stringify(config))
  return function useReject(err) {
    err.__proto__.config = config
    return Promise.reject(err)

  }
}

module.exports = { processFulfilled, processRejected }

