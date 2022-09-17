function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
fon: document.querySelector('body'),
startBtn: document.querySelector('[data-start]'),
stopBtn: document.querySelector('[data-stop]')
}

refs.startBtn.addEventListener('click', () => {timer.start();});
refs.stopBtn.addEventListener('click', () => {timer.stop();});

const timer = {

  interval: null,
  
  start() {
    
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
     
    this.interval = setInterval(() => {
              let fonChangeColor = getRandomHexColor();
              refs.fon.style.background = fonChangeColor;
  }, 1000);
  },

  stop (){
    clearInterval(this.interval);
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
  }
  };
  
  

