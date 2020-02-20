import React from 'react';
import { SectionHeader, SectionSubHeader } from '../common/common';
import styled from 'styled-components';

import fynd from '../../images/Fynd.svg';
import coatue from '../../images/coatue.svg';
import full from '../../images/full.svg';
import shiseido from '../../images/shiseido.svg';
import wi2 from '../../images/wi2.svg';
import alpha from '../../images/alpha-lumen.svg';
import decore from '../../images/decore.svg';
import sequoia from '../../images/sequoia.svg';
import standardcognition from '../../images/standardcognition.svg';
import intel from '../../images/intel.svg';

import BalogLarge from '../../images/BalogLarge.svg';
import CoatueLarge from '../../images/CoatueLarge.svg';
import DecoreLarge from '../../images/DecoreLarge.svg';
import FullLarge from '../../images/FullLarge.svg';
import FyndLarge from '../../images/FyndLarge.svg';

import arrowRight from '../../images/arrow.svg';
import arrowLeft from '../../images/arrowLeft.svg';

const SectionWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #fafafa;
  background-image: url('/images/waves.svg');
  background-position: 0px 250px;
  background-repeat: no-repeat;
  background-size: contain;
  @media (min-width: 540px) {
    background-position-y: 200px;
  }

  @media (min-width: 540px) {
    padding-top: 100px;
  }
`;

const CustomerLogosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 800px;
  @media (min-width: 800px) {
    margin-left: calc(50% - 400px);
  }
`;

const CustomerLogoWrapper = styled.div`
  width: 80px;
  height: 80px;

  background: #ffffff;
  border: 1px solid #fafafa;
  box-sizing: border-box;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;

  @media (min-width: 990px) {
    width: 140px;
    height: 140px;
  }

  position: relative;
  .customers--readmore {
    display: none;
    position: absolute;
    bottom: 5px;
    font-weight: 600;
    font-size: 9px;
    line-height: 15px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    color: #9737ab;
    img {
      display: none;
    }
  }

  @media (min-width: 768px) {
    width: 110px;
    height: 110px;
    .customers--readmore {
      font-size: 12px;
      img {
        display: inline-block;
      }
    }
  }

  position: relative;
  top: 0;

  :hover {
    border: 1px solid #9737ab;
    .customers--readmore {
      cursor: pointer;
      display: block;
    }
  }
`;

const LogoImage = styled.img`
  max-width: 60px;
  max-height: 30px;
  @media (min-width: 768px) {
    max-width: 92px;
    max-height: 70px;
  }

  @media (min-width: 990px) {
    max-width: 92px;
    max-height: 100px;
  }
`;

const TestimonialSection = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  padding: 0px 8px;
`;

const TestimonialWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #fafafa;
  box-sizing: border-box;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 21px;
  flex-grow: 1;
  margin: 0px 8px;
  max-width: 620px;

  @media (min-width: 990px) {
    border-top: 5px solid #9737ab;
    min-height: 250px;
  }

  animation: 1s ease 0s normal forwards 1 fade-left;
  opacity: 0;

  @keyframes fade-left {
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  z-index: 2;
  position: relative;
  display: ${props => (props.active ? 'block' : 'none')};
`;

const TestimonialQuote = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

const TestimonialAuthor = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #868686;
  margin: 16px 0px;
`;

const TestimonialLink = styled.a`
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

const TestimonialLogo = styled.img`
  display: none;
  margin-left: 30px;
  margin-right: 30px;
  @media (min-width: 990px) {
    display: block;
  }
`;

const Testimonial = ({ image, quote, author, link, active }) => {
  return (
    <TestimonialWrapper active={active}>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <TestimonialLogo src={image} />
        <div>
          <TestimonialQuote>"{quote}"</TestimonialQuote>
          <TestimonialAuthor>-{author}</TestimonialAuthor>
          <TestimonialLink target="_blank" href={link}>
            Read more
            <img style={{ width: 9, verticalAlign: 'unset', marginLeft: 4 }} src={arrowRight} />
          </TestimonialLink>
        </div>
      </div>
    </TestimonialWrapper>
  );
};

const DotsWrapper = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: ${props => (props.active ? '#9737AB' : '#C4C4C4')};
  border-radius: 4px;
  margin: 4px;
`;

const CustomPadder = styled.div`
  margin-left: 24px;

  @media (min-width: 768px) {
    margin-left: 0px;
  }
