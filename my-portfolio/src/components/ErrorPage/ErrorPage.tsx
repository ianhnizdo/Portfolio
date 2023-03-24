import react from 'react';
import { useRouteError } from "react-router-dom";

interface Error{
    statusText?: String,
    message?: String
}

export default function Error(){
    //How to define?
    const error: any = useRouteError();
    console.log(error);

    return (
        <section id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </section>
    )
}