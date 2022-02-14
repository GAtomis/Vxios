/*
 * @Description: processResult
 * @Author: Gavin
 * @Date: 2022-02-13 19:42:52
 * @LastEditTime: 2022-02-13 21:26:20
 * @LastEditors: Gavin
 */




function processFulfilled(config) {
  config = JSON.parse(JSON.stringify(config))
  return function useResolve(res) {
    return Promise.resolve({ ...res, config })
  }

}
function processRejected(config) {

  config = JSON.parse(JSON.stringify(config))
  return function useReject(error) {
    return Promise.reject({ ...error, config })

  }
}

module.exports = { processFulfilled, processRejected }

