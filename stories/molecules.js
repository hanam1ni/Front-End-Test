import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { withKnobs, object, array } from '@storybook/addon-knobs/react';

import OrderHeader from 'molecules/OrderHeader.js'
import Breadcrumb from 'molecules/Breadcrumb.js'
import Textbox from 'molecules/Textbox.js'

export default () => {
    const stories = storiesOf('Molecules', module);
    stories.addDecorator(withKnobs);

    stories
        .add('OrderHeader', () => {
            const orderHeaderDetail = object('Header Detail', {
                name: 'CPF Saraburi',
                address: 'Highway 2, Kaeng Khoi Saraburi Thailand',
                tel: '+66 087 348 79 34',
            })
            const orderHeaderSelect = object('Header Selection', {
                type: 'Retailers',
                owner: 'Tom Hank',
                status: 'Pending',
            })
            return <OrderHeader detail={orderHeaderDetail} selection={orderHeaderSelect}></OrderHeader>
        })
        .add('Breadcrumb', () => {
            const levels = array('Level', ['Order', 'TN SO 000015'])
            return <Breadcrumb levels={levels} />
        })
        .add('Textbox', () => {
            return <Textbox />
        })
}
 