import React from 'react';

import IconFacebook_1 from '../images/Icon-facebook_1.png';
import IconTwitter_2 from '../images/Icon-twitter_2.png';
import linkedIn from '../images/linkedin.png';

export default () => (
  <div className="white-footer">
    <div className="container w-container">
      <div className="footer-row white-footer-row w-row">
        <div className="white-footer-column w-col w-col-3">
          <a className="light-footer-link" href="/">
            Home
          </a>
          <a className="light-footer-link" href="/product">
            Product
          </a>
          <a className="light-footer-link" href="/pricing">
            Pricing
          </a>
        </div>
        <div className="white-footer-column w-col w-col-3" style={{ marginBottom: '16px' }}>
          <a className="light-footer-link" href="https://docs.rockset.com" target="_blank">
            Docs
          </a>
          <a className="light-footer-link" href="/company">
            Company
          </a>
          <a className="light-footer-link" href="/blog">
            Blog
          </a>
        </div>
        <div className="white-footer-column w-col w-col-3" style={{ marginBottom: '16px' }}>
          <div className="dark-footer-title">Follow us</div>
          <a
            href="http://www.facebook.com/RocksetCloud"
            target="_blank"
            className="color-social-button w-inline-block"
          >
            <img src={IconFacebook_1} className="footer-small-social-icon" />
          </a>
          <a
            href="http://www.twitter.com/RocksetCloud"
            target="_blank"
            className="color-social-button twitter w-inline-block"
          >
            <img src={IconTwitter_2} className="footer-small-social-icon" />
          </a>
          <a
            href="http://www.linkedin.com/companies/RocksetCloud"
            style={{ paddingTop: '0px', verticalAlign: 'bottom' }}
            target="_blank"
            className="color-social-button w-inline-block"
          >
            <img src={linkedIn} />
          </a>
        </div>
        <div className="white-footer-column w-col w-col-3" style={{ marginBottom: '16px' }}>
          <div className="dark-footer-title">Contact us</div>
          <a
            className="bottom-footer-paragraph dark"
            style={{ marginBottom: '8px', fontSize: '14px' }}
            href="mailto:hello@rockset.com"
          >
            hello@rockset.com
          </a>
          <p className="bottom-footer-paragraph dark" style={{ fontSize: '14px' }}>
            100 S Ellsworth Ave Suite 100
            <br />
            San Mateo, CA 94401
          </p>
        </div>
      </div>
      <div
        style={{ display: 'flex', verticalAlign: 'center' }}
        className="bottom-footer-block white-footer-block w-clearfix"
      >
        <p className="bottom-footer-paragraph dark" style={{ lineHeight: '2' }}>
          Copyright © 2020 Rockset
        </p>
        <div style={{ flexGrow: '1' }} />
        <a
          className="bottom-footer-paragraph dark"
          style={{ display: 'inline-block', marginRight: '32px' }}
          href="/legal/terms-of-service"
        >
          Terms
        </a>
        <a
          className="bottom-footer-paragraph dark"
          style={{ display: 'inline-block', marginRight: '32px' }}
          href="/legal/privacy-policy"
        >
          Privacy
        </a>
        <a
          className="bottom-footer-paragraph dark"
          style={{ display: 'inline-block', marginRight: '32px' }}
          href="/legal/data-privacy-addendum"
        >
          DPA
        </a>
        <a
          className="bottom-footer-paragraph dark"
          style={{ display: 'inline-block' }}
          href="/legal/responsible-disclosure-policy"
        >
          Disclosure Policy
        </a>
      </div>
    </div>
  </div>
);
