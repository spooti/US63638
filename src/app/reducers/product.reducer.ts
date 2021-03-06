import * as productActions from '../actions/product.action';

export function productReducer(state = [], action: productActions.Action) {
    switch (action.type) {
        case productActions.LOAD_PRODUCTS_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}