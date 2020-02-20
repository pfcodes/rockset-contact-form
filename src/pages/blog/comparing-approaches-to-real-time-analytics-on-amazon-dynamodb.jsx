import React from 'react';
export default class NotFoundPage extends React.Component {
  state = {
    rockPun: '',
  };

  componentDidMount() {
    window.location.href = 'https://rockset.com/blog/analytics-on-dynamodb-athena-spark-elastic/';
  }

  render() {
    return <div />;
  }
}
