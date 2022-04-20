import react from 'react'
import BraintreeDropin from 'braintree-dropin-react';
// import BraintreeSubmitButton from './BraintreeSubmitButton';
import braintree from 'braintree-web-drop-in';
import BraintreeSubmitButton from './BraintreeSubmitButton';
import Card from '../Card';

const Braintree = (props)=>{

    const handlePaymentMethod = (payload)=>{
    
    }

    return(
        <Card>
        <div>
            <h1>Payments</h1>
            <BraintreeDropin
            braintree={braintree}
            authorizationToken={"sandbox_gp2rpvy2_t42vyjm6387qnwxr"}
            handlePaymentMethod={handlePaymentMethod}
            renderSubmitButton={BraintreeSubmitButton}
          />


        </div>
        </Card>
    )
}

export default Braintree