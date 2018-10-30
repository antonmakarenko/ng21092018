import { productsReducer } from './reducers/products.reducer';
import { cartReducer } from './reducers/cart.reducer';

export const reducers = {
    cartPoducts: cartReducer,
    products: productsReducer,
};
