import './MealItem.css';
import {useContext} from 'react';
import MealItemForm from './MealItemForm.js';
import CartContext from '../../../CartStore/cart-context';

const MealItem = (props) => {

    const cartCtx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`; // renders with 2 decimals

    const addTocartHandler = (amount) => {
    cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price
    });
};

console.log(addTocartHandler,'addTocartHandler');

return (
     <li className='meal'>
    <div>
        <h3>{props.name}</h3>
    <div className='description'>{props.description}</div>
    <div className='price'>{price}</div>
    </div>
    <div>
        <MealItemForm id={props.id} onAddToCart={addTocartHandler}/>
    </div>
</li>
);
};

export default MealItem;