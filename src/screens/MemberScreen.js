import React, { Component } from 'react'
import Button from "../components/button"

// "$class": "org.acme.vehicle.auction.Member",
// "balance": 0,
// "email": "string",
// "firstName": "string",
// "lastName": "string"

const URL = 'http://localhost:3001/api/Member'

export default class MemberScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            $class: "",
            balance: "",
            email: "",
            firstName: "",
            lastName: ""
        }
    }

    _onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            $class: "org.acme.vehicle.auction.Member",
            balance: this.state.balance,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        })

        const data = {
            $class: this.state.$class,
            balance: this.state.balance,
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        }

        fetch(URL,
                {
                    method : 'POST',
                    headers : {
                        'Content-Type' : 'application/json',
                        'Accept' : 'application/json'
                    },
                    body : JSON.stringify(data)
                }
            )
            .then(res=>res.json())
            .then(resData => console.log(resData))
    }

    handleChange = (e)=>{
       
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    getMember = async ()=>{
        // fetch(URL)
        // .then(res => res.json)
        // .then(resData => console.log(resData))
        const res = await fetch(URL)
        const resData = await res.json()
        await console.log(resData)


    }

    render() {
        return (
            <div>
                <form onSubmit={this._onSubmit}>
                    <input 
                       placeholder="org.acme.vehicle.auction.Member"
                       value={this.state.$class}
                       onChange={this.handleChange}
                       name="$class" 
                    />
                    <input 
                       placeholder="balance"
                       value={this.state.balance}
                       onChange={this.handleChange}
                       name="balance" 
                    />
                    <input 
                       placeholder="email"
                       value={this.state.email}
                       onChange={this.handleChange}
                       name="email" 
                    />
                    <input 
                       placeholder="firstName"
                       value={this.state.firstName}
                       onChange={this.handleChange}
                       name="firstName" 
                    />
                    <input 
                       placeholder="lastName"
                       value={this.state.lastName}
                       onChange={this.handleChange}
                       name="lastName" 
                    />
                    <Button 
                    style = {{backgroundColor:"#FFA200"}}
                    title = "멤버 추가"
                    />
                </form>
                
                <Button 
                    style = {{backgroundColor:"#BD92FF"}}
                    title = "멤버 조회"
                    action = {()=>this.getMember()}
                />
            </div>
        )
    }
}
