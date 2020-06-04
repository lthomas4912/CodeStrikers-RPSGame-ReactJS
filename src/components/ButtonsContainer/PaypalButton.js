import React from 'react';

export default function PaypalButton(){
    const Button = () => (
        <a href="https://www.paypal.me/GabrielGarciaReyes">
            <button id="donate-button" type="button">Donate</button>
        </a>
    );
    return <Button/>
}

