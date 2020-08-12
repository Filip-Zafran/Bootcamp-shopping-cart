import { ADD_PRODUCT_BASKET } from './types'

const addToBasket = (productName) => ({
    type: ADD_PRODUCT_BASKET,
    payload: productName
});

console.log(addToBasket);

export default addToBasket;
