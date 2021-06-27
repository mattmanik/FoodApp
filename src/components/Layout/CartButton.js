import CartContext from '../../CartStore/cart-context.js';
import CartIcon from '../Cart/CartIcon.js';
import './CartButton.css';
import { useContext,useEffect,useState } from 'react';

const CartButton = (props) => {

    const [btnHigh,setBtnisHigh] = useState(false);
    const context = useContext(CartContext);

    const {items} = context;

    const noofcartItems = items.reduce((curNo, item) => {
        console.log(curNo, item.amount,curNo + item.amount, 'curNo + item.amount');
        return curNo + item.amount;
    }, 0);

    const btnClasses =  `${'button'} ${btnHigh ? 'bump' : ''}`;

    useEffect(() => {
        if(items.length === 0){
            return;
        }
        setBtnisHigh(true);

       const timer = setTimeout(() => {
            setBtnisHigh(false);
        },300);

        return () => {
            clearTimeout(timer);
        };
    },[items]);

    console.log(noofcartItems,'No of cart items');
    return (<button  className={btnClasses} onClick={props.onClick}>

        <span className='icon'>
             <CartIcon/>
        </span>
        <span>Cart</span>
        <span className='badge'>{noofcartItems}</span>
    </button>
    )
};

export default CartButton;