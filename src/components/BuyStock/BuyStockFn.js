import React from 'react';
import {useCounter} from '../../customHooks/useCounter'
 const BuyStockFn = (props) => {
    const ImportedFunctions = useCounter("How many stock you wanna buy", 0, false, 2)
    return <ImportedFunctions/>
}

export default BuyStockFn