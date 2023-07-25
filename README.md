<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-02-09 22:35:52
 * @LastEditTime: 2022-03-04 12:59:25
 * @LastEditors: Gavin
-->
# Vxios
一个微信小程序的mini网络请求库

## 文档
[文档地址](https://gatomis.github.io/Vxios/)

## 掘金
[文章地址](https://juejin.cn/post/7064438079355879455)
## 关于Typecript 
ts的支持目前最新版本[Tacos](https://github.com/GAtomis/tacos,本项目已不在维护。

## 关于Vxios
设计这个mini库的初衷是为了统一管理微信的所有请求方法,目的是将所有微信与网络的请求统一Promise化，并且能与web端Axios进行相互迁移(仍在完善中),
## 特性
* 支持Promise API
* CommonJS模块规范
* ES6书写风格
* 拦截请求和响应
* 集成所有wx请求
* 开箱即用的取消请求
## 开始使用

Vxios是一个基于微信请求封装的mini请求库

### 安装
```shell
//npm
npm i @gatomis/vxios -s
or
//yarn
yarn add @gatomis/vxios -s
```
### 引入项目

```
//来自./app.js
//创建实例
const vxios = require('@gatomis/vxios')
```
### bug日志
1.uploadFileApi失败:heavy_check_mark: 感谢[@HuangYaobin](https://github.com/HuangYaobin)提的Issues

### 基于原型
本项目原型基于[微信开发手册](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)
## licence
MIT License

Copyright (c) 2022 GAtomis
