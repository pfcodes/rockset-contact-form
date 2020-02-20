/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <Helmet>
      <meta name="google-site-verification" content="iU8sXqm-XT4X1ncSVAfG_F7uH26vMJBSKIBI_dDp170" />
      <link
        rel="stylesheet"
        href="//unpkg.com/carbon-components@9.87.2/css/carbon-components.min.css"
      />
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.13.1/build/styles/github.min.css"
      />
      <script src="https://code.jquery.com/jquery-3.3.1.min.js" type="text/javascript"></script>
      <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
      <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
      <link href="/css/rockset.css" rel="stylesheet" type="text/css" />
      <link href="/css/rockset1.webflow.css" rel="stylesheet" type="text/css" />
      <link
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700"
        rel="stylesheet"
      />
      <script
        type="text/javascript"
        src="//unpkg.com/carbon-components@9.87.2/scripts/carbon-components.min.js"
      ></script>
      <script src="https://www.google.com/recaptcha/api.js"></script>
    </Helmet>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
