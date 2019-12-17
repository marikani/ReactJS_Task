import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <div>
      <input type="submit" name={props.name} onClick={() => props.ButtonClick()} />
    </div>
  )
}

export { Button };