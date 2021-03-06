import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { withKnobs, text, boolean  } from '@storybook/addon-knobs/react';

import Button from 'atoms/Button.js'
import Input from 'atoms/Input.js'
import Select from 'atoms/Select.js'
import { DropdownButton, MenuItem } from 'react-bootstrap'

export default () => {
    const stories = storiesOf('Atoms', module);
    stories.addDecorator(withKnobs);
    stories.addDecorator(story => (
        <div style={{padding: '20px 50px 50px 50px'}}>
          {story()}
        </div>
    ))
    
    stories
        .add('Button', () => {
            const label = text('Label', 'Hello Button')
            return <Button>{label}</Button>
        })
        .add('Input', () => {
            const placeholder = text('Placeholder', 'Enter Value')
            const disabled = boolean('Disabled', false)
            const stretch = boolean('Stretch', false)
            return <Input placeholder={placeholder} disabled={disabled} stretch={stretch} />
        })
        .add('Select', () => {
            return (
                <Select>
                    <option value="selects">Selects</option>
                    <option value="second">Second</option>
                    <option value="other">...</option>
                </Select>
            )
        })
}
 