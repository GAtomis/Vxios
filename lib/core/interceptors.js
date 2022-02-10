var utils = require("../utils/utils")


class InterceptorsCommon {
  forEach(fn) {
    utils.forEach(this.handlers, (h) => {
      if (h != null) fn(h)
    })

  }
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