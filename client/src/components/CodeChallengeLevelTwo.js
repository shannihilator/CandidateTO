import React, { Component } from 'react';
import axios from 'axios'

class CodeChallengeLevelTwo extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: []
    }
  }

  componentDidMount(){
    this.fetchPeople()
  }

  fetchPeople() {
    axios.get('/api/base')
    .then((data) => {
      const emailsArr = []
      for(let i=0; i < data.data.data.length; i++){
        const emails = data.data.data[i].email_address
        emailsArr.push(emails)
      }
      this.setState({email: emailsArr})
    })
  }
  
  countCharacters(){
        const letters = this.state.email.join("").split('')
        const letterCount = letters.reduce((total, letter) => {
          total[letter] ? total[letter]++ : total[letter] = 1;
          return total
        }, {})
        console.log(letterCount)
      }
  

  render() {
    return (
      <div>
        <button onClick={() => this.countCharacters()}>Characters</button>
      </div>
    );
  }

}

export default CodeChallengeLevelTwo;