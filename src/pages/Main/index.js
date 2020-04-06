import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { useHistory } from 'react-router-dom'
import NumberMaskInput from '../../components/NumberMaskInput'

import './style.css'

export default function Main() {

    const [productValue, setProductValue] = useState(0)
    const [stateTax, setStateTax] = useState(0)
    const [taxMode, setTaxMode] = useState('')

    const history = useHistory()
    
    const handleCalc = e => {
        e.preventDefault()
        history.push('/result', { productValue, stateTax, taxMode })
    }

    return (
        <div className="main-container">
            <div className="main-card">
                <section className='form'>
                    <img src={logo} alt="Dólar para real" />
                    <form onSubmit={handleCalc}>
                        <NumberMaskInput
                            required
                            className="input"
                            placeholder="Valor em dólar"
                            maskOptions={{prefix: "$"}}
                            onChange={e => setProductValue(parseFloat(e.target.value.replace("$", "")))}
                        />

                        <NumberMaskInput
                            required
                            maskOptions={{suffix: "%"}}
                            className="input"
                            placeholder="Taxa do estado"
                            onChange={e => setStateTax(parseFloat(e.target.value.replace("%", "")))}
                        />

                        <div className="radios-container">
                            <label className="radio">pagar com cartão de crédito
                                <input
                                    required
                                    type="radio"
                                    name='taxMode'
                                    value='CREDIT'
                                    onChange={e => setTaxMode(e.target.value)}
                                />
                                <span className="checkmark"></span>
                            </label>
                            <label className="radio">pagar em dinheiro
                                <input
                                    required
                                    type="radio"
                                    name="taxMode"
                                    value='MONEY'
                                    onChange={e => setTaxMode(e.target.value)}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <button className="button" type="submit">Calcular</button>
                    </form>
                </section>
            </div>
        </div>
    )
}