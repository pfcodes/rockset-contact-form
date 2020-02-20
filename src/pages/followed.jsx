import React from 'react';
import Header from '../components/header';

class FollowedIndex extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div
          className="subpage-header sign-up-1"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(122, 15, 126, .91), rgba(255, 0, 0, .9))',
          }}
        >
          <div className="container w-container">
            <div className="sign-up-row w-row">
              <div className="sign-up-column-left w-clearfix w-col w-col-10">
                <div data-ix="fade-in-on-scroll" className="sign-up-form w-form">
                  <h3 className="contact-form-title">
                    You've successfully subscribed to our blog.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FollowedIndex;
