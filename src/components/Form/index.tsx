import React, { useState } from 'react';
import './index.css';
import { useForm } from '../../hooks/useForm'
import { Input } from './Input'
import { isValidExpiry } from '../../utils/isValidExpiry'

export function Form() {
  const {
    handleSubmit,
    handleChange,
    data,
    errors,
  } = useForm({
    validations: {
      card: {
        pattern: {
          value: '^[0-9]',
          message:
            "Card number must only contains numbers",
        },
      },
      cvc: {
        pattern: {
          value: '^[0-9]',
          message:
            "CVC number must only contains numbers",
        },
      },

      expiry: {
        custom: {
          isValid: (value: string) => isValidExpiry(value),
          message: 'Expiry date must be valid',
        },
      },
    },
    onSubmit: () => console.log('subbmited', data),
    initialValues: {
      card: '',
      cvc: '',
      expiry: ''
    },
  });
  console.log("ERRORS: ", errors)
  return (
    <div className="form">
      <h1 className="form__heading">Welcome, Ben Little</h1>
      <form className="form__container" onSubmit={handleSubmit}>
        <Input
          value={data.card}
          length={16}
          onChange={handleChange('card')}
          error={errors?.card}
          width='60%'
          type="text"
          placeholder="Credit card number"
        />
        <div>
          <Input
            value={data.cvc}
            length={3}
            onChange={handleChange('cvc')}
            error={errors?.cvc}
            width='80%'
            type="text"
            placeholder="CVC"
          />
          <Input
            value={data.expiry}
            length={4}
            onChange={handleChange('expiry')}
            error={errors?.expiry}
            width='80%'
            type="text"
            placeholder="Expiry"
          />
        </div>
        <button className="form__submit">
          <a>Submit</a>
        </button>
      </form>
    </div>
  )
}
