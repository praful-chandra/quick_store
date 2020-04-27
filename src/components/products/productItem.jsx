import React from "react";

function ProductItem(props) {
    let item = props.item;
    return(
        <div  style={{backgroundImage : `url(${item.imageUrl})`}} className="product-items-item">
        <div  className="product-items-item-info">
            <div className="product-items-item-info-title">
                {item.name}
            </div>
        
        </div>
    </div>
    );
}

export default ProductItem;