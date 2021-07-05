import React, { useReducer } from 'react';
import Context from './Context';

const defaultState={
    items:[],
    total:0
}

const cartReducer=(state,action)=>{
    if (action.type==="ADD"){
        const existingItemIndex=state.items.findIndex( item=>item.id===action.item.id)
        console.log(existingItemIndex);
        const existingItem=state.items[existingItemIndex];
        let updatedItems;
        if (existingItem){
            if (existingItem.amount+action.item.amount>5){
                alert("Can't add perticular meals more than 5")
                return state;
            }
            const updatedItem={
                ...existingItem,
                amount:existingItem.amount+action.item.amount
            }
            updatedItems=[...state.items]
            updatedItems[existingItemIndex]=updatedItem
        }
        else{
            updatedItems=state.items.concat(action.item);
        }
        const updatedTotal=state.total+action.item.amount*action.item.price
        return {
            items:updatedItems,
            total:updatedTotal
        }
    }
    else if(action.type==="REMOVE"){
        // console.log(action.id);
        const existingItemIndex=state.items.findIndex(item=>item.id===action.id);
        const existingItem=state.items[existingItemIndex];
        const updatedTotal=state.total-existingItem.price;
        let updatedItem;
        let updatedItems;
        if (existingItem){
            if (existingItem.amount===1){
                updatedItems=state.items.filter(item=>item.id!==existingItem.id)
            }
            else{
                updatedItem={...existingItem,amount:existingItem.amount-1}
                updatedItems=[...state.items]
                updatedItems[existingItemIndex]=updatedItem;
            }
        }
        return {
            items:updatedItems,
            total:updatedTotal
        }
    }
    else if (action.type==="INCR"){
        const existingItemIndex=state.items.findIndex( item=>item.id===action.item.id)
        const existingItem=state.items[existingItemIndex];
        let updatedItems;
        if (existingItem){
            if (existingItem.amount>=5){
                alert("Can't add perticular meals more than 5")
                return state;
            }
            const updatedItem={
                ...existingItem,
                amount:existingItem.amount+1
            }
            updatedItems=[...state.items]
            updatedItems[existingItemIndex]=updatedItem
        }
        else{
            updatedItems=state.items.concat(action.item);
        }
        const updatedTotal=state.total+action.item.price
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

    const incItemInCart=(item)=>{
        dispatchCartState({type:'INCR',item:item})
    }

    const contextObject={
        ...cartState,
        addItem:addItemToCart,
        removeItem:removeItemFromCart,
        incItem:incItemInCart
    }

    return <Context.Provider value={contextObject}>
        {props.children}
    </Context.Provider>
}

export default ContextProvider;