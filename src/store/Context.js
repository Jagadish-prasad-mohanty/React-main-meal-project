import React from 'react'

const Context = React.createContext({
    items:[],
    total:0,
    addItem:(items)=>{},
    removeItem:(id)=>{}
})


export default Context;
