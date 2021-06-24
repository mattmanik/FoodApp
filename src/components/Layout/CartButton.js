import CartContext from '../../CartStore/cart-context.js';
import CartIcon from '../Cart/CartIcon.js';
import './CartButton.css';
import { useContext } from 'react';

const CartButton = (props) => {


    const context = useContext(CartContext);

    const noofcartItems = context.items.reduce((curNo, item) => {
        console.log(curNo, item.amount,curNo + item.amount, 'curNo + item.amount');
        return curNo + item.amount;
    }, 0);
    console.log(noofcartItems,'No of cart items');
    return (<button  className='button' onClick={props.onClick}>

        <span className='icon'>
             <CartIcon/>
        </span>
        <span>Cart</span>
        <span className='badge'>{noofcartItems}</span>
    </button>
    )
};

export default CartButton;