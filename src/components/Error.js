
import React , { Component } from 'react';

class Error extends Component {
	constructor () {
		super();
		this.state = {
			catch_error : false
		}
	}
	componentDidCatch () {
		this.setState({catch_error : true})
	}
	render () {
       return this.state.catch_error ? 
       <div style={{height:'100vh'}}className='flex justify-center items-center'><h1>something went wrong.</h1></div> :
       this.props.children
	}
}
export default Error;