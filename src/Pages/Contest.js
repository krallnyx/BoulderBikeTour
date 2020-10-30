import React, { Component } from 'react';
import axios from 'axios'

export default class SloganForm extends Component {
       constructor(props) {
            super(props);

            this.state = {             
                firstname: '',
                lastname: '',
                email: '',
                slogan: '',              
                submitStatus: 'NOT_SUBMIT',  // NOT_SUBMIT->SUBMIT_IN_PROGRESS->SUBMIT_SUCCESS | SUBMIT_FAILURE
            };

            this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
            this.handleLastNameChange = this.handleLastNameChange.bind(this);
            this.handleEmailChange = this.handleEmailChange.bind(this);
            this.handleSloganChange = this.handleSloganChange.bind(this);
            this.handleSubmit  = this.handleSubmit.bind(this);

            
        }

handleFirstNameChange (event) {
    this.setState({firstname: event.target.value });
  }

handleLastNameChange (event) {
    this.setState({lastname: event.target.value });
  }

handleEmailChange (event) {
    this.setState({email: event.target.value });
  }

handleSloganChange (event) {
    this.setState({slogan: event.target.value });
  }

handleSubmit (event) {
  event.preventDefault();
    const data = {
        firstname: this.state.firstname,
        lastname: this.state.lastname ,
        email: this.state.email,
        slogan: this.state.slogan,
    };

    axios.post('http://127.0.0.1:3001/api/v1/slogans', data)
      .then(response => {
        console.log(response);
        alert('Thank you, we will study your slogan.')
      })
      .catch(error => {
        console.log(error);
        alert('Something went wrong, please check your form or wait a few minutes.')
      });

  }

    
    render() { 
      let message = ''; 
      let submitButtonDiv = (<input type="submit" className="btn h2 btn-dark btn-lg mx-auto mb-2" value="Submit my slogan"/>);


      if (this.state.submitStatus === 'SUBMIT_SUCCESS') {
        message = (<h1 className="font-weight-bold text-white text-left bg-info p-2">Thank you for your submission!</h1>);
        submitButtonDiv = 
        (<p className="font-weight-bold text-white h2 bg-info p-2 text-center">Your submission has been received successfully!</p>);
      }
 

        return (
          <div className="container">
            <div className="h3 text-center my-5">Slogan contest :</div>
            <div className="my-5">We would like you to come up with the best slogan for the race. The one choosen will be displayed on the start line and you will be rewarded with a VIP pass.</div>
            {message}
            <form onSubmit={this.handleSubmit }>
              <div className="form-group">
                <label htmlFor="firstName" className="text-white p-2 h2 bg-dark rounded">First name</label>
                <input type="text" className="form-control form-control-lg rounded" id="firstName" placeholder="Please enter your first name" 
                  required="required" value={this.state.firstname } onChange={ this.handleFirstNameChange }/>
              </div>
        
              <div className="form-group">
                <label htmlFor="lastName" className="text-white p-2 h2 bg-dark rounded">Last name</label>
                <input type="text" className="form-control form-control-lg rounded" id="lastName" placeholder="Please enter your last name" 
                    required="required"  value={this.state.lastname } onChange={ this.handleLastNameChange }/>
              </div>  
        
              <div className="form-group">
                <label htmlFor="email" className="text-white p-2 h2 bg-dark rounded">Email address</label>
                <input type="email" className="form-control form-control-lg rounded" id="email" placeholder="email@address.com" 
                  required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" value={this.state.email } onChange={this.handleEmailChange }/>
              </div>
        
              <div className="form-group">
                <label htmlFor="sloganText" className="text-white p-2 h2 bg-dark rounded">Your Slogan</label>
                <input type="text" className="form-control form-control-lg rounded" id="sloganText" required="required"
                  pattern=".{5,50}" placeholder="Please enter your slogan here. Maximum 50 characters."
                  value={this.state.slogan } onChange={ this.handleSloganChange } />
              </div>
              <br/>
              <div>
                {submitButtonDiv}
              </div>
            </form>
            <img src={require('../media/race.jpg')} className="w-75 ml-5 pl-5 mb-2" alt="Race"/>
          </div>
          
        );
    }
}