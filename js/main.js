(function() {
    'use strict';
        new Vue({
            el: '#throwzone',
            data: {
                count: 0,
                kintama: true,
                block: false,
                animationbox: false,
                animationstop: false,
                sec: 0,
                timerOn: null,
                timerStop: null,
            },
            methods: {
                Click: function(event) {
                    this.count += 1
                    if(this.count == 1){
                        this.block = true;
                        this.animationbox = true;
                            var self = this;
                            this.timerOn = Date.now();
                    } else if(this.count == 2) {
                        this.animationstop = true;
                            this.timerStop = Date.now();
                            this.sec = this.timerStop - this.timerOn;
                            if(this.sec >= 700){
                                alert("遅いよ！顔面直撃だよ！鼻血ぶーだよｗ");
                                window.location.reload();
                            } else if(this.sec < 500 && this.sec > 400) {
                                alert("ナイスキャッチ！(*^▽^*)");
                                window.location.reload();
                            } else {
                                alert("おしい！失敗(΄◉◞౪◟◉｀)");
                                window.location.reload();
                            }
                    } 
                }
            }
        });
})();