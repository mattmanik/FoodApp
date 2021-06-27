import './Cart.css';
import Modal from '../UI/Modal';
import CartContext from '../../CartStore/cart-context';
import {useContext} from 'react';
import CartItem from './CartItem';


const Cart = props => {

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemover = (id) => {
      cartCtx.removeItem(id);
    };

    const cartItemAdd = (item) => {
      cartCtx.addItem(item);
    };

   const cartItems = (
        <ul className='cart-items'>
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={cartItemRemover.bind(null,item.id)}
              onAdd={cartItemAdd.bind(null,item)}
            />
          ))}
        </ul>
      );
return <Modal>
  {cartItems}
<div className='total'>
    <span>Total Amount</span>
    <span>{totalAmount}</span>
</div>
<div className='actions'>
    <button className='buttonCls' 
    onClick={props.onCloseBtn}>Close</button>
   {hasItems && <button className='buttonOrder'>Order</button>}
</div>
</Modal>

}

export default Cart;