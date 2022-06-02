const initialState = {
    checkoutProducts: []
}

export default function appReducer(state = initialState, action){
    const currentProducts = state.checkoutProducts;
    switch(action.type){

        case 'login/loginUser':
            return {
                ...state,
                loggedIn : true
            }

        case 'checkout/addProduct':
            return {
                ...state,
                checkoutProducts: [...currentProducts, action.product]
            }

        default:
            return state;
    }
}