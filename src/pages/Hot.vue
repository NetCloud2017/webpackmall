<template>
  <div>
    <input type="file" @change="selectFile" />
    <button  @click="sendFile" ></button>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  methods: {
    data () {
      return {
        source: null,
        file: null,
        roaded: null,
        rota: 0
      }
    },
    create () {
      // 默认配置config
      axios.defaults.onUploadProgress = (progressEvent) =>{
          this.roaded = progressEvent.loaded;
          this.rota = ((progressEvent.loaded / progressEvent.total) *100).toFixed(2) + '%';
      }
    },
    cancelReq () {
      // 取消请求
      this.source.cancel()
    },
    subSendFile () {
      // 取消后继续上传
      let fileData = this.file.slice(this.roaded+1, this.file.size); // 剪切文件
      let fd = new FormData();
      fd.append('file', fileData);
      let cancelToken = axios.CancelToken
      let source = cancelToken.source();
      this.source = source // 取消的对象
      axios.post('url', fd, {
        cancelToken: source.token, // 取消的token 标识
      })
      .then((res) => {
        console.log(res);
      })
      .catch(function(thrown) {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        } else {
          // 处理错误
        }
      });
    },
    sendFile () {
      //文件上传
      let _this = this;
      let fd = new FormData();
      fd.append('file', file);
      let CancelToken = axios.CancelToken
      let souce = CancelToken.source();
      this.source = source
      axios.post({
        cancelToken: source.token,
      })
      .then((res) => {
        console.log(res);
      })
      .catch(function(thrown) {
        if (axios.isCancel(thrown)) {
          console.log('Request canceled', thrown.message);
        } else {
          // 处理错误
        }
      });
    },
    selectFile (e) {
       this.file = e.target.file[0];
    }
  }
}
</script>
<style scoped>

</style>

