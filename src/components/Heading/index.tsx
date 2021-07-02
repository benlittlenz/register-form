import React, { useState } from 'react';
import { Hamburger } from './Buttons/Hamburger'
import { Back } from './Buttons/Back'
import './index.css';

export function Heading({ open, setOpen }: HeadingProps) {
  return (
    <header className="nav">
      {open ? <Back setOpen={setOpen} /> : <Hamburger setOpen={setOpen} /> }
      <a className="nav__heading">{open ? 'Menu' : 'Register Card Form'}</a>
    </header>
  )
}
