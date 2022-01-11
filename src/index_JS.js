import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

// dispatch 를 위한 함수 (보통 reducer 위에 선언한다.)
const addToDo = text => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDoObj = { text: action.text, id: Date.now() };
      return [newToDoObj, ...state];
    // state mutation을 방지하기 위함
    case DELETE_TODO:
      const cleaned = state.filter(toDo => toDo.id !== action.id);
      return cleaned;
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = ''; // 이미 paint 된 ul안의 li들을 없애주면서 store가 앞의 toDos를 중복으로 모두 그리는걸 방지
  toDos.forEach(toDo => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = 'DEL';
    btn.type = 'button'; // 버튼 눌렀을 때 submit 발생 방지
    btn.addEventListener('click', dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos); // store 가 바뀔때 마다 paintToDos 실행

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = '';
  dispatchAddToDo(toDo);
};

form.addEventListener('submit', onSubmit);
