import React from 'react'

const Context = React.createContext({
    items:[],
    total:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    incItem:(item)=>{},
    reset:()=>{}
})


export default Context;
