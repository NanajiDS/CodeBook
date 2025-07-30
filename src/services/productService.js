export async function getProductsList(searchterm) {
     const response = await fetch(`${process.env.REACT_APP_HOST}/444/products?name_like=${searchterm?searchterm:""}`);
     const data = await response.json();
     return data;
}

export async function  getProduct(id) {
    const response =await fetch(`${process.env.REACT_APP_HOST}/444/products/${id}`);
    const data = await response.json();
    return data;

}
export async function getFeatureProductList() {
     const response = await fetch(`${process.env.REACT_APP_HOST}/444/featured_products`);
    const data = await response.json();
    return data;
}