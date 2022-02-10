





 const bind=require('../helper/bind')

 //拓展函数
/**
 * @description: 遍历每一项都并执行回调函数
 * @param {any} obj 原对象
 * @param {function} fn执行回调
 * @param {object} 词法作用域执行
 * @return {*}
 * 
 *  */ 
function forEach(obj, fn,context=null) {
  if (obj === null || typeof obj === 'undefined') return;


  if (typeof obj !== 'object') obj = new Array(obj)


  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {

      //改变作用域指向问题,可以保证每个函数执行都可以不被作用域污染
      fn.call(context, item, index, obj)
    })
  } else {
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(context, obj[key], key, obj)
      }
    }
  }
}


//拓展函数
/**
 * @description: 拓展函数
 * @param {object} origin 原对象
 * @param {object} copy 需要拷贝上的对象
 * @param {object}  thisArg this指向参数 
 * @return {*}
 * 
 *  */ 

function useExtend(origin,copy,thisArg){
  forEach(copy,(val,key)=>{
    if(thisArg&&typeof val ==='function'){
      origin[key]=bind(val,thisArg)
    }else{
      origin[key]=val
    }
  })
  
}

function merge (...arg){
  return Object.assign(...arg)
}
module.exports={useExtend,forEach,merge}
