/* eslint-disable prettier/prettier */
export const addToCart=(shoe)=>({
    type:'ADD_TO_CART',
    payload:shoe,
})

export const removeFromCart=(shoe)=>({
    type:'REMOVE_FROM_CART',
    payload:shoe,
})