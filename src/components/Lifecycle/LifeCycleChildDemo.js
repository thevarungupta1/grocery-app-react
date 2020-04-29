import React, { Component } from 'react';

class LifeCycleChildDemo extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: 'React Life Cycle Chilc Demo'
        }
        console.log('LifeCycle Child: Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle Child: getDerivedStateFromProps()')
        return null
    }

    render() { 
        console.log('Lifecycle Child: render()')
        return ( 
        <h1>{this.state.name}</h1>
         );
    }

    componentDidMount(){
        console.log('Lifecycle Child: componentDidMount()')
    }
}
 
export default LifeCycleChildDemo;