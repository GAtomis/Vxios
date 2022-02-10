

 //拓展函数
/**
 * @description: 遍历每一项都并执行回调函数
 * @param {any} arg 执行回调绑定的this值
 * @param {function} fn 执行回调
 * @return {*}
 * 
 *  */ 
module.exports=function bind(fn,arg) {

  return function tra() {
      //伪数组=>真数组
    let params  = Array.prototype.slice.call(arguments);
    return fn.apply(arg,params)
  }

}