`;

export class Customers extends React.Component {
  interval;

  constructor(props) {
    super(props);
    this.state = {
      activeTestimonial: 0,
    };
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.setState({
        activeTestimonial: (this.state.activeTestimonial + 1) % 4,
      });
    }, 7000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <SectionWrapper>
        <SectionHeader>Our Customers </SectionHeader>
        <CustomPadder>
          <SectionSubHeader>
            See how the most innovative companies do more with their data, faster.
          </SectionSubHeader>
        </CustomPadder>
        <CustomerLogosWrapper>
          <CustomerLogoWrapper>
            <LogoImage src={coatue} />
            {/* <a className="customers--readmore" href="https://rockset.com/blog/fynd-e-commerce-portal-responds-to-consumer-behavior-in-real-time/" target="_blank">
              Read More
              <img style={{ width: 9, verticalAlign: 'unset', marginLeft: 4 }} src={arrowRight} />
            </a> */}
          </CustomerLogoWrapper>
          <CustomerLogoWrapper>
            <LogoImage src={fynd} />
            <a
              className="customers--readmore"
              href="https://rockset.com/blog/fynd-e-commerce-portal-responds-to-consumer-behavior-in-real-time/"
              target="_blank"
            >
              Read More
              <img style={{ width: 9, verticalAlign: 'unset', marginLeft: 4 }} src={arrowRight} />
            </a>
          </CustomerLogoWrapper>
          <CustomerLogoWrapper>
            <LogoImage src={full} />
            <a
              className="customers--readmore"
              href="https://rockset.com/blog/full-uses-rockset-with-dynamodb-for-live-dashboard/"
              target="_blank"
            >
              Read More
              <img style={{ width: 9, verticalAlign: 'unset', marginLeft: 4 }} src={arrowRight} />
            </a>
          </CustomerLogoWrapper>
          <CustomerLogoWrapper>
            <LogoImage src={decore} />
            <a
              className="customers--readmore"
              href="https://rockset.com/blog/case-study-decore-uses-rockset-for-search-and-analytics-on-dynamodb/"
              target="_blank"
            >
              Read More
              <img style={{ width: 9, verticalAlign: 'unset', marginLeft: 4 }} src={arrowRight} />
            </a>
          </CustomerLogoWrapper>
          <CustomerLogoWrapper>
            <LogoImage src={alpha} />
            <a
              className="customers--readmore"
              href="https://rockset.com/blog/implementing-a-smart-city-sensor-network-simply-and-efficiently/"
              target="_blank"
            >
              Read More
              <img style={{ width: 9, verticalAlign: 'unset', marginLeft: 4 }} src={arrowRight} />
            </a>
          </CustomerLogoWrapper>
          <CustomerLogoWrapper>
            <LogoImage src={shiseido} />
          </CustomerLogoWrapper>
          <CustomerLogoWrapper>
            <LogoImage src={wi2} />
          </CustomerLogoWrapper>
          <CustomerLogoWrapper>
            <LogoImage src={intel} />
          </CustomerLogoWrapper>
          <CustomerLogoWrapper>
            <LogoImage src={sequoia} />
          </CustomerLogoWrapper>
          <CustomerLogoWrapper>
            <LogoImage src={standardcognition} />
          </CustomerLogoWrapper>
        </CustomerLogosWrapper>
        <TestimonialSection>
          <img
            src={arrowLeft}
            onClick={() => {
              this.setState({
                activeTestimonial: (this.state.activeTestimonial + 3) % 4,
              });
              window.clearInterval(this.interval);
            }}
            style={{ cursor: 'pointer' }}
          />
          {this.state.activeTestimonial === 0 && (
            <Testimonial
              active={this.state.activeTestimonial === 0}
              image={FullLarge}
              quote="Building our dashboard on Rockset was the easiest way to analyze our call data in DynamoDB and get real-time insights on the metrics we care about."
              author="Naresh Talluri, product manager at FULL Creative"
              link="https://rockset.com/blog/full-uses-rockset-with-dynamodb-for-live-dashboard/"
            />
          )}
          {this.state.activeTestimonial === 1 && (
            <Testimonial
              active={this.state.activeTestimonial === 1}
              image={DecoreLarge}
              quote="Queries that were impossible with DynamoDB alone are now completing in milliseconds with Rockset. Anyone running analytics on DynamoDB can get better performance just by hooking up their applications to Rockset and connecting to DynamoDB."
              author="Yenwen Feng, CEO of Decore"
              link="https://rockset.com/blog/case-study-decore-uses-rockset-for-search-and-analytics-on-dynamodb/"
            />
          )}
          {this.state.activeTestimonial === 2 && (
            <Testimonial
              active={this.state.activeTestimonial === 2}
              image={FyndLarge}
              quote="By sending our raw event data directly from Kafka to Rockset, we save a lot of time and energy. We track over 40 metrics in real time and constantly take immediate actions."
              author="Amboj Goyal, Principal Engineer at Fynd"
              link="https://rockset.com/blog/fynd-e-commerce-portal-responds-to-consumer-behavior-in-real-time/"
            />
          )}
          {this.state.activeTestimonial === 3 && (
            <Testimonial
              active={this.state.activeTestimonial === 3}
              image={BalogLarge}
              quote="With Rockset, I don’t have to worry about data being typed or formatted in a way I didn’t anticipate, and I don’t have to modify my code every time the schema changes. Rockset just sucks in all the raw data and makes it accessible using SQL, so it's faster and easier to develop on the data."
              author="Doug Balog, data engineer for a large retailer"
              link="https://rockset.com/blog/the-path-to-better-pollution-forecasting-goes-through-nested-json/"
            />
          )}
          {/* <Testimonial
            active={this.state.activeTestimonial === 4}
            image={CoatueLarge}
            quote="It is time consuming to load the data to multiple systems, individually infer the schema and handle malformed data. Rockset has the potential to free our data scientists to run ad-hoc SQL queries on raw data while minimizing ETL work and maintenance."
            author="Alex Izydorczyk, head of data science at Coatue"
            link=""
          /> */}
          <img
            src={arrowRight}
            onClick={() => {
              this.setState({
                activeTestimonial: (this.state.activeTestimonial + 1) % 4,
              });
              window.clearInterval(this.interval);
            }}
            style={{ cursor: 'pointer' }}
          />
        </TestimonialSection>
        <DotsWrapper>
          <Dot active={this.state.activeTestimonial === 0} />
          <Dot active={this.state.activeTestimonial === 1} />
          <Dot active={this.state.activeTestimonial === 2} />
          <Dot active={this.state.activeTestimonial === 3} />
          {/* <Dot active={this.state.activeTestimonial === 4} /> */}
        </DotsWrapper>
      </SectionWrapper>
    );
  }
}
