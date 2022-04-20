import react, { useEffect, useState } from "react";
import BraintreeDropin from "braintree-dropin-react";
// import BraintreeSubmitButton from './BraintreeSubmitButton';
import braintree from "braintree-web-drop-in";
import BraintreeSubmitButton from "./BraintreeSubmitButton";
import Card from "../Card";
import axios from "axios";
import { UNSAFE_NavigationContext } from "react-router-dom";

const Braintree = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [token, setToken] = useState("");
  const [amount, setAmount] = useState(100);


  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    try {
      let res = await axios.get("api/braintree_token");
      setToken(res.data);
      setLoaded(true);
    } catch (error) {
      alert("error getting token");
    }
  };
  const handlePaymentMethod = async(payload) => {
    console.log('amount',amount)

    console.log('payload',payload)
    console.log('nonce:', payload.nonce)

    try {
         let res = await axios.post('/api/payment', {amount, ...payload})
         console.log('transaction id:', res.data)
    } catch (error) {
        //needs great error handling here
        console.log('error',error.response)
        alert('error receiving payment')
    }

  };
  if (!loaded) {
    return <p>spinner</p>;

  }

  return (
    <Card>
      <div>
        <h1>Payments</h1>
        <p>Amount</p>
        <input value={amount} onChange={(e)=>setAmount(e.target.value)} />

        <BraintreeDropin
          braintree={braintree}
          authorizationToken={token}
          handlePaymentMethod={handlePaymentMethod}
          renderSubmitButton={BraintreeSubmitButton}
        />
      </div>
    </Card>
  );
};

export default Braintree;
