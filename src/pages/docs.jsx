import React from 'react';
export default class DocsPage extends React.Component {
  componentDidMount() {
    window.location.href = 'https://docs.rockset.com';
  }

  render() {
    return <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }} />;
  }
}
