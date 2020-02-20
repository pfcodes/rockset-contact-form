import React from 'react';
export default class RedirectPage extends React.Component {
  componentDidMount() {
    window.location.href = '/sql-on-dynamodb';
  }

  render() {
    return <></>;
  }
}
