import { checkPropTypes } from 'prop-types';
import React from 'react';
import Context from './Context';

const ContextProvider= (props) =>{
    const addItemToCart=(item)=>{

    }
    const removeItemFromCart = (id)=>{

    }

    const contextObject={
        items:[],
        total:0,
        addItem:addItemToCart,
        removeItem:removeItemFromCart
    }

    return <Context.Provider value={contextObject}>
        {props.children}
    </Context.Provider>
}

export default ContextProvider;