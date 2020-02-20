import React from 'react';
import Typed from 'typed.js';
import $ from 'jquery';

let TYPE_SPEED = 5;
let PAUSE_DURATION = 2500;
let LOAD_DURATION = 300;
let QUERIES = [
  `
<span class="hljs-comment">-- find promotions and clickthrough rates</span>
<span class="hljs-built_in">SELECT</span> 
    visits.promotion <span class="hljs-built_in">AS</span> <span class="hljs-keyword">promotion</span>,
    <span class="hljs-built_in">sum</span>(visits.converted)/<span class="hljs-built_in">count</span>(visits.converted) <span class="hljs-built_in">AS</span> <span class="hljs-keyword">clickthrough</span>
<span class="hljs-built_in">FROM</span> visits
<span class="hljs-built_in">GROUP BY</span> <span class="hljs-keyword">promotion</span>
`,
  `
<span class="hljs-comment">-- find promotions and clickthrough rates</span>
<span class="hljs-built_in">SELECT</span> 
    visits.promotion <span class="hljs-built_in">AS</span> <span class="hljs-keyword">promotion</span>,
    <span class="hljs-built_in">sum</span>(visits.converted)/<span class="hljs-built_in">count</span>(visits.converted) <span class="hljs-built_in">AS</span> <span class="hljs-keyword">clickthrough</span>
<span class="hljs-built_in">FROM</span> visits
<span class="hljs-comment">-- target only users in SF</span>
<span class="hljs-built_in">JOIN</span> users <span class="hljs-built_in">ON</span> visits.user_id = users.id
<span class="hljs-built_in">WHERE</span> users.city = <span class="hljs-string">'San Francisco'</span>
<span class="hljs-built_in">GROUP BY</span> <span class="hljs-keyword">promotion</span>
`,
  `
<span class="hljs-comment">-- find promotions and clickthrough rates</span>
<span class="hljs-built_in">SELECT</span> 
    visits.promotion <span class="hljs-built_in">AS</span> <span class="hljs-keyword">promotion</span>,
    <span class="hljs-built_in">sum</span>(visits.converted)/<span class="hljs-built_in">count</span>(visits.converted) <span class="hljs-built_in">AS</span> <span class="hljs-keyword">clickthrough</span>
<span class="hljs-built_in">FROM</span> visits
<span class="hljs-comment">-- target only users in SF</span>
<span class="hljs-built_in">JOIN</span> users <span class="hljs-built_in">ON</span> visits.user_id = users.id
<span class="hljs-built_in">WHERE</span> users.city = <span class="hljs-string">'San Francisco'</span>
<span class="hljs-built_in">GROUP BY</span> <span class="hljs-keyword">promotion</span>
<span class="hljs-comment">-- pick the top-performing promotions</span>
<span class="hljs-built_in">ORDER BY</span> <span class="hljs-keyword">clickthrough</span> <span class="hljs-built_in">DESC</span>
`,
];

export default class VisualQuery extends React.Component {
  queryIndex = 2;

  componentDidMount() {
    this.startAnimation();
    $('#query-loader').css('display', 'none');
    $(`#query-demo-table-0`).css('display', 'none');
    $(`#query-demo-table-1`).css('display', 'none');
    $(`#query-demo-table-2`).css('display', 'none');
    $('#query-timer').css('opacity', 0);
    $(`#query-demo-table-3`).css('display', 'block');
  }

