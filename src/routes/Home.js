import { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from '../components/ToDo';

const Home = ({ toDos, addToDo }) => {
  // store에서 dispatch 받는 addToDo 함수
  const [text, setText] = useState('');

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText('');
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: text => dispatch(actionCreators.addToDo(text)),
    // addToDo 함수를 실행하면 text 인자를 가진 dispath를 실행한다.
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); // Home 컴포넌트에 store.js의 상태를 props로 보내준다.
