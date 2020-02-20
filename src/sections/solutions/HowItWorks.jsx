import React from 'react';
import styled from 'styled-components';
import { SectionHeader, SectionSubHeader, SectionMargins } from '../common/common';

const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: white;
  @media (min-width: 1024px) {
    background: white;
    background-size: contain;
    padding-top: 80px;
  }
`;

const ScreenShotImg = styled.img`
  margin-top: 0px;
  @media (min-width: 1024px) {
    margin-top: 20px;
  }
`;

const Mobile = styled.div`
  display: block;
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

export default class HowItWorks extends React.Component {
  render() {
    return (
      <>
        <Wrapper>
          <SectionMargins>
            <SectionHeader>How It Works</SectionHeader>
            <SectionSubHeader>{this.props.subtitle}</SectionSubHeader>
            <Desktop>
              <ScreenShotImg src={this.props.imgDesk} />
            </Desktop>
            <Mobile>
              <ScreenShotImg src={this.props.imgMobile} />
            </Mobile>
          </SectionMargins>
        </Wrapper>
      </>
    );
  }
}
