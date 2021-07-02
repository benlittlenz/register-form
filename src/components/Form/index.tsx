import React, { useState } from 'react';
import { Input } from './Input'
import './index.css';


export function Form() {
  return (
    <div className="form">
      <h1 className="form__heading">Welcome, Ben Little</h1>
      <div className="form__container">
        <Input type="text" placeholder="Credit card number" />
      </div>
    </div>
  )
}
