import React, { useState } from 'react';
import './index.css';

type InputProps = {
  type: string;
  placeholder: string;
}

export function Input({ type, placeholder }: InputProps) {
  return (
    <div>
      <label className="custom-field">
        <input style={{width: '100%'}} type={type} placeholder={placeholder} />
        <span className="error-message" aria-live="polite"></span>
      </label>
    </div>
  )
}
