//Importing Dependencies
import React from "react";
import {Link} from "react-router-dom";

import "./secondary_styles.scss";


//This component displays the links just below the navbar

//TODO: add functionality to most of the links

function SecondaryBar(props) {
    return(
        <div className="secondaryBar" >
            <div className="secondaryBar-item">Whats New</div>
           <Link to="/category" style={{textDecoration : "none"}}> <div className="secondaryBar-item">Category</div></Link>
            <div className="secondaryBar-item">Campaign</div>
            <div className="secondaryBar-item">Sales</div>
            <div className="secondaryBar-item">Contact Us</div>
        </div>
    );
}

export default SecondaryBar;