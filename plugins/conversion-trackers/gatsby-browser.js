/* eslint-disable */

exports.onRouteUpdate = function({ location }) {
  // Don't track while developing.
  if (process.env.NODE_ENV === `production`) {
    if (typeof fbq === `function`) {
      fbq('track', 'ViewContent');
    }
    if (typeof twq === `function`) {
      twq('track', 'ViewContent');
    }
  }
};
