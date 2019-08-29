import React, { Component } from 'react'
import Button from "../components/button"

// "$class": "org.acme.vehicle.auction.Auctioneer",
// "email": "string",
// "firstName": "string",
// "lastName": "string"

const URL = 'http://localhost:3001/api/Auctioneer'

export default class AuctioneerScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            $class: "",
            email: "",
            firstName: "",
            lastName: ""
        }
    }

    _onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            $class: "org.acme.vehicle.auction.Auctioneer",
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName
        })

        const data = {
            $class: this.state.$class,
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

    getAuctioneer = async ()=>{
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
                       placeholder="org.acme.vehicle.auction.Auctioneer"
                       value={this.state.$class}
                       onChange={this.handleChange}
                       name="$class" 
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
                    title = "경매인 추가"
                    />
                </form>
                
                <Button 
                    style = {{backgroundColor:"#BD92FF"}}
                    title = "경매인 조회"
                    action = {()=>this.getAuctioneer()}
                />
            </div>
        )
    }
}
