import * as React from 'react';
import Header from '../components/header';

export default class Cookies extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div style={{ padding: '100px 20px 20px 20px' }}>
          <h1>Cookie Policy</h1>
          <iframe src="/etc/cookie-statement.html" height="1000px" width="100%" />
        </div>
      </>
    );
  }
}
