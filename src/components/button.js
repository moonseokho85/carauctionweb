import React from 'react'

const Button = (props) => {
    console.log(props.style);
    return(
        <button 
            style= {this.props.style} 
            onClick= {this.props.action}>    
            {props.title} 
        </button>)
}

export default Button;