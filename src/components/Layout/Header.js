import { Fragment } from "react";
import './Header.css';
import headerimg from '../../assets/header.jpg';
import CartButton from "./CartButton";

const Header = (props) => {

return ( <Fragment>
    <header className='header'>
        <h1>Charming Restaurant</h1>
        <CartButton onClick={props.onCartButton}/>
    </header>
    <div className='main-image'>
        <img src={headerimg} alt='food table'/>
    </div>
</Fragment>);

};

export default Header;