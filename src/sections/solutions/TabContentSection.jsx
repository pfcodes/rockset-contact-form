import * as React from 'react';
import styled from 'styled-components';
import arrowRight from '../../images/arrow.svg';
import $ from 'jquery';
import hljs from 'highlightjs';

const TabSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: auto;
  margin-bottom: 20px;
`;

const TabTile = styled.div`
  width: 140px;
  height: 100px;
  border: 1px solid #fafafa;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  text-align: center;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: white;

  img {
    max-width: 90px;
    max-height: 60px;
  }

  :hover {
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.2);
  }
  border-top: ${props => (props.active ? '5px solid #9737AB' : '1px solid #fafafa')};
  padding-top: ${props => (props.active ? '1px' : '5px')};
`;

const ContentSection = styled.div`
  display: flex;
  align-items: flex-start;
  border: 1px solid #fafafa;
  box-sizing: border-box;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: white;
  max-width: 900px;
  margin: auto;
  padding: 24px;

  @media (min-width: 768px) {
    padding: 36px;
  }

  h3 {
    margin-top: 0px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 120%;
    /* identical to box height, or 24px */

    color: #333333;
  }

  code {
    border: 1px solid #dadfe2;
    border-radius: 3px;
    margin-bottom: 12px;
    margin-left: 0px;
    @media (min-width: 768px) {
      margin-left: 10px;
    }
  }
`;

const LearnMore = styled.a`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9737ab;
  text-decoration: none;
  cursor: pointer;

  :hover {
    text-decoration: none;
    color: #9737ab;
  }
`;

const Mobile = styled.div`
  display: block;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Desktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export class TabContentSection extends React.Component {
  state = { activeTab: 0 };
  componentDidMount() {
    this.componentDidUpdate();
  }

  componentDidUpdate() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

  render() {
    const { title, description, link, content } = this.props.content[this.state.activeTab];
    return (
      <div>
        <TabSection>
          {this.props.content.map(({ image, title, description, link, content }, index) => (
            <TabTile
              onClick={() => this.setState({ activeTab: index })}
              active={index === this.state.activeTab}
            >
              <img src={image} />
            </TabTile>
          ))}
        </TabSection>
        <ContentSection>
          <div style={{ maxWidth: '100%' }}>
            <h3>{title}</h3>
            <Mobile>{content}</Mobile>
            <p>{description}</p>
            <LearnMore target="_blank" href={link}>
              Learn more
              <img style={{ width: 9, verticalAlign: 'unset', marginLeft: 4 }} src={arrowRight} />
            </LearnMore>
          </div>
          <Desktop>{content}</Desktop>
        </ContentSection>
      </div>
    );
  }
}
