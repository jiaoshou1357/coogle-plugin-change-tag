
var firstReplaced = false;
var oldHtml = document.body.innerHTML;
var scrollTop = 0; 
const regex = /[@#$]\w+/g; 

//简易防抖函数
function disShake(fun,delay) {
  var timer ;
  return function () {
      if(timer) clearTimeout(timer);
      timer = setTimeout(function(){
        fun()
      },delay)
  }
}
//获取url参数
function getUrlParams(url) {
	let urlStr = url.split('?')[1]
	const urlSearchParams = new URLSearchParams(urlStr)
	const result = Object.fromEntries(urlSearchParams.entries())
	return result
}
function replaceTextInDocument(node) {
  const ulrParam = getUrlParams(window.location.href)
  const query = ulrParam.q||''
  if (node.nodeType === Node.TEXT_NODE) {
    var matches =  node.textContent.match(regex);
    var _matches = [...new Set(matches)]
      for (let j = 0; j < _matches.length; j++) {
          if(node.textContent.indexOf(query+"\x20"+_matches[j])<=-1) {
            let newNode = document.createElement("span");
            newNode.style.backgroundColor = "yellow";
            //添加类，为事件委托做准备
            newNode.className = "yellow";
            newNode.textContent = query+"\x20"+_matches[j];
            node.parentNode&&node.parentNode.replaceChild(newNode,node)
         } 
      }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    for (var i = 0; i < node.childNodes.length; i++) {
      replaceTextInDocument(node.childNodes[i]);
    }
  }
}
//替换操作
function replaceInnerHtml() {
  replaceTextInDocument(document.body);
  oldHtml = document.body.innerHTML;
  firstReplaced = true;
}

function scrollAction() {
  //利用事件循环队列机制检查是否有新的加载的html
  setTimeout(function(){
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop;;
    if(document.body.innerHTML!==oldHtml) {
      //拿到新的html部分并且替换
      replaceInnerHtml()
      window.scrollTo(0, scrollTop);
      oldHtml = document.body.innerHTML;
    }
  },1)
  if(firstReplaced) return;
  replaceInnerHtml() 
}

document.addEventListener('click',function(e){
  if(e.target.className=='yellow') {
    alert("我被点击了！")
  }
},true)
var move = disShake(scrollAction,300)
document.addEventListener('scroll',move,true)






