import * as React from 'react';
import styled from 'styled-components';

import InstanceChargesIcon from '../../images/instance_charges.svg';
import IngestChargesIcon from '../../images/ingest_charges.svg';
import TotalBillIcon from '../../images/total_bill.svg';

import { SectionWrapper, SectionMargins, SectionHeader } from '../common/common';

const CardsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #fafafa;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 8px 0;
  padding: 20px;
  text-align: center;
  width: 98%;
  max-width: 480px;

  @media (min-width: 768px) {
    min-width: 480px;
    width: 48%;
  }

  @media (min-width: 1024px) {
    min-width: 480px;
    width: 48%;
  }
`;

const CardHeader = styled.div`
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  margin: 16px 0;

  @media (min-width: 768px) {
    font-size: 20px;
    margin: 20px 0;
  }

  @media (min-width: 1024px) {
    font-size: 22px;
    margin: 24px 0;
  }
`;

const CardDescription = styled.div`
  font-size: 14px;
  text-align: left;
`;

const CardDivider = styled.div`
  border: 1px solid #dfdfdf;
  width: 100%;
  margin: 24px 0;
`;

const BreakdownContainer = styled.div`
  display: flex;
  margin: 0 0 24px 0;
`;

const BreakdownLeft = styled.img`
  width: 30px;
  margin: 0 24px;
`;

const BreakdownRight = styled.div`
  text-align: left;
`;

const BreakdownHeader = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #9737ab;
`;

const BreakdownCalculation = styled.div`
  font-size: 14px;
`;

const Value = styled.div`
  font-weight: bold;
  display: inline-block;
`;

const FinalValue = styled.div`
  color: #9737ab;
  font-weight: bold;
  display: inline-block;
`;

export const Examples = props => (
  <SectionWrapper dark={props.dark}>
    <SectionMargins>
      <SectionHeader>Pricing Examples</SectionHeader>
      <CardsContainer>
        <Card>
          <CardHeader>Example 1</CardHeader>

          <CardDescription>
            In September, you build a dashboard for your operations team to monitor ecommerce
            orders. You select the c4 instance type and ingest 10 GB of Kafka data daily. You retain
            the data for 7 days and select 2 replicas for availability. <br />
          </CardDescription>

          <CardDivider />

          <BreakdownContainer>
            <BreakdownLeft src={IngestChargesIcon} />
            <BreakdownRight>
              <BreakdownHeader>Ingest Charges</BreakdownHeader>
              <BreakdownCalculation>
                No initial load.
                <br />
                <Value>$0.10</Value>/GB x <Value>10</Value> GB/day x <Value>30</Value> day/mo ={' '}
                <Value>$30.00</Value>/mo
              </BreakdownCalculation>
            </BreakdownRight>
          </BreakdownContainer>

          <BreakdownContainer>
            <BreakdownLeft src={InstanceChargesIcon} />
            <BreakdownRight>
              <BreakdownHeader>Instance Charges</BreakdownHeader>
              <BreakdownCalculation>
                <Value>$0.00209</Value>/hr/GB/replica x <Value>70</Value> GB x <Value>2</Value>{' '}
                replicas = <Value>$0.2926</Value>/hr
              </BreakdownCalculation>
            </BreakdownRight>
          </BreakdownContainer>

          <BreakdownContainer>
            <BreakdownLeft src={TotalBillIcon} />
            <BreakdownRight>
              <BreakdownHeader>Total Bill for September</BreakdownHeader>
              <BreakdownCalculation>
                <Value>$0.2926</Value>/hr x <Value>720</Value> hrs + $<Value>30.00</Value> ={' '}
                <FinalValue>$240.67</FinalValue>
              </BreakdownCalculation>
            </BreakdownRight>
          </BreakdownContainer>
        </Card>
        <Card>
          <CardHeader>Example 2</CardHeader>

          <CardDescription>
            In September, you build an API for your game developers to analyze user data from
            DynamoDB. Your DynamoDB table size is 200GB and ~1% of rows are updated every month.
            After 15 days, you no longer need the table and delete it. You select the c36 instance
            type with 2 replicas for availability.
          </CardDescription>

          <CardDivider />

          <BreakdownContainer>
            <BreakdownLeft src={IngestChargesIcon} />
            <BreakdownRight>
              <BreakdownHeader>Ingest Charges</BreakdownHeader>
              <BreakdownCalculation>
                One-time initial load: <Value>$0.10</Value>/GB x <Value>200</Value> GB ={' '}
                <Value>$20.00</Value>
                <br />
                Streaming updates: <Value>$0.10</Value>/GB x <Value>2</Value> GB/mo ={' '}
                <Value>$0.20</Value>/mo
              </BreakdownCalculation>
            </BreakdownRight>
          </BreakdownContainer>

          <BreakdownContainer>
            <BreakdownLeft src={InstanceChargesIcon} />
            <BreakdownRight>
              <BreakdownHeader>Instance Charges</BreakdownHeader>
              <BreakdownCalculation>
                <Value>$0.01150</Value>/hr/GB/replica x <Value>200</Value> GB x <Value>2</Value>{' '}
                replicas = <Value>$4.60</Value>/hr
              </BreakdownCalculation>
            </BreakdownRight>
          </BreakdownContainer>

          <BreakdownContainer>
            <BreakdownLeft src={TotalBillIcon} />
            <BreakdownRight>
              <BreakdownHeader>Total Bill for September:</BreakdownHeader>
              <BreakdownCalculation>
                <Value>$4.60</Value>/hr x <Value>360</Value> hrs + <Value>$20.00</Value> +{' '}
                <Value>$0.20</Value>/mo x <Value>0.5</Value> mo = <FinalValue>$1,676.10</FinalValue>
              </BreakdownCalculation>
            </BreakdownRight>
          </BreakdownContainer>
        </Card>
      </CardsContainer>
    </SectionMargins>
  </SectionWrapper>
);
