import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { withKnobs, object, array, text } from '@storybook/addon-knobs/react';

import OrderHeader from 'molecules/OrderHeader.js'
import Breadcrumb from 'molecules/Breadcrumb.js'
import Textbox from 'molecules/Textbox.js'
import AddProductInput from 'molecules/AddProductInput.js'

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
            const title = text('Title', 'Remarks')
            const content = text('Content', 'When you enter into any new area of science, you almost always find yourself with a baffling new language of technical terms to learn before you can converse with the experts. This is certainly true in astronomy both in terms of terms that refer to the cosmos and terms that describe the tools of the trade, the most prevalent being the telescope. So to get us off of first base, let’s define some of the key terms that pertain to telescopes to help you be able to talk to them more intelligently. ')
            return <Textbox title={title}>{content}</Textbox>
        })
        .add('Add Product Input', () => {
            return <AddProductInput />
        })
}
 