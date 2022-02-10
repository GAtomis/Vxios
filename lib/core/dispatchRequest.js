/*
 * @Description: 请求
 * @Author: Gavin
 * @Date: 2022-02-09 15:23:07
 * @LastEditTime: 2022-02-10 14:26:39
 * @LastEditors: Gavin
 */


const {getDownload,getUpload,getXhr}=require('./wx-network')
const createFullPath=require('./createFullPath')


module.exports = function (config) {

  const type =config.type||"request"
  const fullPath=createFullPath(config.baseURL,config.url)
  config.url=fullPath
  if(type=='download'){
     //文件下载
    return getDownload(config)    
  }else if (type=='upload'){
    //文件上传
    return getUpload(config)
  }else{
      //正常请求
    return getXhr(config)
  }
}
