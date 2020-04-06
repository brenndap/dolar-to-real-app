import React from 'react'
import PropTypes from 'prop-types'

import './style.css'

export default function RadioButton(
    {
        label,
        checked,
        onChange,
        name
    }
) {

    return (
        <label class="container">{label}
            <input
                required
                type="radio"
                checked={checked}
                name={name}
                onChange={onChange} 
            />
            <span class="checkmark"></span>
        </label>
    )
}

RadioButton.propTypes = {
    label: PropTypes.string,
    checked: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string
}