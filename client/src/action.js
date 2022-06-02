export const loginUser = () => {
    return {
        type: 'login/loginUser'
    }
}

export const addProduct = (product) => {
    return {
        type: 'checkout/addProduct',
        product
    }
}
