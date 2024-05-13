import { ActionTypes } from "../constants/action-types";
export const srtPtoducts = (products) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectProduct = (product)=>{
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};