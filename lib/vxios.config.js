/*
 * @Description: 本地配置
 * @Author: Gavin
 * @Date: 2022-02-09 15:23:07
 * @LastEditTime: 2022-02-11 18:00:57
 * @LastEditors: Gavin
 */


const contentType={
  json:'application/json',
  form:"application/x-www-form-urlencoded"
}

const defaults= {
  header:{
    'content-type': contentType["json"]
  },
  getTask:task=>task,
  timeout: 2000,
}
module.exports=defaults

