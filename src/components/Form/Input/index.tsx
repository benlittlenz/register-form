import React, { useState } from 'react';
import './index.css';

type InputProps = {
  width: string;
  type: string;
  placeholder: string;
}

export function Input({ width, type, placeholder }: InputProps) {
  return (
    <>
      <label className="custom-field">
        <input style={{ width }} type={type} placeholder={placeholder} />
        <span className="error-message" aria-live="polite"></span>
      </label>
    </>
  )
}
