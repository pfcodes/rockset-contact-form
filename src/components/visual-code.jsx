import React from 'react';
import $ from 'jquery';
import hljs from 'highlightjs';
import snippets from './visual-code-snippets';
import Streams from '../images/Streams@2x.png';
import Lakes from '../images/Lakes@2x.png';

export default class VisualCode extends React.Component {
  state = {
    snippets: snippets,
    activeLang: snippets[0],
    activeData: 'streaming',
  };

  componentDidMount() {
    if (this.props.type === 'build') {
      // remove CLI for build
      this.setState({
        activeLang: snippets[1],
        snippets: snippets.slice(1),
      });
    }
  }

  componentDidUpdate() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

  render() {
    if (
      this.props.type === 'toggleData' ||
      this.props.type === 'streaming' ||
      this.props.type === 'static'
    ) {
      let type = this.props.type;
      if (type === 'toggleData') {
        type = this.state.activeData;
      }
      return (
        <div>
          {this.props.type === 'toggleData' && (
            <div>
              <button
                style={{
                  border: '1px solid #ececec',
                  background: type === 'streaming' ? '#ececec' : '#fff',
                  outline: 'none',
                }}
                onClick={() => {
                  this.setState({ activeData: 'streaming' });
                }}
              >
                Data Stream
              </button>
              <button
                style={{
                  border: '1px solid #ececec',
                  background: type === 'static' ? '#ececec' : '#fff',
                  outline: 'none',
                }}
                onClick={() => {
                  this.setState({ activeData: 'static' });
                }}
              >
                Data Lake
              </button>
            </div>
          )}
          <div
            className="bx--tile json-sample"
            style={{
              backgroundColor: 'white',
              height: '100%',
              marginTop: '0px',
              padding: '0px',
              borderTop: '4px solid #b75dda',
            }}
          >
            <div style={{ borderBottom: '1px solid #ececec' }}>
              <span style={{ width: '150px', textAlign: 'center' }}>
                {type === 'streaming' ? (
                  <img
                    style={{ width: '80px', height: '80px', margin: '10px 15px' }}
                    src={Streams}
                  />
                ) : (
                  <img style={{ width: '80px', height: '80px', margin: '10px 15px' }} src={Lakes} />
                )}
              </span>
              <span
                style={{
                  position: 'absolute',
                  paddingLeft: '20px',
                  top: '15px',
                  borderLeft: '1px solid #ececec',
                }}
              >
                {this.props.type !== 'toggleData' && (
                  <p
                    style={{ margin: '0px', padding: '0px', fontSize: '18px', fontWeight: 'bold' }}
                  >
                    {type === 'streaming' ? 'Data Stream' : 'Data Lake'}
                  </p>
                )}
                <p style={{ margin: '0px', padding: '0px', fontSize: '14px', color: '#b75dda' }}>
                  {type === 'streaming' ? 'Clickstream' : 'Users'}
                </p>
                <p style={{ margin: '0px', padding: '0px', fontSize: '14px' }}>
                  {type === 'streaming'
                    ? 'kinesis://rs-website-clickstream'
                    : 's3://rs-users-table'}
                </p>
              </span>
              <span
                style={{
                  position: 'absolute',
                  right: '20px',
                  top: '105px',
                  color: '#ececec',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                SAMPLE DOC
              </span>
            </div>
            <div style={{ padding: '8px', overflowX: 'scroll', overflowY: 'hidden' }}>
              {type === 'streaming' ? (
                <code>
                  <pre>
                    {`[{
  "user_id": `}
                    <span className="hljs-literal">373</span>
                    {`,
  "promotion": `}
                    <span className="hljs-string">"iphone_xr"</span>
                    {`,
  "converted": `}
                    <span className="hljs-literal">1</span>
                    {`,
  "timestamp": `}
                    <span className="hljs-literal">1545567354</span>
                    {`,
  "geo_location": {
    "latitude": `}
                    <span className="hljs-literal">19.039436</span>
                    {`,
    "longitude": `}
                    <span className="hljs-literal">-64.164404</span>
                    {`,
  }
}, ...]`}
                  </pre>
                </code>
              ) : null}
              {type === 'static' ? (
                <table>
                  <thead>
                    <tr>
                      <th>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-keyword">id</span>
                          </pre>
                        </code>
                      </th>
                      <th>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-keyword">city</span>
                          </pre>
                        </code>
                      </th>
                      <th>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-keyword">email</span>
                          </pre>
                        </code>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-literal">924</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"San Diego"</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"phelpsgross@zenolux.com"</span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-literal">535</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"New York"</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"yatesdiaz@daido.com"</span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-literal">435</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"San Francisco"</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"mejiasingleton@sequitur.com"</span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-literal">680</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"Boston"</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"tillmanmckenzie@overfork.com"</span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-literal">806</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"Los Angeles"</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"rochagentry@rockabye.com"</span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-literal">976</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"New York"</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"holliemcknight@pivitol.com"</span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-literal">492</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"San Francisco"</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"birdtran@klugger.com"</span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-literal">225</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"San Francisco"</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"figueroabentley@eyeris.com"</span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-literal">590</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"Chicago"</span>
                          </pre>
                        </code>
                      </td>
                      <td>
                        <code>
                          <pre style={{ paddingRight: '16px' }}>
                            <span className="hljs-string">"burkecunningham@magnemo.com"</span>
                          </pre>
                        </code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : null}
            </div>
          </div>
        </div>
      );
    }
    let code;
    if (this.props.type === 'toggleCode') {
      code =
        this.state.activeData === 'streaming'
          ? this.state.activeLang.createStreaming
          : this.state.activeLang.createStatic;
    } else if (this.props.type === 'createStreaming') {
      code = this.state.activeLang.createStreaming;
    } else if (this.props.type === 'createStatic') {
      code = this.state.activeLang.createStatic;
    } else if (this.props.type === 'build') {
      code = this.state.activeLang.runQuery;
    }
    return (
      <div>
        {this.props.type === 'toggleCode' && (
          <div>
            <button
              style={{
                border: '1px solid #ececec',
                background: this.state.activeData === 'streaming' ? '#ececec' : '#fff',
                outline: 'none',
              }}
              onClick={() => {
                this.setState({ activeData: 'streaming' });
              }}
            >
              Data Stream
            </button>
            <button
              style={{
                border: '1px solid #ececec',
                background: this.state.activeData === 'static' ? '#ececec' : '#fff',
                outline: 'none',
              }}
              onClick={() => {
                this.setState({ activeData: 'static' });
              }}
            >
              Data Lake
            </button>
          </div>
        )}
        <div
          className="bx--tile code-section"
          style={{
            paddingTop: '0px',
            backgroundColor: 'white',
            height: 'calc(100% - 27px)',
            borderTop: '4px solid #b75dda',
          }}
        >
          <div
            style={{
              width: 'calc(100% + 30px)',
              marginLeft: '-15px',
              paddingLeft: '15px',
              borderBottom: '1px solid #ececec',
            }}
          >
            {this.state.snippets.map((lang, i) => {
              let weight = this.state.activeLang.name === lang.name ? 'bold' : '400';
              let backgroundColor = this.state.activeLang.name === lang.name ? '#ececec' : 'white';
              return (
                <button
                  className="code-switch-button"
                  style={{ backgroundColor: backgroundColor, fontWeight: weight }}
                  key={lang.name}
                  onClick={() => this.setState({ activeLang: lang })}
                >
                  {lang.name}
                </button>
              );
            })}
          </div>
          <div
            style={{ paddingTop: '15px', height: this.props.type === 'build' ? '224px' : '212px' }}
          >
            <pre style={{ textAlign: 'left', height: '100%', margin: '0px' }}>
              <code
                style={{
                  height: '100%',
                  backgroundColor: 'white',
                  paddingTop: '0',
                  paddingBottom: '0',
                }}
                className={this.state.activeLang.style}
              >
                {code}
              </code>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}
