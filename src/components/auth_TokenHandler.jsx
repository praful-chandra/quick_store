import React from "react";
import {withRouter} from "react-router-dom";

function AuthTokenHandler(props) {


    const token = props.match.params.token;

    localStorage.setItem('jwtToken',token);
        props.history.push("/");

    return (
        <div>
            Please Wait .... 
        </div>
    );
}

export default withRouter(AuthTokenHandler);