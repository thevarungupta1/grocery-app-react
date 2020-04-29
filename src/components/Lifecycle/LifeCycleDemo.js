import React, { Component } from 'react';
import LifeCycleChildDemo from './LifeCycleChildDemo';

class LifeCycleDemo extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: 'React Life Cycle Demo'
        }
        console.log('LifeCycle: Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle: getDerivedStateFromProps()')
        return null
    }

    render() { 
        console.log('Lifecycle: render()')
        return ( 
       <div>
            <h1>{this.state.name}</h1>
            <LifeCycleChildDemo />
       </div>
         );
    }

    componentDidMount(){
        console.log('Lifecycle: componentDidMount()')
    }
}
 
export default LifeCycleDemo;