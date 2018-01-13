import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

import Sidebar from 'organisms/Sidebar.js'

export default () => {
    const stories = storiesOf('Organisms', module);

    stories
        .add('Sidebar', () => {
            return <div style={{height: '1000px'}}>
                <Sidebar />
            </div>
        })
}