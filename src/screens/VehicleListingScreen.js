import React, { Component } from 'react'
import Button from "../components/button"

// "$class": "org.acme.vehicle.auction.VehicleListing",
// "listingId": "string",
// "reservePrice": 0,
// "description": "string",
// "state": "FOR_SALE",
// "offers": [],
// "vehicle": {}

const URL = 'http://localhost:3001/api/VehicleListing'

export default class VehicleScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            $class: "",
            listingId: "",
            reservePrice: 0,
            description: "",
            state: "FOR_SALE",
            offers: [],
            vehicle: {}
        }
    }

    _onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            $class: "org.acme.vehicle.auction.VehicleListing",
            listingId: this.state.listingId,
            reservePrice: this.state.reservePrice,
            description: this.state.description,
            state: this.state.state,
            offers: this.state.offers,
            vehicle: this.state.vehicle
        })

        const data = {
            $class: this.state.$class,
            listingId: this.state.listingId,
            reservePrice: this.state.reservePrice,
            description: this.state.description,
            state: this.state.state,
            offers: this.state.offers,
            vehicle: this.state.vehicle
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

    getVehicleListing = async ()=>{
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
                       placeholder="org.acme.vehicle.auction.VehicleListing"
                       value={this.state.$class}
                       onChange={this.handleChange}
                       name="$class" 
                    />
                    <input 
                       placeholder="listingId"
                       value={this.state.listingId}
                       onChange={this.handleChange}
                       name="listingId" 
                    />
                    <input 
                       placeholder="reservePrice"
                       value={this.state.reservePrice}
                       onChange={this.handleChange}
                       name="reservePrice" 
                    />
                    <input 
                       placeholder="description"
                       value={this.state.description}
                       onChange={this.handleChange}
                       name="description" 
                    />
                    <input 
                       placeholder="state"
                       value={this.state.state}
                       onChange={this.handleChange}
                       name="state" 
                    />
                    <input 
                       placeholder="offers"
                       value={this.state.offers}
                       onChange={this.handleChange}
                       name="offers" 
                    />
                    <input 
                       placeholder="vehicle"
                       value={this.state.vehicle}
                       onChange={this.handleChange}
                       name="vehicle" 
                    />
                    <Button 
                    style = {{backgroundColor:"#FFA200"}}
                    title = "자동차 입찰 추가"
                    />
                </form>
                
                <Button 
                    style = {{backgroundColor:"#BD92FF"}}
                    title = "자동차 일찰 조회"
                    action = {()=>this.getVehicleListing()}
                />
                <img src={this.state.carImage} />
            </div>
        )
    }
}
