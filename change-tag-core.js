var currency=null
var keywords = null;
var isReplaced = false;

//防抖
function disShake(fun,delay) {
  var timer ;
  return function () {
      if(timer) clearTimeout(timer);
      timer = setTimeout(function(){
        fun()
      },delay)
  }
}
function replaceWord() {
  if(isReplaced) return;
  var regex_2 = new RegExp('\\b('+currency+')[\\w]+\\b','g');
  //var htmlText = document.body.innerHTML.replace(/<\/?[\w\s="/.':;#-\/\?]+>/gi,  '');
  var matches = document.body.innerHTML.match(regex_2);
  var _matches = [...new Set(matches)]
  if (_matches) {
    for (let j = 0; j < _matches.length; j++) {
      let span = document.createElement("span");
      span.style.backgroundColor = "yellow";
      //添加类，为事件委托做准备
      span.className = "yellow";
      span.textContent = _matches[j];
      if(keywords) {
          span.textContent=keywords+'\x20'+span.textContent
      }
      document.body.innerHTML = document.body.innerHTML.replace(new RegExp(_matches[j], "g"), span.outerHTML);
    }
  }
  isReplaced = true;
}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.currency && request.currency.length > 0) {
       currency =  request.currency;
       keywords =  request.keywords;
       maxScrollTop = 0;
       isReplaced = false;
       if(request.isAction) {
        replaceWord()
       }
    }
});
document.addEventListener('click',function(e){
  if(e.target.className=='yellow') {
    alert("我被点击了！")
  }
},true)
var move = disShake(replaceWord,300)
document.addEventListener('scroll',move,true)




