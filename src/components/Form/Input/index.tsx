import React, { useState } from 'react';
import './index.css';

type InputProps = {
  value: string;
  onChange: any;
  width: string;
  type: string;
  placeholder: string;
}

export function Input({ value, onChange, width, type, placeholder }: InputProps) {
  return (
    <>
      <label className="custom-field">
        <input
          style={{ width }}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        <span className="error-message" aria-live="polite"></span>
      </label>
    </>
  )
}
