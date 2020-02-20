import React from 'react';
import { SectionHeader } from '../common/common';
import styled from 'styled-components';
import marketIllustration from '../../images/marketIllustration.svg';

const SectionWrapper = styled.div`
  text-align: center;
  background: #ffffff;
  padding-top: 50px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 990px) {
    padding-top: 100px;
  }
`;

const MarketIllustration = styled.img`
  margin: auto;
  display: block;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const LargeIllustration = styled.img`
  margin: auto;
  margin-top: 50px;
  margin-bottom: 70px;
  display: none;
  max-width: 800px;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Field = styled.div`
  margin-top: 10px;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;

  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #868686;
  @media (min-width: 990px) {
    font-size: 12px;
    margin-top: 24px;
  }
`;

const Value = styled.div`
  font-weight: ${props => (props.secondary ? 400 : 'bold')};
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  color: #333333;
  @media (min-width: 990px) {
    font-size: 16px;
  }
`;

const DescriptionCard = styled.div`
  margin: 0px 16px;
  width: calc(100% - 32px);
  background: #ffffff;
  border: 1px solid #fafafa;
  box-sizing: border-box;
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border-top: ${props => (props.secondary ? '1px solid #FAFAFA' : '4px solid #9737AB')};
  padding-bottom: 16px;
  display: ${props => (props.secondary ? 'none' : 'block')};
  margin-top: ${props => (props.secondary ? '20px' : '0px')};
  margin-bottom: ${props => (props.secondary ? '10px' : '0px')};
  max-width: 400px;

  position: relative;
  top: 0;
  transition: top ease 0.2s;
  :hover {
    top: -5px;
  }

  @media (min-width: 768px) {
    min-width: 200px;
    max-width: 280px;
    display: inline-block;
  }
`;

const CardSection = styled.div`
  margin-top: -220px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    margin-top: -270px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  padding: 18px;
  border-bottom: 1px solid #dfdfdf;
  text-align: center;
  color: ${props => (props.secondary ? '#868686' : '#111111')};
  margin-bottom: 16px;
  @media (min-width: 768px) {
    font-size: ${props => (props.secondary ? '18px' : '20px')};
  }
`;

export const SectionSubHeader = styled.p`
  font-size: 14px;
  line-height: 21px;
  text-align: left;
  max-width: 800px;
  margin: 20px 0px;

  // Tablet
  @media (min-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 50px;
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const OperationalAnalytics = () => {
  return (
    <>
      <SectionWrapper>
        <SectionHeader>Real-Time Analytics in the Cloud</SectionHeader>
        <SectionSubHeader>
          Rockset is designed for real-time analytics, which demands new capabilities that are not
          possible with data warehouses or transactional databases.
          <br />
          <br />
          Real-time analytics means analyzing your data to trigger actions as events occur. It
          requires querying incoming data in real time, when ETL pipelines would take too long,
          which precludes the use of data warehouses. It involves complex analytical queries on up
          to hundreds of TBs of data, for which transactional databases are not well suited.
        </SectionSubHeader>
        <MarketIllustration src="/images/illustrationLarge-0.svg" />
        <LargeIllustration src="/images/illustrationLarge-0.svg" />
      </SectionWrapper>
    </>
  );
};
