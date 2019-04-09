import React from 'react';
import {Button} from '@material-ui/core';
import logo from './logo.png';

export default function() {
  return <Button>Hello World <img src={logo} /></Button>
}