import React from 'react';
import './TextInput.css';

const TextInput = (props) => {

  return (
    <div>
      <input type={props.type} placeholder={props.placeholder} onChange={(e) => props.onChangeText(e)} />
    </div>
  )
}

export { TextInput };