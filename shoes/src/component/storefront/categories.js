import React, { useState } from 'react';
import Products from './products';
import Button from '@mui/material/Button';

export default function Categories() {
    const [show, setShow] = useState(false);

    const onShow = ()=> setShow(!show)

  return (
    <>
    <h2>Browse our categories</h2>
    <Button variant="text" onClick={onShow}>Nike</Button>| 
    <Button variant="text" onClick={onShow}>Jordan</Button>|
    <Button variant="text" onClick={onShow}>Converse</Button>|

    {show ? <Products/> : null}
   </>
  );
}
