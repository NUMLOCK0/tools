window.onload = function(){
    var app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!',
          px: 0,
          px2: 0,
          rem: 0,
          rem2: 0,
          root: 12
        },
        watch: {
            px: function () {
                if (this.px) {
                    this.px2 = (parseInt(this.px) / 2).toFixed(2)
                    this.rem = (parseInt(this.px)  / parseInt(this.root)).toFixed(3)
                    this.rem2 = ((parseInt(this.px)  / parseInt(this.root)) / 2).toFixed(3)
                } else {
                    this.rem = 0
                    this.rem2 = 0
                    this.px2 = 0
                }
            },
            root: function () {
                if (this.px && this.root) {
                    this.px2 = (parseInt(this.px) / 2).toFixed(2)
                    this.rem = (parseInt(this.px)  / parseInt(this.root)).toFixed(3)
                    this.rem2 = ((parseInt(this.px)  / parseInt(this.root)) / 2) .toFixed(3)
                } else {
                    this.rem = 0
                    this.px2 = 0
                    this.rem2 = 0
                }
            },
          },
          methods:{
              copyStr : function(type){
                switch(type){
                    case 'root' : this.copy(this.root)
                    break;
                    case 'px' : this.copy(this.px)
                    break;
                    case 'px2' : this.copy(this.px2)
                    break;
                    case 'rem' : this.copy(this.rem)
                    break;
                    case 'rem2' : this.copy(this.rem2)
                    break;
                }
              },
              copy : function(str){
                const save = function save(e) {
                    e.clipboardData.setData('text/plain', str); // 剪贴板内容设置
                    e.preventDefault();
                  }
                document.addEventListener('copy', save); // 监听浏览器copy事件
                document.execCommand('copy'); // 执行copy事件，这时监听函数会执行save函数。
                document.removeEventListener('copy', save); // 移除copy事件
                // window.clipboardData.setData("Text",str);
              },
              
          }
      })
}

