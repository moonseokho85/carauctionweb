import React, { Component } from 'react'
import Button from "../components/button"

// "$class": "org.acme.vehicle.auction.CloseBidding",
//     "listing": {},
//     "transactionId": "string",
//     "timestamp": "2019-08-29T03:16:51.816Z"

const URL = 'http://localhost:3001/api/CloseBidding'

export default class CloseBiddingScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            $class: "",
            listing: ""
        }
    }

    _onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            $class: "org.acme.vehicle.auction.Offer",
            listing: this.state.listing
        })

        const data = {
            $class: this.state.$class,
            listing: this.state.listing,
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

    getCloseBidding = async ()=>{
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
                       placeholder="org.acme.vehicle.auction.Offer"
                       value={this.state.$class}
                       onChange={this.handleChange}
                       name="$class" 
                    />
                    <input 
                       placeholder="listing"
                       value={this.state.listing}
                       onChange={this.handleChange}
                       name="listing" 
                    />
                    <Button 
                    style = {{backgroundColor:"#FFA200"}}
                    title = "입찰 마감 신청"
                    />
                </form>
                
                <Button 
                    style = {{backgroundColor:"#BD92FF"}}
                    title = "입찰 마감 조회"
                    action = {()=>this.getCloseBidding()}
                />
            </div>
        )
    }
}
