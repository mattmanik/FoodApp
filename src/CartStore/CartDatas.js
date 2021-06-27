import CartContext from './cart-context';
import { useReducer } from 'react';

const defaultCartState = {
    items:[],
    totalAmount:0
}


const cartReducer = (state,action) => {

    if(action.type === 'ADD'){
        const newCartAmount = state.totalAmount +
         action.item.price * action.item.amount;
        const alreadySelectedItemIndex = state.items.findIndex((item) => item.id ===
            action.item.id);
        const alreadySelectedItem = state.items[alreadySelectedItemIndex];
        let newItems;

        if(alreadySelectedItem) {
            const newItem = {
                ...alreadySelectedItem,
                amount: alreadySelectedItem.amount + action.item.amount
            };
            newItems = [...state.items];
            newItems[alreadySelectedItemIndex] = newItem;
        }

        else {
            newItems = state.items.concat(action.item);
        }

        return {
            items: newItems,
            totalAmount: newCartAmount
        };
    }
    return defaultCartState;

};

const CartDatas = (props) => {

    const [cartState, CartControls] = useReducer(cartReducer,defaultCartState);

    const addItemtoCart = (item) => {
        CartControls({type:'ADD',item:item});
    };

    const removeItemfromCart = (id) => {
        CartControls({type:'REMOVE',id:id});
    };

    const cartContext = {
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemtoCart,
        removeItem:removeItemfromCart 
    };

    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>);
};

export default CartDatas;
