import React, { useReducer } from 'react';
import Context from './Context';

const defaultState={
    items:[],
    total:0
}

const cartReducer=(state,action)=>{
    if (action.type==="ADD"){
        const updatedItems=state.items.concat(action.item);
        const updatedTotal=state.total+action.item.amount*action.item.price
        return {
            items:updatedItems,
            total:updatedTotal
        }
    }
    return defaultState
}

const ContextProvider= (props) =>{
    const [cartState,dispatchCartState]=useReducer(cartReducer,defaultState)

    const addItemToCart=(item)=>{
        
        dispatchCartState({type:"ADD",item:item})
    }

    const removeItemFromCart = (id)=>{
        dispatchCartState({type:"REMOVE",id:id})
    }

    const contextObject={
        ...cartState,
        addItem:addItemToCart,
        removeItem:removeItemFromCart
    }

    return <Context.Provider value={contextObject}>
        {props.children}
    </Context.Provider>
}

export default ContextProvider;