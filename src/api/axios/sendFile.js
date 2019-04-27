import axios from 'axios'
//  配置 权限  自定义 >  实例  > 包的默认
let sendFile = axios.create({
  timeout: 5000 // 用这个实例的方法共用这里的配置
})

function sendAjax (url, data) {
  sendFile.post(url, data, {
    onUploadProgress: function (propressEvent) {
      console.log(propressEvent.total)
      console.log(propressEvent.loaded)
    }
  })
}
export {
  sendAjax
}
