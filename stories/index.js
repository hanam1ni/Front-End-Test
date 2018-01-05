import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap';

storiesOf('Button', module)
  .add('with text', () => (
    <Button bsStyle="primary">Hello Button</Button>
  ))
   