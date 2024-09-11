
/**
 * 
 * @param {*} type = all 传入Curreny和keyword的值
 * @param {*} type = curreny 传入Curreny的value
 */
function sendValue(type) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var keywords = ''
        var currency = document.getElementById("currency").value;
        var isAction = false;
        if(type=='all') {
            keywords = document.getElementById("keywords").value;
            isAction = true
        } 
        if(type=='find') {
            isAction =true;
        }
        chrome.tabs.sendMessage(tabs[0].id, { currency, keywords,isAction});
        console.log("curreny",currency)
    });
}
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currency").addEventListener("input", function(){
        sendValue('curreny')
    });
    document.getElementById("find").addEventListener("click", function(){
        sendValue('find')
    });
    document.getElementById("insertWord").addEventListener("click", function(){
        sendValue('all')
    });
});

  
  
