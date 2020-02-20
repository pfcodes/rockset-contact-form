import React from 'react';
import {
  SectionMargins,
  SectionHeader,
  DemoSectionContent,
  DemoSectionText,
  DemoSectionVideo,
  VideoLightboxButton,
  VideoLightboxIcon,
  VideoLightboxContainer,
} from '../common/common';
import iconPlay from '../../images/Icon-play-white.png';
import videoBg from '../../images/video.svg';
import styled from 'styled-components';

const DemoTextWrapper = styled.div`
  margin-top: 20px;
`;

const Wrapper = styled.div`
  position: relative;
  :after {
    display: none;
    content: '';
    position: absolute;
    width: 40%;
    height: 100%;
    top: 25%;
    right: 0%;
    z-index: -1;
    background: url('/images/dotsandwaves.svg');
    background-repeat: no-repeat;
    // background-position-x: calc(50% + 440px);
  }
  @media (min-width: 1024px) {
    :after {
      display: block;
    }
    padding-bottom: 80px;
  }
`;

export class Demo extends React.Component {
  render() {
    return (
      <Wrapper>
        <SectionMargins>
          <SectionHeader>The Database for Real-Time Analytics</SectionHeader>

          <DemoSectionContent>
            <DemoSectionText>
              Rockset is a real-time database built for the cloud. It provides fast, full-featured
              SQL on event streams and database change streams from Kafka, Kinesis, DynamoDB, and
              more. Use Rockset as your database for serving data APIs and live dashboards.
            </DemoSectionText>

            <DemoSectionVideo>
              <VideoLightboxContainer>
                <img src={videoBg} />
                <VideoLightboxButton>
                  <VideoLightboxIcon src={iconPlay} onClick={this.props.playVideo} />
                </VideoLightboxButton>
              </VideoLightboxContainer>
            </DemoSectionVideo>
          </DemoSectionContent>
        </SectionMargins>
      </Wrapper>
    );
  }
}
