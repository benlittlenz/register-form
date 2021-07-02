import React, { useState } from 'react';
import { Input } from './Input'
import './index.css';


export function Form() {
  return (
    <div className="form">
      <h1 className="form__heading">Welcome, Ben Little</h1>
      <div className="form__container">
        <Input width='60%' type="text" placeholder="Credit card number" />
        <div>
          <Input width='80%' type="text" placeholder="CVC" />
          <Input width='80%' type="text" placeholder="Expiry" />
        </div>
      </div>
    </div>
  )
}
