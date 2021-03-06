import React, { useState } from 'react';
import './index.css';

export function Input({ width, type, placeholder, value, length, onChange, error }: InputProps) {
  return (
    <>
      <label className="custom-field">
        <input
          style={{ width }}
          type={type}
          placeholder={placeholder}
          value={value}
          maxLength={length}
          onChange={onChange}
        />
        <div style={{ width }} className="error-message" aria-live="polite">{error}</div>
      </label>
    </>
  )
}
