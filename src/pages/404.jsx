import React from 'react';
import Header from '../components/header';

export default class NotFoundPage extends React.Component {
  state = {
    rockPun: '',
  };

  componentDidMount() {
    let puns = [
      ['What do rocks eat?', 'Pom-a-granites.'],
      ['When were rock puns the funniest?', 'During the stone age.'],
      ['What kind of magazine does a rock like to read?', 'Rolling Stone.'],
      ['You want to hear the best rock puns?', 'Give me a moment and I’ll dig something up.'],
      [
        'What did the teenage rock say after failing its drive test?',
        'I don’t want to talc about it.',
      ],
      ['Why was the geologist always depressed?', 'He had a hard rock life.'],
      ['I really hate rock puns.', 'My sediments exactly.'],
      ['What did the metamorphic rock say during the test?', 'This is too much pressure!'],
      ['Why was the sedimentary rock extra cheap?', 'Because it was on shale.'],
      ['Where do rocks like to sleep?', 'In bedrocks!'],
    ];
    let punIndex = Math.floor(Math.random() * puns.length);
    this.setState({ rockPun: puns[punIndex] });
  }

  render() {
    return (
      <div className="homepage">
        <Header active="home" />
        <div
          style={{
            marginTop: '68px',
          }}
        >
          <div className="section">
            <div className="container w-container">
              <h1>404 No page here!</h1>
              <h3>Instead here's a rock pun...</h3>
              <br />
              <p>{this.state.rockPun[0]}</p>
              <h4>{this.state.rockPun[1]}</h4>
              <br />
              <br />
              <a href="/">Click here to go home.</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
