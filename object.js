var IteBrowser = new Object();
IteBrowser.run = function (dom){
    var do = dom;
    dom.innerHTML = dom.innerHTML + "<style>a .aa{text-decoration: none;color: red;}";
		dom.innerHTML = dom.innerHTML + "a .aa:hover{text-decoration: none;color: green;}";
		dom.innerHTML = dom.innerHTML + "a .aa:active{text-decoration: underline;color: blue;}";
		dom.innerHTML = dom.innerHTML + "</style>";
    // body
    do.innerHTML = do.innerHTML + "<h1>您的浏览器太老了。</h1>";
    do.innerHTML = do.innerHTML + "<h2>比较常用的浏览器：</h2>";
    do.innerHTML = do.innerHTML + "<div class="Browser">";
    do.innerHTML = do.innerHTML + "	<h1><a href='https://google.cn/chrome' class='aa'><img src='image/chrome.png" height="50px" width="50px">Google Chrome</a></h1>";
    do.innerHTML = do.innerHTML + "	<h1><a href='https://firefox.com.cn' class='aa'><img src="image/firefox.png" height="50px" width="50px">Firefox</a></h1>";
    do.innerHTML = do.innerHTML + "	<h1><a href="https://opera.com/zh-cn" class="a"><img src="image/opera.png" height="50px" width="50px">Opera</a></h1>";
    do.innerHTML = do.innerHTML + "</div>";
}
IteBrowser.AoLiGei = true;
