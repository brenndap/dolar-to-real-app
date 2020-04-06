import React from 'react'
import MaskedInput from 'react-text-mask'
import PropTypes from 'prop-types'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
    prefix: '',
    suffix: '',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ',',
    allowDecimal: true,
    decimalSymbol: '.',
    decimalLimit: 2, 
    integerLimit: 7, 
    allowNegative: false,
    allowLeadingZeroes: false,
}

const NumberMaskInput = ({ maskOptions, ...inputProps }) => {
    const mask = createNumberMask({
        ...defaultMaskOptions,
        ...maskOptions,
    })

    return <MaskedInput mask={mask} {...inputProps} />
}

NumberMaskInput.defaultProps = {
    inputMode: 'text',
    maskOptions: {},
}

NumberMaskInput.propTypes = {
    inputmode: PropTypes.string,
    maskOptions: PropTypes.shape({
        prefix: PropTypes.string,
        suffix: PropTypes.string,
        includeThousandsSeparator: PropTypes.bool,
        thousandsSeparatorSymbol: PropTypes.string,
        allowDecimal: PropTypes.bool,
        decimalSymbol: PropTypes.string,
        decimalLimit: PropTypes.string,
        requireDecimal: PropTypes.bool,
        allowNegative: PropTypes.bool,
        allowLeadingZeroes: PropTypes.bool,
        integerLimit: PropTypes.number,
        onChange: PropTypes.func
    }),
}

export default NumberMaskInput