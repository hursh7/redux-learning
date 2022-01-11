import { createStore } from 'redux';

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');

const countModifier = (state = 0) => {
  // state initializing
  // data를 바꾸고 modify하는 걸 책임진다.(in charge of)
  console.log(state);
  return state;
};

const countStore = createStore(countModifier);
console.log(countStore.getState());
