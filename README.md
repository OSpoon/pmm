# PMM

**PMM**（Preview Mark Map） 是一个在线将 **Github** 项目的 **README** 文件渲染为 **Markmap** 的服务。

## 访问方式

通过查询参数提供 **Github** 的 `username` 和 `resp` 到 `https://pmm-rust.vercel.app/`；

```
https://pmm-rust.vercel.app/?username=<username>&resp=<resp>
```

## 演示截图

* 访问：https://pmm-rust.vercel.app/?username=vuejs&resp=awesome-vue

![](https://temp-files-20221205.oss-cn-hangzhou.aliyuncs.com/picgo/202308221743165.png)

* 访问：https://pmm-rust.vercel.app/?username=vitejs&resp=awesome-vite

![](https://temp-files-20221205.oss-cn-hangzhou.aliyuncs.com/picgo/202308221743075.png)

* 访问：https://pmm-rust.vercel.app/?username=rollup&resp=awesome

![](https://temp-files-20221205.oss-cn-hangzhou.aliyuncs.com/picgo/202308221743802.png)
## 油猴脚本

> 打开 Github 项目时将 `PreviewMarkmap` 菜单添加到 README.md 后，快速以 Markmap 的方式查看。

```JavaScript
// ==UserScript==
// @name         Preview Mark Map
// @namespace    https://github.com/
// @version      0.1
// @description  添加 PreviewMarkMap 菜单到Github项目的README.md后。
// @author       小鑫同学
// @match        https://github.com/*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const rootUrl = 'https://pmm-rust.vercel.app';
    const titleBox = document.querySelector('#readme h2.Box-title');
    const [ username, resp ] = window.location.pathname.slice(1).split('/');
    const pmm = document.createElement('a');
    pmm.id = 'previewMarkmap';
    pmm.textContent = "PreviewMarkmap";
    pmm.target = "_blank";
    pmm.style.marginLeft = '10px';
    pmm.href = `${rootUrl}?username=${username}&resp=${resp}`;
    titleBox.appendChild(pmm);
})();
```

## 注意事项

由于每个项目的 **README.md** 文件的书写规范多样，可能无法很好的渲染为 **Markmap**，对于一些教程类或插件列表类的 **README.md** 使用 **Markmap** 预览最佳。 

如果没有出现 **PreviewMarkmap** 菜单，可以尝试刷新当前 **Github** 项目主页。
