import React, { Component } from 'react';


class ProductList extends Component {
    render() { 
        const url = "https://apolis-grocery.herokuapp.com/api/subcategory/1"
        const url2  = "https://apolis-grocery.herokuapp.com/api/products/sub/1"
        return ( 
            <div>
                <h2>Products</h2>
            </div>
         );
    }
}
 
export default ProductList;