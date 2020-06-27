最近公司的一个vue项目用到了vue-socket.io来处理socket数据传输，之前用过socket.io-client，现在知道vue-socket.io是基于socket.io-client的一层封装，将socket挂于全局从而更方便的书写。

于是把代码拉取下来运行：
![image.png](https://segmentfault.com/img/bVbG5CP)
    
什么鬼，同样的代码为什么我的就接收不到数据，自己新建一个测试一下吧！

先用express和socket.io搭个小socket服务器：
```
let express = require('express');
let app = express();

let server= require('http').Server(app);
let io = require('socket.io')(server);

io.on('connect', (socket) => {
    setInterval(() => {
        socket.emit('hi','hello')
    },2000)
    socket.on('hello', (data) => {
        console.log('hello',data)
        socket.emit('hi','get it')
    })
    socket.on('disconnect', (data) => {
        console.log('断开', data)
    })
})

server.listen(8080);
```

再搭个vue-cli3环境，main.js里use一下socket:
```
import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://127.0.0.1:8080',
}))

new Vue({
  render: h => h(App),
}).$mount('#app')
```

再去组件里监听一下：
```
<script>
export default {
  sockets: {
    connect() {
      console.log('链接成功');
    },
    disconnect() {
      console.log('断开链接')
    },
    reconnect() {
      console.log('重新链接')
    },
    hi(res) {
      console.log('VueSocketIO', res)
    }
  }
}
</script>
```
结果：
![image.png](https://segmentfault.com/img/bVbG5EG)

为什么，是socket数据没发送过来吗？我装个socket.io-client试试：
```
import io from 'socket.io-client'
export default {
  mounted() {
    io('http://127.0.0.1:8080').on('hi', (res) => {
      console.log('socket.io-client', res)
    })
  },
}
```
![image.png](https://segmentfault.com/img/bVbG5EU)
没问题，数据传过来了，但vue-socket.io为啥不行，不管了，先向服务端发送一条信息看能不能收到：
`this.$socket.emit('hello','i am wk')`
![image.png](https://segmentfault.com/img/bVbG5Fe)
没问题，收到了，所以现在是socket已经连接上了，客户端可以向服务端正常发送数据，但服务端也向客户端发送数据了，上面用socket.io-client可以正常接收已经证明这一点了，问题是vue-socket.io没有正确写法去接收数据，似乎api上的写法出bug了。
打印一下this发现因为引入vue-socket.io的原因，this上面挂了一个sockets属性：
![image.png](https://segmentfault.com/img/bVbG5Gn)
this.sockets下有一个listener属性，看这个名字就感觉有戏，试一下：
```
this.sockets.listener.subscribe('hi', (data) => {
      console.log('++++++++++',data)
    })
```
![image.png](https://segmentfault.com/img/bVbG5GM)
哇哦，可以用，好吧，就先这样用吧，虽然还是不知道sockets:{}这种的写法为什么不起作用。
有知道的同学给我留言哦！感谢

今天经过一些同学的提示，自己也试了试，发现vue-socket.io3.08和3.09版本有这样的问题，3.07可以正常使用。
需要注意的是在切换3.07版本的时候，不要直接修改完package.json文件中的版本后删掉整个node_modules再重新npm install，这样也许是因为缓存的原因（尽管我也试过重新install之前通过npm cache clean --force清除缓存，删掉package-lock.json，清除浏览器缓存，这些都试过，但仿佛总还有其它缓存使得vue-socket.io的版本没有切换到3.07，这个可能是npm包的某种机制，以后有机会深入研究一下，有知道的同学希望留言分享一下！！！ ），成功的做法是，删掉node_modules，删掉package.json中vue-socket.io哪一行，然后npm install，然后npm install vue-socket.io@3.0.7，这样node_modules中的版本才真正变成3.0.7，socket也能正常使用了。