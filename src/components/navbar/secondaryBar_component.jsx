import React from "react";

import "./secondary_styles.scss";

function SecondaryBar(props) {
    return(
        <div className="secondaryBar" >
            <div className="secondaryBar-item">Whats New</div>
            <div className="secondaryBar-item">Products</div>
            <div className="secondaryBar-item">Campaign</div>
            <div className="secondaryBar-item">Sales</div>
            <div className="secondaryBar-item">Contact Us</div>
        </div>
    );
}

export default SecondaryBar;