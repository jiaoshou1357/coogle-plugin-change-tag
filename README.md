# coogle-plugin-change-tag
### 用法（该项目仅仅支持一个基本功能思路测试)有部分漏洞并未完善
1.项目下载到本地
2.在 Chrome 浏览器中打开 "chrome://extensions/" 页面，在页面上方打开 "开发者模式"，然后点击 "加载已解压的扩展程序" 按钮，选择我们项目的根目录。这样就可以安装插件了。
## 测试网站地址
https://hardhat.org/docs
### 功能介绍(注意一定是英文网站)
 1.匹配英文单词边界，插入到该单词前方，并且绑定了点击事件
 2.滚动条事件做了一半部分代码注释了，监听滚动条。
 3.剩余功能基本思路：做完一次匹配后加特定的class做标记，下次滚动条滚动避免重读替换操作。
 #### 例如："Hardhat is a development" 
 输入 "de" 匹配结果 "development"
 输入 "Har" 匹配结果 "Hardhat"
 注意目前代码中匹配规则有待完善，有些匹配有漏洞。
 #### 部分功能截图
 
![截图20240912003821](https://github.com/user-attachments/assets/8f129be9-dea7-49ff-920a-232293c61015)
