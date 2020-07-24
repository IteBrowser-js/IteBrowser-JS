function IteBrowser(DivDomObj){
  function one(){
    // date
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var d = date.getDay();
    var darray = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    return year+"年"+month+"月"+day+"日"+" "+darray[d];
  }
  /******************分割线******************/
  // ite
  if (document.body.innerHTML.indexOf("<!DOCTYPE html>") != -1){
    document.head.innerHTML = document.head.innerHTML + "<style>";
		document.head.innerHTML = document.head.innerHTML + "  a{text-decoration: none;color: red;}";
		document.head.innerHTML = document.head.innerHTML + "  a:hover{text-decoration: none;color: green;}";
		document.head.innerHTML = document.head.innerHTML + "  a:active{text-decoration: underline;color: blue;}";
		document.head.innerHTML = document.head.innerHTML + "</style>";
    // body
    document.body.innerHTML = document.body.innerHTML + "<h1>您的浏览器太老了。</h1>";
    document.body.innerHTML = document.body.innerHTML + "<h2>比较常用的浏览器：</h2>";
    document.body.innerHTML = document.body.innerHTML + "<div class="Browser">";
    document.body.innerHTML = document.body.innerHTML + "	<h1><a href="https://google.cn/chrome"><img src="image/chrome.png" height="50px" width="50px"/>Google Chrome</a></h1>";
    document.body.innerHTML = document.body.innerHTML + "	<h1><a href="https://firefox.com.cn"><img src="image/firefox.png" height="50px" width="50px"/>Firefox</a></h1>";
    document.body.innerHTML = document.body.innerHTML + "	<h1><a href="https://opera.com/zh-cn"><img src="image/opera.png" height="50px" width="50px"/>Opera</a></h1>";
    document.body.innerHTML = document.body.innerHTML + "</div>"
  } else if (document.body.innerHTML.indexOf("<DOCTYPE html>") = -1){
          document.head.innerHTML = document.head.innerHTML + "<style>";
		      document.head.innerHTML = document.head.innerHTML + "  a{text-decoration: none;color: red;}";
		      document.head.innerHTML = document.head.innerHTML + "  a:hover{text-decoration: none;color: green;}";
		      document.head.innerHTML = document.head.innerHTML + "  a:active{text-decoration: underline;color: blue;}";
		      document.head.innerHTML = document.head.innerHTML + "</style>";
          // body
          document.body.innerHTML = document.body.innerHTML + "<h1>您的浏览器太老了。</h1>";
          document.body.innerHTML = document.body.innerHTML + "<h2>比较常用的浏览器：</h2>";
          document.body.innerHTML = document.body.innerHTML + "<div class="Browser">";
          document.body.innerHTML = document.body.innerHTML + "	<h1><a href="https://google.cn/chrome"><img src="image/chrome.png" height="50px" width="50px"/>Google Chrome</a></h1>";
          document.body.innerHTML = document.body.innerHTML + "	<h1><a href="https://firefox.com.cn"><img src="image/firefox.png" height="50px" width="50px"/>Firefox</a></h1>";
          document.body.innerHTML = document.body.innerHTML + "	<h1><a href="https://opera.com/zh-cn"><img src="image/opera.png" height="50px" width="50px"/>Opera</a></h1>";
          document.body.innerHTML = document.body.innerHTML + "</div>"
    }
}
