import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducers";

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

const FilterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);

    function initialProductList(products){
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        });
    }

    function GetonlyInStock(products)
    {
       if(state.onlyInStock === true)
       {
        return products.filter(product => product.in_stock === true)
       }
       return products;
    }
    function getbestSellerOnly(products)
    {
        if(state.bestSellerOnly)
        {
          return  products.filter(product => product.best_seller === true)
        }
        return products
    }
    function getRatingBy(products)
    {
          if(state.rating == "4ANDABOVE")
          {
           return products.filter(product => product.rating >= 4)
          }
          else if(state.rating == "3ANDABOVE")
          {
           return products.filter(product => product.rating >= 3)
          }
          else if(state.rating == "2ANDABOVE")
          {
           return products.filter(product => product.rating >= 2)
          }
          else if(state.rating == "1ANDABOVE")
          {
           return products.filter(product => product.rating >= 1)
          }
          return products;
    }
    function getSortBy(products)
    {
        if(state.sortBy == "LOWTOHIGH")
        {
          return  products.sort((a,b)=> Number(a.price) - Number(b.price));
        }
        else if(state.sortBy == "HIGHTOLOW")
        {
            return products.sort((a,b)=> Number(b.price) - Number(a.price));
        }
        return products;
    }
    
    const filteredproductsList = GetonlyInStock(getbestSellerOnly(getRatingBy(getSortBy(state.productList))));

    const value = {
        state,
        dispatch,
        products: filteredproductsList,
        initialProductList
    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext);
    return context;
}