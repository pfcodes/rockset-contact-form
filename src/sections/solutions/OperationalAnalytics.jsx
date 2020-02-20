import React from 'react';
import styled from 'styled-components';
import { SectionHeader, SectionSubHeader, SectionMargins } from '../common/common';

const Wrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(0deg, #fafafa, #fafafa), #9737ab;
  @media (min-width: 1024px) {
    background: linear-gradient(0deg, #fafafa, #fafafa), #9737ab;
    background-size: contain;
    padding-top: 80px;
  }
`;

const Space = styled.div`
  height: ${props => props.mobileHeight || props.height};
  width: ${props => props.mobileWidth || props.width};
  @media (min-width: 1024px) {
    height: ${props => props.height || 0};
    min-height: ${props => props.height || 0};
    width: ${props => props.width || 0};
    min-width: ${props => props.width || 0};
  }
`;

const ScreenshotWrapper = styled.div``;
const ScreenshotHolder = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? 'column-reverse' : 'column')};
  margin-top: 50px;
  margin-bottom: 50px;
  @media (min-width: 1024px) {
    height: 300px;
    flex-direction: row;
    margin-left: ${props => (props.moveLeft ? '-30px' : 'auto')};
  }
`;
const ScreenshotTextHolder = styled.div`
  flex-direction: row;
  @media (min-width: 1024px) {
    height: 300px;
    padding-top: 20px;
  }
`;
const ScreenshotHeaderText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 120%;
  font-family: Source Sans Pro;
  /* or 31px */

  color: #333333;
  @media (min-width: 1024px) {
    width: 471px;
    height: 31px;
  }
`;
const ScreenshotBodyText = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150.9%;
  /* or 24px */
  color: #333333;
  @media (min-width: 1024px) {
    width: 455px;
    height: 171px;
    font-size: 16px;
    line-height: 150.9%;
  }
`;
const ScreenShotImg = styled.img`
  max-width: 100%;
  object-fit: cover;
  border: 1px solid #fafafa;
  box-sizing: border-box;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.2);
  @media (min-width: 1280px) {
    max-width: 450px;
  }
`;

export default class OperationalAnalytics extends React.Component {
  render() {
    return (
      <>
        <Wrapper>
          <SectionMargins>
            <SectionHeader>{this.props.title}</SectionHeader>

            <SectionSubHeader>{this.props.subtitle}</SectionSubHeader>

            <ScreenshotWrapper>
              <ScreenshotHolder>
                <Space width="50px" />
                <ScreenshotTextHolder>
                  <ScreenshotHeaderText>{this.props.section1Header}</ScreenshotHeaderText>
                  <Space height="20px" />
                  <ScreenshotBodyText>{this.props.section1Text}</ScreenshotBodyText>
                </ScreenshotTextHolder>
                <Space width="100px" height="50px" />
                <div>
                  <ScreenShotImg src={this.props.section1Image} />
                </div>
              </ScreenshotHolder>
              <ScreenshotHolder moveLeft={true} reverse={true}>
                <div>
                  <ScreenShotImg src={this.props.section2Image} />
                </div>
                <Space width="100px" height="50px" />
                <ScreenshotTextHolder>
                  <ScreenshotHeaderText>{this.props.section2Header}</ScreenshotHeaderText>
                  <Space height="30px" />
                  <ScreenshotBodyText>{this.props.section2Text}</ScreenshotBodyText>
                </ScreenshotTextHolder>
              </ScreenshotHolder>
              <ScreenshotHolder>
                <Space width="50px" />
                <ScreenshotTextHolder>
                  <ScreenshotHeaderText>{this.props.section3Header}</ScreenshotHeaderText>
                  <Space height="20px" />
                  <ScreenshotBodyText>{this.props.section3Text}</ScreenshotBodyText>
                </ScreenshotTextHolder>
                <Space width="100px" height="50px" />
                <div>
                  <ScreenShotImg src={this.props.section3Image} />
                </div>
              </ScreenshotHolder>
            </ScreenshotWrapper>

            <Space height="30px" />
          </SectionMargins>
        </Wrapper>
      </>
    );
  }
}
