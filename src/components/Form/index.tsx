import React, { useState } from 'react';
import './index.css';
import { useForm } from '../../hooks/useForm'
import { Input } from './Input'

export function Form() {
  const {
    handleSubmit,
    handleChange,
    data,
  } = useForm({
    onSubmit: () => console.log('subbmited', data),
    initialValues: {
      card: '',
      cvc: '',
      expiry: ''
    },
  });

  return (
    <div className="form">
      <h1 className="form__heading">Welcome, Ben Little</h1>
      <form className="form__container" onSubmit={handleSubmit}>
        <Input
          value={data.card}
          onChange={handleChange('card')}
          width='60%'
          type="text"
          placeholder="Credit card number"
        />
        <div>
          <Input
            value={data.cvc}
            onChange={handleChange('cvc')}
            width='80%'
            type="text"
            placeholder="CVC"
          />
          <Input
            value={data.expiry}
            onChange={handleChange('expiry')}
            width='80%'
            type="text"
            placeholder="Expiry"
          />
        </div>
        <button>
          Submit
        </button>
      </form>
    </div>
  )
}
