import React, { Component } from 'react'
import Button from "../components/button"

// "$class": "org.acme.vehicle.auction.Vehicle",
// "vin": "string",
// "manufacturer": "string",
// "carImage": "string",
// "year": 0,
// "carNumber": 0,
// "owner": {}

const URL = 'http://localhost:3001/api/Vehicle'

export default class VehicleScreen extends Component {

    constructor(props){
        super(props)
        this.state={
            $class: "",
            vin: "",
            manufacturer: "",
            carImage: "",
            year: 2019,
            carNumber: 0,
            owner: {}
        }
    }

    _onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            $class: "org.acme.vehicle.auction.Vehicle",
            vin: this.state.vin,
            manufacturer: this.state.manufacturer,
            carImage: this.state.carImage,
            year: this.state.year,
            carNumber: this.state.carNumber,
            owner:`resource:org.acme.vehicle.auction.Member#${this.state.owner}`
        })

        const data = {
            $class: this.state.$class,
            vin: this.state.vin,
            manufacturer: this.state.manufacturer,
            carImage: this.state.carImage,
            year: this.state.year,
            carNumber: this.state.carNumber,
            owner: this.state.owner
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

    getVehicle = async ()=>{
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
                       placeholder="org.acme.vehicle.auction.Vehicle"
                       value={this.state.$class}
                       onChange={this.handleChange}
                       name="$class" 
                    />
                    <input 
                       placeholder="vin"
                       value={this.state.vin}
                       onChange={this.handleChange}
                       name="vin" 
                    />
                    <input 
                       placeholder="manufacturer"
                       value={this.state.manufacturer}
                       onChange={this.handleChange}
                       name="manufacturer" 
                    />
                    <input 
                       placeholder="carImage"
                       value={this.state.carImage}
                       onChange={this.handleChange}
                       name="carImage" 
                    />
                    <input 
                       placeholder="year"
                       value={this.state.year}
                       onChange={this.handleChange}
                       name="year" 
                    />
                    <input 
                       placeholder="carNumber"
                       value={this.state.carNumber}
                       onChange={this.handleChange}
                       name="carNumber" 
                    />
                    <input 
                       placeholder="owner"
                       value={this.state.owner}
                       onChange={this.handleChange}
                       name="owner" 
                    />
                    <Button 
                    style = {{backgroundColor:"#FFA200"}}
                    title = "자동차 추가"
                    />
                </form>
                
                <Button 
                    style = {{backgroundColor:"#BD92FF"}}
                    title = "자동차 조회"
                    action = {()=>this.getVehicle()}
                />
                <img src={this.state.carImage} />
            </div>
        )
    }
}
