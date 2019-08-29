import React, { Component } from 'react'
import Button from "../components/button"

// "$class": "org.acme.vehicle.auction.Offer",
// "bidPrice": 0,
// "listing": {},
// "member": {},
// "transactionId": "string",
// "timestamp": "2019-08-29T03:16:51.888Z"

const URL = 'http://localhost:3001/api/Offer'

export default class AuctioneerScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            $class: "",
            bidPrice: "",
            listing: "",
            member: ""
        }
    }

    _onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            $class: "org.acme.vehicle.auction.Offer",
            bidPrice: this.state.bidPrice,
            listing: this.state.listing,
            member: this.state.member
        })

        const data = {
            $class: this.state.$class,
            bidPrice: this.state.bidPrice,
            listing: this.state.listing,
            member: this.state.member
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

    getOffer = async ()=>{
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
                       placeholder="bidPrice"
                       value={this.state.bidPrice}
                       onChange={this.handleChange}
                       name="bidPrice" 
                    />
                    <input 
                       placeholder="listing"
                       value={this.state.listing}
                       onChange={this.handleChange}
                       name="listing" 
                    />
                    <input 
                       placeholder="member"
                       value={this.state.member}
                       onChange={this.handleChange}
                       name="member" 
                    />
                    <Button 
                    style = {{backgroundColor:"#FFA200"}}
                    title = "입찰 추가"
                    />
                </form>
                
                <Button 
                    style = {{backgroundColor:"#BD92FF"}}
                    title = "입찰 조회"
                    action = {()=>this.getOffer()}
                />
            </div>
        )
    }
}
