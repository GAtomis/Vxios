/*
 * @Description: Vxios类型描述
 * @Author: Gavin
 * @Date: 2022-02-09 17:22:30
 * @LastEditTime: 2022-02-09 18:51:24
 * @LastEditors: Gavin
 */
type rq=<T = any>(url: string, data?: any, config?: any)=>Promise<T>;
type Rquest=<T = any>(config?: any)=>Promise<T>;
export interface Context{
  post:rq
  connect:rq
  delete:rq
  get:rq
  head:rq
  trace:rq
  put:rq
  mergebase:(newItem:any,base:any)=>any
  request:Rquest,
  defaults:any
  interceptors: {
    request: VxiosInterceptorCommon<any>;
    response: VxiosInterceptorCommon<any>;
  };
}

export interface VxiosInterceptorCommon<V> {
  use(onFulfilled?: (value: V) => V | Promise<V>)
  
}
export interface VxiosInstance extends Context {
  context:Context

}

export interface VxiosPublic extends VxiosInstance {

}

declare const Vxios: VxiosPublic;

export default Vxios;
