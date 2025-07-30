import { createContext, useContext, useReducer } from "react"
import { CartReducer } from "../reducers";

const cartIntialState = {
    cartList: [],
    total: 0
}

const CartContext = createContext(cartIntialState);

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, cartIntialState);

    function addtoCart(product) {
        const updatedProductsList = state.cartList.concat(product);
        const updatedTotal = state.total + product.price;
        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedProductsList,
                total: updatedTotal
            }
        })
    }

    function removeFromCart(product) {
        const updatedProductsList = state.cartList.filter(item => item.id !== product.id)
        const updatedTotal = state.total - product.price;
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedProductsList,
                total: updatedTotal
            }
        })
    }

    function clearcart() {
        dispatch({
            type: "CLEAR_CART"
        })
    }
    const value = {
        cartList: state.cartList,
        total: state.total,
        removeFromCart,
        addtoCart,
        clearcart
    }
    return (
        < CartContext.Provider value={value} >
            {children}
        </CartContext.Provider >
    )

}

export const useCart = () => {
    const context = useContext(CartContext);
    return context;
}