import React from 'react'
import logo from '../../assets/logo.png'
import RadioButton from '../../components/RadioButton'

import './style.css'

export default function Main() {

    return (
        <div className="main-container">
            <div className="main-card">
                <section className='form'>
                    <img src={logo} alt="Dólar para real" />
                    <form>
                        <input className="input" placeholder="Valor em dólar" />
                        <input className="input" placeholder="Taxa do estado" />

                        <div className="radios">
                            <RadioButton
                                name="radio"
                                label="pagar com cartão de crédito"
                            />
                            <RadioButton
                                name="radio"
                                label="pagar em dinheiro"
                            />
                        </div>
                        <button className="button" type="submit">Calcular</button>
                    </form>
                </section>
            </div>
        </div>
    )
}