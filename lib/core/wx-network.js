/*
 * @Description: 微信项目导入
 * @Author: Gavin
 * @Date: 2022-02-09 15:23:07
 * @LastEditTime: 2022-02-13 00:17:52
 * @LastEditors: Gavin
 */
function getXhr(config) {
  return new Promise((resolve, reject) => {
    const xhr = wx.request
    // const requestData = config.data
    // const requestHeader = config.header
    config && !config.getTask && (config.getTask = task => task)
    config.getTask(xhr({
      ...config,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    }))


  })






}

function getUpload(config) {
  return new Promise((resolve, reject) => {
    const xhr = wx.uploadFile
    config && !config.getTask && (config.getTask = task => task)
    config.getTask(xhr({
      ...config,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    }))
  })

}

function getDownload(config) {
  return new Promise((resolve, reject) => {
    const xhr = wx.uploadFile
    config && !config.getTask && (config.getTask = task => task)
    config.getTask(xhr({
      ...config,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      }
    }))
  })
}

module.exports = {
  getDownload,
  getUpload,
  getXhr
}