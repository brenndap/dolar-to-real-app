import React from 'react'
import logo from '../../assets/logo.png'
import { Link, useHistory } from 'react-router-dom'
import useTax from '../../hooks/useTax'
import { toBRLFormat, toUSDFormat } from '../../utils/currencyFormatter'

import './style.css'

export default function Result() {

    const history = useHistory()
    const { productValue, stateTax, taxMode } = history.location.state

    const value = productValue + stateTax

    const { dolar, iof, total } = useTax(taxMode, value)
   
    return (
        <div className="result-container">
            <div className="result-card">
                <header>
                    <img src={logo} alt="Dólar para Real" />

                    <div className="info">
                        <div>
                            <strong>Dólar = </strong>
                            <p>{toBRLFormat(dolar)}</p>
                        </div>
                        <hr />
                        <div>
                            <strong>IOF =</strong>
                            <p>{toBRLFormat(iof)}</p>
                        </div>
                    </div>
                </header>

                <section className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sem imposto</th>
                                <th>Com imposto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Total em dólar</td>
                                <td>{toUSDFormat((total - stateTax)/dolar)}</td>
                                <td>{toUSDFormat(total/dolar)}</td>
                               
                            </tr>
                            <tr>
                                <td>Total em real</td>
                                <td>{toBRLFormat(total - stateTax)}</td>
                                <td>{toBRLFormat(total)}</td>
                                
                            </tr>
                        </tbody>
                    </table>
                </section>
                <Link to='/' className="back">Calcular novamente</Link>
            </div>

        </div>
    )
}