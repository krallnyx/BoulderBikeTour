import React, {Component} from 'react'
import axios from 'axios'

export default class Riders extends Component {
  constructor(props) {
    super(props)
    this.state = {
      riders: []
    }
  }

    componentDidMount() {
        axios.get(`http://127.0.0.1:3001/api/v1/riders`)
        .then(response => {
          this.setState({riders: response.data})
        })
        .catch(error => console.log(error))
    } 
  
    render() {
      return (
        <div className="container">
          <div className="h3 text-center my-5">Riders registered to the race :</div>
          <table className="table">
            <thead>
              <tr>
                <th>Number</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
                <th>State</th>
              </tr>
            </thead>
            <tbody>
              {this.state.riders.map( (rider, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{rider.id}</th>
                    <td>{rider.firstname}</td>
                    <td>{rider.lastname}</td>
                    <td>{rider.city}</td>
                    <td>{rider.state}</td>
                  </tr>
                )}
              )} 
            </tbody>
          </table>
        </div>
      )
    }
  }