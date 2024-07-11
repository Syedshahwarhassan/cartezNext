'use client'
import Store from './Store'
import { Provider} from 'react-redux'
import React from 'react'

const Privder=({children})=>{
    return(
        <Provider store={Store}>
        {children}
        </Provider>
    )
}
export default Privder