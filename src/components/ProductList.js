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
        axios.get(`https://apolis-grocery.herokuapp.com/api/products/cat/${this.props.match.params.id}`)
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
        const { id } = this.props.match.params;
        return ( 
            <div>
                <h1>{ `${id}`}</h1>
                <div className="row">
                
                {
                    products.length ?
                    //products.map(x => <h2>{x.productName}</h2>):
                    products.map((product, index) => <Product key={index} product={product} />):
                    'No Product found'
                }
            </div>
            </div>
            
         );
    }
}
 
export default ProductList;