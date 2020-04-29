import React, { Component } from 'react';
import axios from 'axios';
import Category from './Category';

class CategoryList extends Component {

    constructor(){
        super()
        this.state = {
            category : []
        }
    }

    componentDidMount(){
        axios.get('https://apolis-grocery.herokuapp.com/api/category')
        .then(response => {
            console.log(response)
            this.setState({
                category: response.data.data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {category} = this.state;
        return ( 
                <div>
                     <h1>Category List</h1>
                    <div class="row">
                   
                    {
                        category.map( (x, index) => <Category key={index} category={x}/>)
                        //category.map(x=> <h1>{x.catName}</h1>)
                        //category.length
                    }
                    </div>
                
                </div>
         );
    }
}
 
export default CategoryList;