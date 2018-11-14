import React, { Component } from "react";
import axios from "axios";

class CodeChallengeLevelTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: [],
      letters: {}
    };
  }

  componentDidMount() {
    this.fetchPeople();
  }

  fetchPeople() {
    axios.get("/api/base").then(data => {
      const emailsArr = [];
      for (let i = 0; i < data.data.data.length; i++) {
        const emails = data.data.data[i].email_address;
        emailsArr.push(emails);
      }
      this.setState({ email: emailsArr });
    });
  }

  countCharacters() {
    const letters = [...this.state.email];
    const lettersCombined = letters.join("").split("");
    const letterCount = lettersCombined.reduce((total, letter) => {
      total[letter] ? total[letter]++ : (total[letter] = 1);
      return total;
    }, {});
    console.log(letterCount);
    this.setState({ letters: letterCount });
  }

  render() {
    const letters = this.state.letters;
    const letterArr = Object.keys(letters).map(function(key) {
      return [String(key.toUpperCase() + ": "), letters[key]];
    });
    console.log(letterArr);

    const lettersDisplayed = letterArr.map(letter => {
      return (
        <ul>
          <li>{letter}</li>
        </ul>
      );
    });

    return (
      <div>
        <button onClick={() => this.countCharacters()}>Characters</button>
        {lettersDisplayed}
      </div>
    );
  }
}

export default CodeChallengeLevelTwo;
