

const contentType={
  json:'application/json',
  form:"application/x-www-form-urlencoded"
}

const defaults= {
  header:{
    'content-type': contentType["json"]
  },
  getTask:task=>task
}
module.exports=defaults

