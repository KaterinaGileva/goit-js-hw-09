// Описаний в документації
import flatpickr from "flatpickr";
//import Notiflix from "notiflix";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const refs = {
input: document.querySelector('#datetime-picker'),
startBtn: document.querySelector('[data-start]'),
timerFace: document.querySelector('.timer'),
//label: document.querySelector('.label')
};

refs.startBtn.setAttribute('disabled', '');

let endTime = null;

function addLeadingZero(value){
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

      if(selectedDates[0] <= Date.now()) {
       Notify.failure('Please choose a date in the future');
      }  else {
        refs.startBtn.removeAttribute('disabled');
        endTime = selectedDates[0];
      }  
   },
  };

  
flatpickr(refs.input, options);

class Timer {

constructor() {
  this.intervalId = null;
  this.isActive = false;
  refs.startBtn.disabled = true;
}

start() {
  if (this.isActive) {
      return;
  }
  
  this.intervalId = setInterval(() => {
      const startTime = Date.now();
      const deltaTime = endTime - startTime;
      const ms = convertMs(deltaTime);

     if(deltaTime <= 1000){
      clearInterval(this.intervalId);
     }

     this.updateClockface(ms);
     
      }, 1000);
  }
 
  updateClockface ({ days, hours, minutes, seconds }) {

    refs.timerFace.textContent = `${days}:${hours}:${minutes}:${seconds}`;
    
    }
};


const timer = new Timer();
refs.startBtn.addEventListener('click', () => timer.start());