  startAnimation() {
    // this.triggerProgressBar();
    let queries;
    if (this.props.page === 'product') {
      queries = QUERIES.slice(0, 1);
    } else {
      queries = QUERIES;
    }
    this.typed = new Typed(this.el, {
      strings: queries,
      typeSpeed: TYPE_SPEED,
      backSpeed: 1,
      loop: true,
      backDelay: PAUSE_DURATION,
      onStringTyped: () => {
        // fade in the loader
        $('#query-loader').css('display', 'flex');
        $('#query-loader').animate({ opacity: '1' }, 100, 'linear');
        $('#query-timer').animate({ opacity: '0' }, 100, 'linear');

        setTimeout(() => {
          // swap out results table before loader fades out
          $(`#query-demo-table-3`).css('display', 'none');
          $(`#query-time-${this.queryIndex}`).css('display', 'none');
          $(`#query-demo-table-${this.queryIndex}`).css('display', 'none');
          this.queryIndex = (this.queryIndex + 1) % 3;
          $(`#query-time-${this.queryIndex}`).css('display', 'inline-block');
          $(`#query-demo-table-${this.queryIndex}`).css('display', 'block');

          $('#query-progress').animate({ width: 33.33 * (this.queryIndex + 1) + '%' });

          // fade out the loader after LOAD_DURATION
          $('#query-timer').animate({ opacity: '1' }, 100, 'linear');
          $('#query-loader').animate({ opacity: '0' }, 100, 'linear', () => {
            $('#query-loader').css('display', 'none');
          });
        }, LOAD_DURATION);
      },
      onLastStringBackspaced: () => {
        $('#query-progress').animate({ width: '0%' });
        $('#query-timer').animate({ opacity: '0' });

        // swap out results table before loader fades out
        $(`#query-demo-table-3`).css('display', 'block');
        $(`#query-demo-table-0`).css('display', 'none');
        $(`#query-demo-table-1`).css('display', 'none');
        $(`#query-demo-table-2`).css('display', 'none');
      },
    });
  }

