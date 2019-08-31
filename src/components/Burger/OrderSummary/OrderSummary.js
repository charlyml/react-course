import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
        )
    });

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger ith tye following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price}</strong></p>
            <p>Continue with Checkout?</p>
            <Button btnType="Danger" click={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" click={props.purchaseContinued}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary;