!function(){var t={fon:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};t.startBtn.addEventListener("click",(function(){n.start()})),t.stopBtn.addEventListener("click",(function(){n.stop()}));var n={interval:null,start:function(){t.startBtn.disabled=!0,t.stopBtn.disabled=!1,this.interval=setInterval((function(){var n="#".concat(Math.floor(16777215*Math.random()).toString(16));t.fon.style.background=n}),1e3)},stop:function(){clearInterval(this.interval),t.startBtn.disabled=!1,t.stopBtn.disabled=!0}}}();
//# sourceMappingURL=01-color-switcher.2cbe32a0.js.map
