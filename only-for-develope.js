
/* create html block */
var el =  document.createElement('span')
el.id = 'develope-mode';
document.body.appendChild(el);

/* Rewrite console.log + console.error */
(function(){
    if(window.console && console.log){
        var old = console.log;
        console.log = function(text){
            var develope = document.getElementById('develope-mode'),
                mess = document.createElement('div');
            mess.innerHTML = text+'<br />';
            develope.appendChild(mess);
            old.apply(this, arguments)
        }
    }
    if(window.console && console.error){
        var old = console.error;
        console.error = function(text){
            var develope = document.getElementById('develope-mode'),
                mess = document.createElement('div');
            mess.innerHTML = '<span style="color: red">'+text+'</span><br />';
            develope.appendChild(mess);
            old.apply(this, arguments)
        }
    }
})();
/* styles */
var css = '#develope-mode {background-color: blueviolet;color: #ffffff;font-weight: bold;position: fixed;top: 50px;right: 0;z-index: 99999;padding: 20px;opacity: 0.9;max-height: 150px;overflow: scroll;}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}
head.appendChild(style);

/* on click */
el.addEventListener("click", function(){
    el.innerHTML = 'Cleared..';
    setTimeout(function(){
        el.innerHTML = '';
    },1000);
});

/* check */
console.log('init done');
