import React from 'react'
import GoogleAutoComplete from "react-google-autocomplete";


const Main = () => {
    const callbackFunc = (autoCompleteData) => {
    console.log(autoCompleteData);
  };

    return (
        <section className="main">
            <div className="main-center">
                <article className="main-info">
                    <h1>
                        Roof inspection <br/>
                        made remote and easy
                    </h1>
                    <h3>
                        Get your roof inspected remotely and connect with our trusted roofers
                    </h3>
                    <div className="main-address">
                        <span>
                            <img src="	https://www.remoteroofing.com/assets/svgs/location.svg" alt="location" />
                        </span>
                        <div className="main-address-field">
                            <GoogleAutoComplete
                        keyForAPI="YOUR_API_KEY"
                        fieldsByUser={{
                        streetAddress: "route",
                        streetAddress2: "administrative_area_level_4",
                        locality: "locality",
                        cityOrState: "administrative_area_level_1",
                        postalcode: "postal_code",
                        country: "country" }}
                        callbackfunction={callbackFunc}
                        className="google-add"
                     />
                    </div>
                     <button class="button main-address-btn button-primary">
                     Get an instant estimate
                    </button> 
                </div>
            </article>
        </div>
     </section>
    )

}

export default Main;