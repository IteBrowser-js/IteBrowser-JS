function IteBrowser(){
    main_itebrowser = new Object();
    main_itebrowser.run = function (DOMcontainer){
        var dom = DOMcontainer;
        dom.innerHTML = dom.innerHTML + "<style>a .aa{text-decoration: none;color: red;}";
        dom.innerHTML = dom.innerHTML + "a .aa:hover{text-decoration: none;color: green;}";
        dom.innerHTML = dom.innerHTML + "a .aa:active{text-decoration: underline;color: blue;}";
        dom.innerHTML = dom.innerHTML + "</style>";
        // body
        dom.innerHTML = dom.innerHTML + "<h1>您的浏览器太老了。</h1>";
        dom.innerHTML = dom.innerHTML + "<h2>比较常用的浏览器：</h2>";
        dom.innerHTML = dom.innerHTML + "<div class='Browser'>";
        dom.innerHTML = dom.innerHTML + "	<h1><a href='https://google.cn/chrome' class='aa'><img src='https://itebrowser-js.github.io/image/chrome.png' height='50px' width='50px'>Google Chrome</a></h1>";
        dom.innerHTML = dom.innerHTML + "	<h1><a href='https://firefox.com.cn' class='aa'><img src='https://itebrowser-js.github.io/image/firefox.png' height='50px' width='50px'>Firefox</a></h1>";
        dom.innerHTML = dom.innerHTML + "	<h1><a href='https://opera.com/zh-cn' class='aa'><img src='https://itebrowser-js.github.io/image/opera.png' height='50px' width='50px'>Opera</a></h1>";
        dom.innerHTML = dom.innerHTML + "</div>";
    }
    // About Me
    main_itebrowser.about = new Object();
    // Contact
    main_itebrowser.about.qq = "1218374083";
    main_itebrowser.about.wechat = new Object();
    main_itebrowser.about.wechat.tel = "18764005777";
    main_itebrowser.about.wechat.id = "RockyCoderChina";
    main_itebrowser.about.name = "Rocky";   // name
    return main_itebrowser;
}
