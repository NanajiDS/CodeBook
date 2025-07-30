function getSession() {
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));
    return { token, cbid };
}

export async function getUser() {
    const { token, cbid } = getSession();
    const info = {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${cbid}`, info);
    const data = await response.json();
    return data;
}

export async function getUserOrders() {
    const { token, cbid } = getSession();
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
    });
    const data = await response.json();
    return data;
}

export async function CreateOrder(cartList, total, user) {
    const { token, cbid } = getSession();
    const order = {
        cartList: cartList,
        amoutPaid: total,
        quantity: cartList.length,
        user: {
            id: user.id,
            user: user.name,
            email: user.email
        }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(order)
    });
    const data = await response.json();
    return data;

}