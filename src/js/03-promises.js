//import Notiflix from "notiflix";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  submitBtn: document.querySelector('button'),
}

refs.submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  let amount = Number(refs.inputAmount.value);
  let delay = Number(refs.inputDelay.value);
  let step = Number(refs.inputStep.value);

  for (let position = 1; position <= amount; position += 1) {

    console.log('step', step);
    console.log('delay', delay);
  
    createPromise(position, delay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  
  delay +=step;

}
  
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.3;

  setTimeout(() => {
  if (shouldResolve) {
    resolve ({position, delay});
  } else {
     reject(() => console.log({position, delay}))
     console.log(delay);
  }
  })
})
};