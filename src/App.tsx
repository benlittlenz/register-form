import React, { useState } from 'react';
import { Heading } from './components/Heading'
import { Menu } from './components/Menu'
import { Form } from './components/Form'
import './App.css';

function App() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="App">
      <Heading open={open} setOpen={setOpen} />
      {open === true ? (
        <Menu />
      ) : <Form />}

    </div>
  );
}

export default App;
