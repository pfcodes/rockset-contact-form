import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import SEO from '../components/seo';
import FormAccess from '../components/form-access';
import { Customers } from '../sections/homepage/Customers';
import { OperationalAnalytics } from '../sections/homepage/OperationalAnalytics';
import { HowItWorks } from '../sections/homepage/HowItWorks';
import { Demo } from '../sections/homepage/Demo';
import { LearnMore } from '../sections/homepage/LearnMore';
import { SqlSolutions } from '../sections/homepage/SqlSolutions';
import { WhyRockset } from '../sections/homepage/WhyRockset';
import arrow from '../images/arrow.svg';

const styles = require('./index.module.css');

const WebsiteTitle = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  text-align: center;

  font-size: 32px;
  line-height: 35px;

  animation: 1s ease 0s normal forwards 1 fadein;
  animation-delay: 0s;
  opacity: 0;

  color: #ffffff;

  padding-top: 132px;
  margin-bottom: 29px;
  margin-left: 45px;
  margin-right: 45px;

  // Tablet
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 40px;

    padding-top: 239px;
    margin-bottom: 29px;
  }

  // Fullscreen
  @media (min-width: 990px) {
    font-size: 54px;
    line-height: 59px;

    padding-top: 231px;
    margin-bottom: 35px;
  }
`;

const WebsiteSubTitle = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  text-align: center;

  font-size: 20px;
  line-height: 25px;

  animation: 1s ease 0s normal forwards 1 fadein;
  animation-delay: 1s;
  opacity: 0;

  color: #ffffff;

  margin-left: 45px;
  margin-right: 45px;

  // Tablet
  @media (min-width: 768px) {
    font-size: 22px;
    line-height: 28px;
  }

  // Fullscreen
  @media (min-width: 990px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const HeaderBanner = styled.div`
  height: 604px;
  background: linear-gradient(
      277.26deg,
      rgba(52, 50, 124, 0.9) 0.65%,
      #6b3596 54.6%,
      #9737ab 98.37%
    ),
    url('/images/homebg.png');
  background-size: auto;
  background-repeat: round;

  // Tablet
  @media (min-width: 768px) {
    height: 604px;
  }

  // Fullscreen
  @media (min-width: 990px) {
    height: 592px;
    background-size: contain;
    background-repeat: round;
  }
`;

const SubHeaderBanner = styled.div`
  background: #f3f3f3;
  padding-bottom: 16px;
  transition: height 0.2s ease-out;
  text-align: center;
  a {
    display: block;
  }

  @keyframes fade2 {
    from {
    }

    to {
      opacity: 1;
    }
  }

  @media (min-width: 540px) {
  }

  // Tablet
  @media (min-width: 768px) {
    a {
      display: none;
    }
    // :hover{
    /* height: 91px; */
    a {
      display: block;
      animation: 0.5s ease 0s normal forwards 1 fade2;
      opacity: 0;
    }
    // }
  }

  // Fullscreen
  @media (min-width: 990px) {
    /* height: 72px; */
    // :hover {
    /* height: 106px; */
    // }
  }
`;

const VideoLabel = styled.span`
  color: #9737ab;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

const VideoText = styled.span`
  font-size: 20px;
  color: #333333;
`;

const VideoLink = styled.a`
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #9737ab;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: #70267f;
  }
`;

const VideoTextWrapper = styled.div`
  text-align: center;
  padding-top: 18px;

  // Tablet
  @media (min-width: 768px) {
    display: inline-block;
  }

  // Fullscreen
  @media (min-width: 990px) {
    padding-top: 25px;
  }
`;

const VideoLinkWrapper = styled.div`
  text-align: center;
  padding-top: 5px;

  // Tablet
  @media (min-width: 768px) {
    padding-top: 7px;
    display: inline-block;
    margin-left: 10px;
  }

  // Fullscreen
  @media (min-width: 990px) {
    padding-top: 10px;
  }
`;

const FormWrapper = styled.div`
  overflow-x: hidden;
  animation: 1s ease 0s normal forwards 1 fadein;
  animation-delay: 2s;
  opacity: 0;
  button {
    transition: background-color 200ms ease, border 200ms ease;
    :hover {
      background: #2f3338;
    }
  }

  @keyframes fadein {
    from {
      transform: translate3d(0, 40px, 0);
    }

    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
`;

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: false,
    };
  }

  render() {
    return (
      <>
        <SEO
          title="Rockset: The Real-Time Database in the Cloud"
          titleTemplate="%s"
          keywords={[`rockset`, `data`, `apps`]}
          description={
            'Rockset is the real-time database in the cloud. Rockset allows you to create live dashboards and real-time data APIs on DynamoDB, Kafka, S3 and more.'
          }
        />
        {this.state.video && (
          <div>
            <div
              style={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                background: 'rgb(0, 0, 0, 0.7)',
                zIndex: 1001,
                cursor: 'pointer',
              }}
              onClick={() => {
                this.setState({ video: false });
              }}
            />
            <div className={styles.videoFrame}>
              <div className={styles.videoResponsive}>
                {this.state.video === 'strata' && (
                  <iframe
                    src="https://www.youtube.com/embed/XsDXAecUIb4?rel=0&controls=1&autoplay=0&mute=0&start=0"
                    frameBorder={0}
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                      pointerEvents: 'auto',
                    }}
                  />
                )}
                {this.state.video === 'demo' && (
                  <iframe
                    src="https://www.youtube.com/embed/KBb10Ttxjcc?rel=0&controls=1&autoplay=0&mute=0&start=0"
                    frameBorder={0}
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%',
                      pointerEvents: 'auto',
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        )}
        <Header activePage="home" />
        <div className="homepage">
          <HeaderBanner>
            <div>
              <WebsiteTitle>The Real-Time Database in the Cloud</WebsiteTitle>
              <WebsiteSubTitle>
                Fast queries on event streams and database change streams
              </WebsiteSubTitle>
            </div>
            <FormWrapper>
              <FormAccess code="home-top" />
            </FormWrapper>
          </HeaderBanner>
          <SubHeaderBanner>
            <div>
              <VideoTextWrapper>
                <VideoLabel>Online talk with Confluent: </VideoLabel>
                <VideoText>
                  Bosch Power Tools Enables Real-time Analytics on IoT Event Streams, Feb 27
                </VideoText>
              </VideoTextWrapper>
              <VideoLinkWrapper>
                <VideoLink
                  href="https://events.confluent.io/online-talks/bosch-power-toolse-nables-real-time-analytics-on-iot-event-streams?utm_source=rockset&utm_medium=partner-referral&utm_campaign=online-talk"
                  target="_blank"
                >
                  REGISTER NOW
                  <img style={{ width: 9, verticalAlign: 'unset', marginLeft: 4 }} src={arrow} />
                </VideoLink>
              </VideoLinkWrapper>
            </div>
          </SubHeaderBanner>
          <Demo playVideo={() => this.setState({ video: 'demo' })} />
          <SqlSolutions />
          <HowItWorks />
          <WhyRockset />
          <OperationalAnalytics />
          <Customers />
          <LearnMore />
        </div>
      </>
    );
  }
}

export default HomePage;
