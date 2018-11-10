import React, { Component } from 'react';
import axios from 'axios'

class CodeChallenge extends Component {
  constructor(props){
    super(props);
    this.state = {
      people: []
    }
  }

  fetchPeople() {
    axios.get('/api/base')
    .then((data) => {
      this.setState({people: data.data.data})
    })
  }

  render() {

    const people = this.state.people.map((person) => {
      return (
        <div>
          <ul>
          <li>
            <p>Name(first, last): {person.first_name} {person.last_name}</p>
            <p>Job Title: {person.title}</p>
            <p>Email: {person.email_address}</p>
          </li>
          </ul>
        </div>
      )
    })
    return (
      <div>
        <button onClick={() => this.fetchPeople()}>Fetch</button>
        <p>{people}</p>
      </div>
    );
  }
}

export default CodeChallenge;