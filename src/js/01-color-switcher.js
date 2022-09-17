
const refs = {
startBtn: document.querySelector('[data-start]'),
stopBtn: document.querySelector('[data-stop]')
}

refs.startBtn.addEventListener('click', 
() => {
  timer.start();
});
refs.stopBtn.addEventListener('click', ()=>{timer.stop();});



const timer = {
  intervalId: null,
  isActive: false,
  
  start() {
    if(this.isActive){
      return;
    }
      const startTime = Date.now();
      this.isActive = true;
      this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime-startTime;
      getRandomHexColor(deltaTime);
      
      }, 1000);
  },

  stop (){
    clearInterval(this.intervalId);
    this.isActive = false;
  }
  };
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }



