import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    // Conditional Rendaring 4 way:
    // Element variable //if else
    // Ternary operator // condition ? true : false
    // Use && //true
    // Use || //fasle
    let command;
    if(cart.length === 0) {
        command = <p>Please add at least one item</p>
    }
    else if(cart.length === 1) {
        command = <p>Please add more</p>
    }
    else{
        command = <p>Thanks for adding items</p>
    }

    return (
        <div>
            Items Selected: {cart.length}
            {
                cart.map(tShirt =>
                        <p>{tShirt.name}
                        <button onClick={() =>handleRemoveFromCart(tShirt)}>X</button>
                        </p>
                        )
            }
            {command}
            {cart.length !== 4 ? <p>Keep adding </p> : <button>Remove All</button>}
            {cart.length === 3 && <p>Tuy vua</p> }
            {cart.length === 0 || <p>YEaaaaa</p> }
        </div>
    );
};

export default Cart;