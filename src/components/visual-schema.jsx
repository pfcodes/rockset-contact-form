import React from 'react';

export default class VisualSchema extends React.Component {
  render() {
    return (
      <div style={{ position: 'relative', width: '100%' }}>
        <div
          style={{
            position: 'absolute',
            left: '78%',
            top: '92%',
            height: '56%',
            borderTop: '8px dashed #ff00ff',
            borderRight: '8px solid transparent',
            borderLeft: '8px solid transparent',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '47%',
            width: 'calc(78% + 9px)',
            height: '44%',
            borderTop: '2px dashed #ff00ff',
            borderRight: '2px dashed #ff00ff',
          }}
        />
        <div style={{ width: '60%', marginRight: '5%', display: 'inline-block' }}>
          <div className="bx--tile" style={{ marginBottom: '20px' }}>
            <code>
              <pre style={{ overflow: 'hidden' }}>
                {`{"user_id": `}
                <span className="hljs-string">"caligralist"</span>
                {`, ...},
{"user_id": `}
                <span className="hljs-literal">none</span>
                {`, ...},
{"user_id": `}
                <span className="hljs-string">"hacker123"</span>
                {`, ...},
{"user_id": `}
                <span className="hljs-literal">413452322</span>
                {`, ...},
...`}
              </pre>
            </code>
          </div>
        </div>
        <div
          style={{
            width: '80%',
            display: 'inline-block',
            verticalAlign: 'bottom',
            float: 'right',
            maxWidth: '310px',
          }}
        >
          <div className="bx--tile">
            <code>
              <pre style={{ overflow: 'hidden' }}>
                {`$ `}
                <span className="hljs-keyword">DESCRIBE</span>
                {` typing_system_demo
FIELD         OCCURRENCES   TYPE
[`}
                <span className="hljs-string">'user_id'</span>
                {`]   4232 / 8312   string
[`}
                <span className="hljs-string">'user_id'</span>
                {`]   3267 / 8312   int
[`}
                <span className="hljs-string">'user_id'</span>
                {`]    813 / 8312   null_type
[`}
                <span className="hljs-string">'...'</span>
                {`]               ...   ...
`}
              </pre>
            </code>
          </div>
        </div>
      </div>
    );
  }
}
