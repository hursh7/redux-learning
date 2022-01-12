import React from 'react';
import { actionCreators } from '../store';
import { connect } from 'react-redux';

const ToDo = ({ text, onBtnClick }) => {
  return (
    <li>
      {text}
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
