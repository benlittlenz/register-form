import React, { useState } from 'react';
import { Hamburger } from './Hamburger'
import './index.css';

export function Menu() {
  const [open, setOpen] = useState<boolean>(false);
  const close = () => setOpen(false);

  return (
    <header className="menu">
      <Hamburger open={open} setOpen={setOpen} />
      <a className="menu__heading">Register Card Form</a>
    </header>
  )
}
