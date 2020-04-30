export const addToCart = (cartItems,newItem)=>{

    let existingItem = cartItems.find(item=>item.id === newItem.id);
    
    if(existingItem){
        return cartItems.map(item=>{
            if(item.id === newItem.id)
              return {...item , quantity : item.quantity+1}
            
            return item;
        })
    }

    return [...cartItems , {...newItem , quantity:1}]

}

export const removeItemFromCart = (cartItems,itemId)=>{
    
    return cartItems.filter(item=>item.id !== itemId)
    
}