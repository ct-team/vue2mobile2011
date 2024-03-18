# 说明

## 多页面

pages 文件夹与 public html 相对应

```
//index
public/index.html
pages/index/index.html

//other
public/other.html
pages/other/index.html
```

## 公共文件

直接用相对路径引用

```
//public/a.js 引入资源a文件
<head>
 <script src="./a.js"></script>
</head>

```

获取 publicpath

```
//html
<link rel="icon" href="<%= BASE_URL %>favicon.ico" />

//js
process.env.BASE_URL


```

## 移除 path
