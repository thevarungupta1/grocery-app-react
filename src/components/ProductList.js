import React, { Component } from 'react';
import axios from 'axios'
import Product from './Product';

class ProductList extends Component {
    constructor(){
        super()
        this.state = {
            products : []
        }
    }

    componentDidMount(){
        axios.get('https://apolis-grocery.herokuapp.com/api/products/sub/1')
        .then(response => {
            console.log(response)
            this.setState({
                products: response.data.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() { 
        const {products} = this.state
        const url = "https://apolis-grocery.herokuapp.com/api/subcategory/1"
        const url2  = "https://apolis-grocery.herokuapp.com/api/products/sub/1"
        return ( 
            <div className="row">
                
                {
                    products.length ?
                    //products.map(x => <h2>{x.productName}</h2>):
                    products.map((product, index) => <Product key={index} product={product} />):
                    'No Product found'
                }
            </div>
         );
    }
}
 
export default ProductList;