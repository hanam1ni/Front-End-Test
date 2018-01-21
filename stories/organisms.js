import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

import Navigation from 'organisms/Navigation.js'
import EditOrderSubPage from 'organisms/EditOrderSubPage.js'
import EditOrderSubPageMobile from 'organisms/EditOrderSubPageMobile.js'

export default () => {
    const stories = storiesOf('Organisms', module);

    stories
        .add('Navigation', () => {
            return <div style={{height: '1000px'}}>
                <Navigation />
            </div>
        })
        .add('Edit Order Subpage', () => {
            return <EditOrderSubPage />
        })
        .add('Edit Order Subpage Mobile', () => {
            return <EditOrderSubPageMobile />
        })
}