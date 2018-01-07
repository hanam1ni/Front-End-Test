import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { withKnobs, text, boolean  } from '@storybook/addon-knobs/react';

import OrderHeader from 'molecules/OrderHeader.js'

export default () => {
    const stories = storiesOf('Molecules', module);
    stories.addDecorator(withKnobs);

    stories
        .add('OrderHeader', () => {
            return <OrderHeader></OrderHeader>
        })
}
 