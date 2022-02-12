/*
 * @Description: interceptors
 * @Author: Gavin
 * @Date: 2022-02-11 23:05:18
 * @LastEditTime: 2022-02-12 23:13:59
 * @LastEditors: Gavin
 */
var utils = require("../utils/utils")


class InterceptorsCommon {
  forEach(fn) {
    utils.forEach(this.handlers, (h) => {
      if (h != null) fn(h)
    })

  }
  clean(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    })
    return this.handlers.length - 1
  
  }
  constructor() {
    this.handlers = []
  }
}


// InterceptorsCommon.prototype.use = function use(fulfilled, rejected) {
//   this.handlers.push({
//     fulfilled,
//     rejected
//   })
//   return this.handlers.length - 1

// }

module.exports = InterceptorsCommon