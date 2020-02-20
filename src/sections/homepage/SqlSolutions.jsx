import React from 'react';
import styled from 'styled-components';

import { SectionHeader, SectionSubHeader } from '../common/common';

import Dynamo from '../../images/DynamoDB.png';
import Kafka from '../../images/kafka-logo-wide.png';
import Lakes from '../../images/s3-gcs-lakes.png';
import arrow from '../../images/arrow.svg';

const Wrapper = styled.div`
  background-color: #fafafa;
  padding-bottom: 15px;

  @media (min-width: 1024px) {
    padding-top: 40px;
  }
`;

export const SectionMargins = styled.div`
  background-color: #fafafa;

  padding: 24px;
  width: 100%;

  // Tablet
  @media (min-width: 768px) {
    width: 768px;
    margin: 0px auto;
  }

  // Fullscreen
  @media (min-width: 990px) {
  }

  // Fullscreen
  @media (min-width: 1024px) {
    width: 1024px;
    margin: 0px auto;
    padding: 0px 0px 30px 0px;
  }
`;

const Space = styled.div`
  height: ${props => props.mobileHeight || props.height};
  width: ${props => props.mobileWidth || props.width};
  @media (min-width: 1024px) {
    height: ${props => props.height || 0};
    width: ${props => props.width || 0};
  }
`;

export const TrioWrapper = styled.div`
  margin-top: 15px;

  display: flex;
  flex-direction: column;

  align-items: center;
  @media (min-width: 1024px) {
    margin-top: 40px;
    flex-direction: row;
    align-items: flex-start;
  }
`;

const TrioItemShadow = styled.div`
  position: relative;

  flex: 1;
  display: flex;
  flex-direction: column;

  padding-right: 0;
  padding-left: 0;

  border: 1px solid #fafafa;
  border-top: 4px solid #9737ab;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: white;
  /* drop shadow */

  height: 515px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  /* padding: 20px; */
  text-align: center;
  margin: 20px 0px 20px 0px;
  max-width: 300px;
  @media (min-width: 1024px) {
    margin: 0px 20px 0px 20px;
  }
`;

export const TrioHeader = styled.div`
  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 64px;
`;

export const TrioImage = styled.img`
  height: 60px;
`;

export const TrioHeaderText = styled.div`
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const TrioBody = styled.div`
  height: 250px;

  padding-left: 20px;
  padding-right: 20px;

  font-size: 14px;
  line-height: 21px;
  margin-bottom: 16px;
  text-align: left !important;
  @media (min-width: 1024px) {
    padding-top: 25px;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150.9%;
    /* or 24px */

    border-top: 1px solid #dfdfdf;
  }
`;

const BulletSection = styled.ul`
  list-style-type: disc !important;
  text-align: left !important;
  font-size: 14px !important;

  .li {
    font-size: 14px !important;
  }
`;

const Bullet = styled.li`
  font-size: 14px !important;
  margin-bottom: 0px !important;
  padding-left: 0px !important;

  @media (min-width: 1024px) {
    font-size: 16px !important;
  }
`;

const VideoLink = styled.a`
  padding: 20px;
  position: absolute;
  bottom: 0;
  width: 100%;

  border-top: 1px solid #dfdfdf;

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

export class SqlSolutions extends React.Component {
  render() {
    return (
      <Wrapper>
        <SectionMargins>
          <SectionHeader>Fast Answers on Fresh Data</SectionHeader>
          {/* <Space height="30px" /> */}
          <TrioWrapper>
            <TrioItemShadow>
              <TrioHeader>
                <TrioImage src={Dynamo} />
                <Space height="20px" />
                <TrioHeaderText>Real-Time SQL on DynamoDB</TrioHeaderText>
              </TrioHeader>
              <TrioBody>
                Run complex SQL to analyze data from DynamoDB change streams without having to
                specify a schema.
                <Space height="15px" />
                <BulletSection>
                  <Bullet>Embedded analytics</Bullet>
                  <Bullet>SaaS application features</Bullet>
                  <Bullet>Recommendation engines</Bullet>
                </BulletSection>
              </TrioBody>
              <VideoLink href="/sql-on-dynamodb" target="_blank">
                VIEW SOLUTION
                <img style={{ width: 9, verticalAlign: 'unset', marginLeft: 4 }} src={arrow} />
              </VideoLink>
            </TrioItemShadow>

            <TrioItemShadow>
              <TrioHeader>
                <TrioImage src={Kafka} />
                <Space height="20px" />
                <TrioHeaderText>Real-Time SQL on Kafka</TrioHeaderText>
              </TrioHeader>
              <TrioBody>
                Join event streams from Kafka with data in other systems to act on live data.
                <Space height="15px" />
                <BulletSection>
                  <Bullet>Operational dashboards</Bullet>
                  <Bullet>IoT applications</Bullet>
                  <Bullet>Clickstream analysis</Bullet>
                </BulletSection>
              </TrioBody>
              <VideoLink href="/sql-on-kafka" target="_blank">
                VIEW SOLUTION
                <img style={{ width: 9, verticalAlign: 'unset', marginLeft: 4 }} src={arrow} />
              </VideoLink>
            </TrioItemShadow>

            <TrioItemShadow>
              <TrioHeader>
                <TrioImage src={Lakes} />
                <Space height="20px" />
                <TrioHeaderText>Real-Time SQL on S3 and GCS</TrioHeaderText>
              </TrioHeader>
              <TrioBody>
                Run SQL analytics on semi- structured data in S3 and GCS. Query new data as it lands
                in your data lake.
                <Space height="15px" />
                <BulletSection>
                  <Bullet>Live dashboards</Bullet>
                  <Bullet>3rd-party data sets</Bullet>
                  <Bullet>Analytics on transactional data from operational DBs</Bullet>
                </BulletSection>
              </TrioBody>
              <VideoLink href="/sql-on-data-lake" target="_blank">
                VIEW SOLUTION
                <img style={{ width: 9, verticalAlign: 'unset', marginLeft: 4 }} src={arrow} />
              </VideoLink>
            </TrioItemShadow>
          </TrioWrapper>
        </SectionMargins>
      </Wrapper>
    );
  }
}
