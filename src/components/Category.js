import React, { Component } from 'react';

class Category extends Component {
    render() { 
        const {category} = this.props
        return ( 
        
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{category.catName}</h5>
                            <img src={`http://rjtmobile.com/grocery/images/${category.catImage}`} width="200" className="img-responsive" />
                            <br/>
                            <a href="#" className="btn btn-outline-primary btn-block">Buy</a>
                        </div>
                    </div>
                </div>
            
         );
    }
}
 
export default Category;