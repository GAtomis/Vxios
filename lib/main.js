/*
 * @Description: 入口
 * @Author: Gavin
 * @Date: 2022-02-09 14:48:14
 * @LastEditTime: 2022-02-10 14:26:35
 * @LastEditors: Gavin
 */

var bind = require('./helper/bind')
var utils = require('./utils/utils')
var Vxios = require('./core/Vxios')
var defaultes=require('./vxios.config')

function createInstance(defaultConfig) {
  const context = new Vxios(defaultConfig)
  const intstance = bind(Vxios.prototype.request, context)

  utils.useExtend(intstance, Vxios.prototype, context)
  utils.useExtend(intstance, context)
  utils.useExtend(intstance,{create,Vxios,context})

  return intstance
}
let vxios = createInstance(defaultes)
function create(config){
  if(config.constructor!=Object){
    throw new Error("传入参数不是配置类型")
  }
  return createInstance({...defaultes,...config})
}




module.exports=vxios