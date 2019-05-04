import React, {Component} from "react";
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Test extends Component{
    render(){
        const onSuccess = (payment) => {
            // Congratulation, it came here means everything's fine!
                console.log("The payment was succeeded!", payment);
            		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }

        const onCancel = (data) => {
            // User pressed "cancel" or close Paypal's popup!
            console.log('The payment was cancelled!', data);
            // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
 
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox:    'AXi82j1SOgoh1civl_8RVORQskl3evp1eq8OcPrin-vcM7U7Uizc7VIbDEOlKEnn1_ZeybU5_5zW1W9j',
            production: 'YOUR-PRODUCTION-APP-ID',
        }


        return(
            <div>
                <p>Welcome to Payment Page</p>
                <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
            </div>
        )

    }
}

export default Test;