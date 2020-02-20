import React from 'react';

import styles from './header.module.css';
import newWindowIcon from '../images/new-window.svg';

class Header extends React.Component {
  state = {
    toggled: false,
    companySubToggled: false,
    productSubToggled: false,
    solutionsSubToggled: false,
  };

  untoggleAllSubs() {
    this.setState({
      companySubToggled: false,
      productSubToggled: false,
      solutionsSubToggled: false,
    });
  }

  render = () => (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration={400}
      data-no-scroll={1}
      className="navbar w-nav"
    >
      <a href="/" className="logo-block w-nav-brand">
        <div className={styles.logoImage}>
          <img
            className={styles.logoImage}
            src="/images/RsLogoRGB_Rockset-Color.png"
            className="logo"
          />
        </div>
      </a>
      <div
        style={{
          zIndex: 11,
          cursor: 'pointer',
        }}
        onClick={() => this.setState({ toggled: !this.state.toggled })}
        className={`transparant-menu-button w-nav-button ${styles.menuButton}`}
      >
        <div className="w-icon-nav-menu" />
      </div>
      <nav
        role="navigation"
        className={`nav-menu w-nav-menu ${styles.navFullWidth} ${
          this.state.toggled ? styles.toggled : ''
        }`}
        // Hacky fix for issue #4133
        style={{ position: 'relative !important', paddingRight: '150px' }}
      >
        <div
          data-delay="0"
          className="dropdown w-dropdown"
          style={{ zIndex: 901, maxWidth: '940px' }}
        >
          <div
            className={
              'nav-link dropdown-toggle light w-dropdown-toggle ' +
              (this.props.activePage === 'product' || this.props.activePage === 'pricing'
                ? 'active-nav'
                : '')
            }
            onClick={() => {
              this.untoggleAllSubs();
              this.setState({
                productSubToggled: !this.state.productSubToggled,
              });
            }}
          >
            <div>Product</div>
            <div className="dropdown-icon w-icon-dropdown-toggle"></div>
          </div>
          <nav
            className={`dropdown-list w-dropdown-list ${
              this.state.productSubToggled ? 'w-open w--open' : ''
            }`}
          >
            <a href="/product" className="dropdown-link w-dropdown-link">
              TECHNOLOGY
            </a>
            <a href="/pricing" className="dropdown-link w-dropdown-link">
              PRICING
            </a>
          </nav>
        </div>
        {/* Solutions */}
        <div
          data-delay="0"
          className="dropdown w-dropdown"
          style={{ zIndex: 901, maxWidth: '940px' }}
        >
          <div
            className={
              'nav-link dropdown-toggle light w-dropdown-toggle ' +
              (this.props.activePage === 'sql-on-dynamodb' ||
              this.props.activePage === 'sql-on-kafka' ||
              this.props.activePage === 'sql-on-data-lake'
                ? 'active-nav'
                : '')
            }
            onClick={() => {
              this.untoggleAllSubs();
              this.setState({
                solutionsSubToggled: !this.state.solutionsSubToggled,
              });
            }}
          >
            <div>Solutions</div>
            <div className="dropdown-icon w-icon-dropdown-toggle"></div>
          </div>
          <nav
            className={`dropdown-list w-dropdown-list ${
              this.state.solutionsSubToggled ? 'w-open w--open' : ''
            }`}
          >
            <a href="/sql-on-dynamodb" className="dropdown-link w-dropdown-link">
              SQL ON DYNAMODB
            </a>
            <a href="/sql-on-kafka" className="dropdown-link w-dropdown-link">
              SQL ON KAFKA
            </a>
            <a href="/sql-on-data-lake" className="dropdown-link w-dropdown-link">
              SQL ON S3 OR GCS
            </a>
          </nav>
        </div>
        <a
          className={
            'nav-link light w-nav-link ' +
            (this.props.activePage === 'resources' ? 'active-nav' : '')
          }
          href="/resources"
        >
          Resources
        </a>
        <a
          className={
            'nav-link light w-nav-link ' + (this.props.activePage === 'blog' ? 'active-nav' : '')
          }
          href="/blog"
        >
          Blog
        </a>
        {/* Product */}

        <div
          data-delay="0"
          className="dropdown w-dropdown"
          style={{ zIndex: 901, maxWidth: '940px' }}
        >
          <div
            className={
              'nav-link dropdown-toggle light w-dropdown-toggle ' +
              (this.props.activePage === 'company' ? 'active-nav' : '')
            }
            onClick={() => {
              this.untoggleAllSubs();
              this.setState({
                companySubToggled: !this.state.companySubToggled,
              });
            }}
          >
            <div>Company</div>
            <div className="dropdown-icon w-icon-dropdown-toggle"></div>
          </div>
          <nav
            className={`dropdown-list w-dropdown-list ${
              this.state.companySubToggled ? 'w-open w--open' : ''
            }`}
          >
            <a href="/company" className="dropdown-link w-dropdown-link">
              ABOUT
            </a>
            <a
              href="https://jobs.lever.co/rockset"
              target="_blank"
              className="dropdown-link w-dropdown-link"
            >
              CAREERS &nbsp;{' '}
              <img src={newWindowIcon} style={{ height: '12px', marginTop: '-3px' }} />
            </a>
          </nav>
        </div>
        <a
          href="https://docs.rockset.com/overview/"
          target="_blank"
          className="nav-link light w-nav-link"
        >
          Docs &nbsp; <img src={newWindowIcon} style={{ height: '12px', marginTop: '-3px' }} />
        </a>
        <a
          href="https://console.rockset.com/overview"
          target="_blank"
          className={`nav-link w-nav-link ${styles.hideLogin}`}
        >
          Login
        </a>
        <a
          href="https://console.rockset.com/create"
          className={`nav-link with-color w-nav-link get-started-button ${styles.hideSignup}`}
        >
          Sign up
        </a>
      </nav>
      <div className={styles.headerRight}>
        <a href="/contact-us" className="nav-link w-nav-link">
          Contact Us
        </a>
        <a
          onClick={() => {
            try {
              window.analytics.track('website-login');
              window.gtag('event', 'website-login');
            } finally {
              window.setTimeout(() => {
                window.location.href = 'https://console.rockset.com';
              }, 500);
            }
          }}
          href="#"
          className="nav-link w-nav-link"
        >
          Login
        </a>
        <a
          onClick={() => {
            try {
              window.analytics.track('website-signup');
              window.gtag('event', 'website-signup');
              window.qp('track', 'Purchase');
            } finally {
              window.setTimeout(() => {
                window.location.href = 'https://console.rockset.com/create';
              }, 500);
            }
          }}
          href="#"
          className="nav-link with-color w-nav-link get-started-button"
        >
          Sign up
        </a>
      </div>
      <a
        onClick={() => {
          try {
            window.analytics.track('website-signup');
            window.gtag('event', 'website-signup');
            window.qp('track', 'Purchase');
          } finally {
            window.setTimeout(() => {
              window.location.href = 'https://console.rockset.com/create';
            }, 500);
          }
        }}
        href="#"
        className={styles.mobileSignUp}
      >
        Sign up
      </a>
    </div>
  );
}

export default Header;