  render() {
    return (
      <div
        className="query-demo"
        style={{ position: 'relative' }}
        /*style={{position: "relative",
                                          border: (this.props.page === 'home') ? "none" : "2px solid gray",
                                          borderTop: (this.props.page === 'home') ? "none" : "12px solid gray",
                                          borderTopLeftRadius: (this.props.page === 'home') ? "0px" : "6px",
                                          borderTopRightRadius: (this.props.page === 'home') ? "0px" : "6px",
                                          borderBottomLeftRadius: (this.props.page === 'home') ? "0px" : "4px",
                                          borderBottomRightRadius: (this.props.page === 'home') ? "0px" : "4px"}} */
      >
        <div
          id="query-progress"
          style={{
            height: '4px',
            backgroundColor: '#b75dda',
            width: '0%',
            display: this.props.page === 'home' ? 'block' : 'none',
          }}
        ></div>
        <div
          className="query-code"
          style={{
            backgroundColor: 'white',
            height: this.props.page === 'home' ? '220px' : '140px',
            padding: '16px 23px',
            overflowX: 'hidden',
            fontSize: '12px',
            lineHeight: '19px',
          }}
        >
          <div className="wrap">
            <div className="type-wrap">
              <span
                style={{ whiteSpace: 'pre' }}
                ref={el => {
                  this.el = el;
                }}
              />
            </div>
          </div>
        </div>
        {this.props.page === 'home' ? (
          <div
            id="query-timer"
            style={{
              opacity: 0,
              backgroundColor: '#f4f7fb',
              top: '201px',
              left: '12px',
              padding: '0px 11px',
              fontSize: '12px',
              position: 'absolute',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
              borderTop: '1px solid #dfe3e6',
              borderLeft: '1px solid #dfe3e6',
              borderRight: '1px solid #dfe3e6',
            }}
          >
            <span>Query ran in </span>
            <span id="query-time-0" style={{ display: 'none' }}>
              {' '}
              53
            </span>
            <span id="query-time-1" style={{ display: 'none' }}>
              {' '}
              71
            </span>
            <span id="query-time-2" style={{ display: 'none' }}>
              {' '}
              82
            </span>
            ms.
          </div>
        ) : (
          <div
            id="query-timer"
            style={{
              opacity: 0,
              backgroundColor: '#f4f7fb',
              top: '117px',
              left: '12px',
              padding: '0px 11px',
              fontSize: '12px',
              position: 'absolute',
              borderTopRightRadius: '5px',
              borderTopLeftRadius: '5px',
              borderTop: '1px solid #dfe3e6',
              borderLeft: '1px solid #dfe3e6',
              borderRight: '1px solid #dfe3e6',
            }}
          >
            <span>Query ran in </span>
            <span id="query-time-0" style={{ display: 'none' }}>
              {' '}
              53
            </span>
            <span id="query-time-1" style={{ display: 'none' }}>
              {' '}
              53
            </span>
            <span id="query-time-2" style={{ display: 'none' }}>
              {' '}
              53
            </span>
            ms.
          </div>
        )}
        <div
          id="query-loader"
          style={{
            position: 'absolute',
            width: '100%',
            height: this.props.page === 'home' ? '169px' : '95px',
            border: '1px solid #dfe3e6',
            backgroundColor: '#f4f7fb',
            display: 'flex',
          }}
        >
          <div style={{ margin: 'auto' }}>
            <div
              data-loading
              className="bx--loading"
              style={{ marginTop: this.props.page === 'home' ? '0px' : '-35px' }}
            >
              <svg
                className="bx--loading__svg"
                viewBox="-100 -100 200 200"
                style={{ stroke: '#b75dda' }}
              >
                <title>Loading</title>
                <circle cx="0" cy="0" r="37.5" />
              </svg>
            </div>
          </div>
        </div>
        {this.props.page === 'home' &&
          [0, 1, 2, 3].map(x => {
            return (
              <div
                key={x}
                id={`query-demo-table-${x}`}
                style={{ display: x === 0 ? 'block' : 'none' }}
              >
                <table className="bx--data-table-v2 bx--data-table-v2--compact rs-table">
                  <thead>
                    <tr>
                      <th>
                        <span className="bx--table-header-label">promotion</span>
                      </th>
                      <th>
                        <span className="bx--table-header-label">clickthrough</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>
                          <pre lang="json">
                            <span className="hljs-string">
                              {[`"yeti_tocayo"`, `"google_home_hub"`, `"apple_iphone_xr"`, ``][x]}
                            </span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre lang="json">
                            <span className="hljs-literal">
                              {[`0.00129`, `0.03124`, `0.09152`, ``][x]}
                            </span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>
                          <pre lang="json">
                            <span className="hljs-string">
                              {
                                [
                                  `"bmw_530i_sedan"`,
                                  `"audible_free_trial"`,
                                  `"nest_cam_indoor"`,
                                  ``,
                                ][x]
                              }
                            </span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre lang="json">
                            <span className="hljs-literal">
                              {[`0.01857`, `0.00131`, `0.07155`, ``][x]}
                            </span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>
                          <pre lang="json">
                            <span className="hljs-string">
                              {[`"irobot_roomba"`, `"uber_visa_card"`, `"amazon_echo_show"`, ``][x]}
                            </span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre lang="json">
                            <span className="hljs-literal">
                              {[`0.02155`, `0.01253`, `0.05243`, ``][x]}
                            </span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>
                          <pre lang="json">
                            <span className="hljs-string">
                              {[`"vw_2018_tiguan"`, `"brilliant"`, `"google_pixel3"`, ``][x]}
                            </span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre lang="json">
                            <span className="hljs-literal">
                              {[`0.01952`, `0.01922`, `0.04276`, ``][x]}
                            </span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>
                          <pre lang="json">
                            <span className="hljs-string">
                              {
                                [
                                  `"apple_watch_series_4"`,
                                  `"google_pixel3"`,
                                  `"company_store_bedding"`,
                                  ``,
                                ][x]
                              }
                            </span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre lang="json">
                            <span className="hljs-literal">
                              {[`0.01357`, `0.00376`, `0.03422`, ``][x]}
                            </span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        {this.props.page === 'product' &&
          [0, 1, 2, 3].map(x => {
            return (
              <div
                key={x}
                id={`query-demo-table-${x}`}
                style={{ display: x === 0 ? 'block' : 'none' }}
              >
                <table className="bx--data-table-v2 bx--data-table-v2--compact rs-table">
                  <thead>
                    <tr>
                      <th>
                        <span className="bx--table-header-label">promotion</span>
                      </th>
                      <th>
                        <span className="bx--table-header-label">clickthrough</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>
                          <pre lang="json">
                            <span className="hljs-string">
                              {[`"yeti_tocayo"`, `"google_home_hub"`, `"apple_iphone_xr"`, ``][x]}
                            </span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre lang="json">
                            <span className="hljs-literal">
                              {[`0.00129`, `0.03124`, `0.09152`, ``][x]}
                            </span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>
                          <pre lang="json">
                            <span className="hljs-string">
                              {
                                [
                                  `"bmw_530i_sedan"`,
                                  `"audible_free_trial"`,
                                  `"nest_cam_indoor"`,
                                  ``,
                                ][x]
                              }
                            </span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre lang="json">
                            <span className="hljs-literal">
                              {[`0.01857`, `0.00131`, `0.07155`, ``][x]}
                            </span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
      </div>
    );
  }
}
