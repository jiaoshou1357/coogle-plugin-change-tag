# coogle-plugin-change-tag
### 用法（该项目仅仅支持一个基本功能思路测试)有部分漏洞并未完善
1.项目下载到本地
2.在 Chrome 浏览器中打开 "chrome://extensions/" 页面，在页面上方打开 "开发者模式"，然后点击 "加载已解压的扩展程序" 按钮，选择我们项目的根目录。这样就可以安装插件了。
### 测试的时候尽量用我下面提供的例子进行大概验证就可以了。输入："Eth","envir","Docu" 等文本独一无二的字符串就行了。不要输入标签类型的字符串。
## 测试网站地址
https://hardhat.org/docs
### 功能介绍(注意一定是英文网站)
 #### 1.匹配英文单词边界，插入到该单词前方，并且绑定了点击事件.
 #### 例如："Hardhat is a development environment for  Ethereum software" 
  #### 输入 "Eth" 匹配结果 "Ethereum"
  #### 输入 "envir" 匹配结果 "environment"
    #### 输入 "Docu" 匹配结果 "Documentation"
 注意目前代码中匹配规则有待完善，有些匹配有漏洞;滚动条事件做了一半部分代码注释了，监听滚动条.
 剩余功能基本思路：做完一次匹配后加特定的class做标记，下次滚动条滚动避免重读替换操作.
 ### 部分功能截图
 
![image](https://github.com/user-attachments/assets/335a4162-4acb-4241-b0b5-f031f1a575a1)


