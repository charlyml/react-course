import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentDidUpdate () {
        console.log("Did update");
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
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
                <p><strong>Total price: {this.props.price}</strong></p>
                <p>Continue with Checkout?</p>
                <Button btnType="Danger" click={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" click={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        )
    }
}

export default OrderSummary;