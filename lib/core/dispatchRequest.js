/*
 * @Description: 请求
 * @Author: Gavin
 * @Date: 2022-02-09 15:23:07
 * @LastEditTime: 2022-02-11 17:09:31
 * @LastEditors: Gavin
 */


const {getDownload,getUpload,getXhr}=require('./wx-network')
const createFullPath=require('./createFullPath')


module.exports = function (config) {

  const method =config.method||"get"
  const fullPath=createFullPath(config.baseURL,config.url)
  config.url=fullPath
  if(method=='downloadFile'){
     //文件下载
    return getDownload(config)    
  }else if (method=='uploadFile'){
    //文件上传
    return getUpload(config)
  }else{
      //正常请求
    return getXhr(config)
  }
}
