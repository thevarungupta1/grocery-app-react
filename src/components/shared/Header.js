import React, { Component } from 'react';
import logo from '../../images/logo.png';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div class="jumbotron text-center">
                    <img src={logo} width='100'/>
  <h1 class="display-4">Grocery App!</h1>
  <p class="lead">One stop shop to buy dialy essential</p>
  
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
            </div>
         );
    }
}
 
export default Header;