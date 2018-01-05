import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { withKnobs, text, boolean  } from '@storybook/addon-knobs/react';

import Button from 'atoms/Button.js'

export default () => {
    const stories = storiesOf('Atoms', module);
    stories.addDecorator(withKnobs);

    stories
        .add('Button', () => {
            const label = text('Label', 'Hello Button')
            const secondary = boolean('Secondary', false)
            return<Button secondary={secondary}>{label}</Button>
        })
}
 