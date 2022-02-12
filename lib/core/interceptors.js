/*
 * @Description: interceptors
 * @Author: Gavin
 * @Date: 2022-02-11 23:05:18
 * @LastEditTime: 2022-02-12 11:36:32
 * @LastEditors: Gavin
 */
var utils = require("../utils/utils")


class InterceptorsCommon {
  forEach(fn) {
    utils.forEach(this.handlers, (h) => {
      if (h != null) fn(h)
    })

  }
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  constructor() {
    this.handlers = []
  }
}

InterceptorsCommon.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled,
    rejected
  })
  return this.handlers.length - 1

}

module.exports = InterceptorsCommon