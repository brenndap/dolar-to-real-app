import React from 'react'
import logo from '../../assets/logo.png'

import './style.css'

export default function Result() {

    return (
        <div className="result-container">
            <div className="result-card">
                <header>
                    <img src={logo} alt="Dólar para Real" />

                    <div className="info">
                        <div>
                            <strong>USD =</strong>
                            <p>U$ 5,20</p>
                        </div>
                        <hr />
                        <div>
                            <strong>IOF =</strong>
                            <p>U$ 5,20</p>
                        </div>
                    </div>
                </header>

                <section className="table-container">
                    <table>
                        <thead>
                            <th></th>
                            <th>Sem imposto</th>
                            <th>Com imposto</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Total em dólar</td>
                                <td>R$ 5.50</td>
                                <td>R$ 5.50</td>
                            </tr>
                            <tr>
                                <td>Total em real</td>
                                <td>R$ 5.50</td>
                                <td>R$ 5.50</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <a className="back">Calcular novamente</a>
            </div>

        </div>
    )
}