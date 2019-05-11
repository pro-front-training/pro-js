// 跨文本消息传输 cross-document messaging(XDM)
// postMessage(msg, to) // msg 表示发送的消息, from 表示消息发送到哪个域名

//
//
//
/**
   下面举个栗子
   网站 a.com 需要将数据发送到网站 b.com
   解决办法:
   在 a.com 页面中嵌入一个 iframe, 通过 postMessage 将登录信息发送到 b.com, b.com 确认登录信息后, 种下cookie
   a.com 的一个页面:
     <iframe src="http://www.b.com" id="b-frame"></iframe>
     <script>
         // 发送数据
         var bFrame = document.getElementById("b-frame").contentWindow
         bFrame.postMessage(token, "http://www.b.com")

         // 接收数据
         window.addEventListener("message", function (event) {
                console.log(event.data)
            }, false)
    <script>

   b.com 的页面:
     <script>
     // 接收消息
     var setCookie = function (event) {
            var val = event.data
            var newCookie = key + "=" + val
            document.cookie = newCookie

            // 发送消息
            event.source.postMessage(document.cookie, "http://www.l.com")
        }
     window.addEventListener("message", setCookie, false)
     </script>
 */
