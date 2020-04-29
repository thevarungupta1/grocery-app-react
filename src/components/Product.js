import React, { Component } from 'react';

class Product extends Component {
    
    render() { 
        const {product} = this.props;
        return ( 
            <div className="col-sm-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{product.productName}</h5>
                    <img src={`http://rjtmobile.com/grocery/images/${product.image}`} width="200" className="img-responsive" />
                    <br/>
                    <a href="#" className="btn btn-outline-primary btn-block">Buy</a>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Product;