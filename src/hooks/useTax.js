import { useEffect, useState } from 'react'
import api from '../services/api'

const useMoney = () => {

    const iof = 1.1

    const taxCalculate = (value, dolar) => value * (dolar + iof)

    return { iof, taxCalculate }
}

const useCredit = () => {

    const iof = 6.4

    const taxCalculate = (value, dolar) => (value + iof) * dolar

    return { iof, taxCalculate }
}

function useTax(taxMode, value) {
    
    const types = {
        CREDIT: useCredit,
        MONEY: useMoney
    }

    const [dolar, setDolar] = useState(0)
    const [iof, setIof] = useState(0)
    const [total, setTotal] = useState(0)

    const getDolar = async () => {
        const response = await api.get('USD-BRL')
        setDolar(parseFloat(response.data[0].bid))
    }

    const taxCalculate = () => {
        setIof(types[taxMode]().iof)
        setTotal(types[taxMode]().taxCalculate(parseFloat(value), dolar))
    }

    useEffect(() => {
        getDolar()
        taxCalculate()
    },[taxCalculate])
    
    return { dolar, iof, total }
}

export default useTax