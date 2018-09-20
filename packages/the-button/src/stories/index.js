import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number, select, radios } from '@storybook/addon-knobs';

import { Welcome } from '@storybook/react/demo';

import { Button } from '../Button';

import App from '../App'


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('App', () => <App />)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('with props', () => (
    <Button
      disabled={boolean('Disabled', false)}
      primary={boolean('Primary', false)}
    >
    {text('Label', 'Hello Storybook')}
    </Button>
  ))
  .add('with nested element', () => (
    <Button
      disabled={boolean('Disabled', false)}
      primary={boolean('Primary', false)}
    >
      <strong>Ola!</strong>
    {text('Label', 'Hello Storybook')}
    </Button>
  ));
