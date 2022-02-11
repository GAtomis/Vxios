
var utils = require('../utils/utils')

var InterceptorsCommon = require('./interceptors')
var dispatchRequest = require('./dispatchRequest')

class VXios {



  get config() {
    return this.defaults

  }
  set config(val) {
    this.defaults = val
  }
  constructor(instanceConfig) {
    this.defaults = instanceConfig
    this.interceptors = {
      request: new InterceptorsCommon(),
      response: new InterceptorsCommon()
    }

  }
}

VXios.prototype.mergebase = function mergebase(newItem, base = this.defaults) {
  if (base.baseUrl) {
    newItem.url = base.baseUrl + newItem.url
  }

}

VXios.prototype.request = function request(config) {
  if (typeof config === 'string') {
    config = arguments[1] || {}
    config.url = arguments[0]
  } else {
    config = config || {}
  }

  config = utils.merge({}, this.defaults, config)

  if (config.method) {
    config.method = config.method.toLowerCase()

  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase()
  } else {
    config.method = 'get'
  }
  //链式调用
  let chain = [dispatchRequest, undefined];
  // let chain =[];
  // let hasInterceptors=true
  // console.error(this);
  let promise = Promise.resolve(config)

  this.interceptors.request.forEach(function unshiftRequest(interceptor) {


    chain.unshift(interceptor.fulfilled, interceptor.rejected)
  })
  this.interceptors.response.forEach(function pushResponse(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected)
  })
  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift())
  }

  return promise

}


function forEachMethodWithData(method) {
  VXios.prototype[method] = function (url, data, config) {

    return this.request({
      ...config,
      ...{
        method,
        url,
        data
      }
    })
  }
}

function forEachMethodNoData(method) {
  VXios.prototype[method] = function (url, config) {
    return this.request({
      ...config,
      ...{
        method,
        url
      }
    })
  }
}

utils.forEach(['downloadFile',"uploadFile"],forEachMethodNoData)

utils.forEach(['post', 'get', 'head', 'post', 'put', 'delete', 'trace', 'connect'], forEachMethodWithData)

module.exports = VXios