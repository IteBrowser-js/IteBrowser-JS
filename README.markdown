# 欢迎使用IteBrowser-JavaScript！
## 调用方法
只要您引用js文件，那么IteBrowser-JavaScript将绑定在您的**网页**上（是网页，不是整个网站），一共有三种调用方法，如下：<br>
调用方法（按照推荐度排列）:
### 在`BODY`最后调用（特别推荐）
```html
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <title>...</title>
</head>
<body>
...
<div class="itebrowser-container"></div>
<script src="itebrowser-js/dist/body.js"></script>
</body>
</html>
```
### 在`</html>`前调用
```html
<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <title>...</title>
</head>
<body>
...
<div class="itebrowser-container"></div>
</body>
<script src="itebrowser-js/dist/foot.js"></script>
</html>
```
### 在`HEAD`区域调用：
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>...</title>
  <script src="itebrowser-js/dist/head.js"></script>
</head>
<body>
...
<div class="itebrowser-container"></div>
</body>
</html>
```
## 卸载方法
把`<div class="itebrowser-container"></div>`和`<script src="itebrowser-js/dist/调用位置.js"></script>`删除即可。
## 其他
```javascript
var Author = "Rocky";
var license = "Mit License";
var forum = "This Repository's Issues(https://github.com/IteBrowser/IteBrowser-JS/issues)";
```
