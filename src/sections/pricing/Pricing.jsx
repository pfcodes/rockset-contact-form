import * as React from 'react';
import styled from 'styled-components';

import { SectionWrapper, SectionMargins, SectionHeader, getStarted } from '../common/common';

const SectionText = styled.div`
  margin: 16px auto;
  text-align: center;
  font-size: 14px;
  line-height: 21px;
  max-width: 800px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 28px;
  }
`;

const Desktop = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const Mobile = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Card = styled.div`
  max-width: ${props => props.maxWidth};
  background: ${props =>
    props.gradientBackground ? 'linear-gradient(100.05deg, #9737AB 0%, #133675 116.18%)' : null};
  border: ${props =>
    props.gradientBackground
      ? 'linear-gradient(100.05deg, #9737AB 0%, #133675 116.18%)'
      : '1px solid #FAFAFA'};
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  margin: 12px auto;
  padding: 0 0px;
  text-align: center;
  font-size: 15px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
`;

const CardDivider = styled.div`
  border: 1px solid #dfdfdf;
  width: 95%;
  margin: 0 auto;
  margin-bottom: -1px;
`;

const CardRow = styled.div`
  font-weight: ${props => (props.header ? 'bold' : null)};
  padding: 20px 0;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0);
  margin: 0 -1px;
  transition: 0.1s;

  &:hover {
    border: ${props => (props.noHover ? null : '2px solid #9737AB')};
    cursor: ${props => (props.noHover ? null : 'pointer')};
    box-shadow: ${props => (props.noHover ? null : '0px 4px 11px rgba(0, 0, 0, 0.25)')};
  }

  .overlay {
    display: none;
  }

  &:hover .overlay {
    display: flex;
  }
`;

const CardCellContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
`;

const OverlayContainer = styled.div`
  position: relative;
  height: 64px;
  top: -44px;
  margin-bottom: -64px;
  display: flex;
  align-items: center;
  padding-right: 24px;
`;

const CardCell = styled.div`
  flex: 1;
`;

const MobilePositiveSpacer = styled.div`
  padding: 8px 0;
`;

const MobileNegativeSpacer = styled.div`
  margin: -16px 0;
  padding: -8px 0;
`;

const VerticalSpacer = styled.div`
  padding: 16px 0;
`;

const GetStartedButton = styled.a`
  border: 2px solid #33b354;
  border-radius: 5px;
  display: inline-block;
  padding: 12px 28px;
  margin: 8px auto;
  max-width: 200px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;
  background-color: ${props => (props.promote ? '#33B354' : 'white')};
  color: ${props => (props.promote ? 'white' : '#33B354')};
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.promote ? 'white' : '#33B354')};
    color: ${props => (props.promote ? '#33B354' : 'white')};
  }
`;

const InstanceType = styled.div`
  font-weight: bold;
  color: ${props => props.color};
  font-size: 22px;
`;

const Price = styled.div`
  display: inline-block;
`;

const Promotion = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: white;
  margin: 8px auto;
`;

const Disclaimer = styled.div`
  font-size: 14px;
  line-height: 21px;
  text-align: center;
`;

export const Pricing = props => (
  <SectionWrapper dark={props.dark}>
    <SectionMargins>
      <SectionHeader>Pricing</SectionHeader>

      <VerticalSpacer />

      <SectionText>
        Rockset ingests your data in real-time. Your ingest cost is based on the amount of
        uncompressed data when it enters Rockset, such as initial load or streaming updates.
      </SectionText>

      <Card maxWidth="400px">
        <CardRow header={true} noHover={true}>
          <CardCellContainer className="cells">
            <CardCell>Data Ingest</CardCell>
            <CardCell>Price</CardCell>
          </CardCellContainer>
        </CardRow>
        <CardDivider />
        <CardRow noHover={true}>
          <CardCellContainer className="cells">
            <CardCell>per GB data ingested</CardCell>
            <CardCell>
              <Price>$0.10</Price>/GB
            </CardCell>
          </CardCellContainer>
        </CardRow>
      </Card>

      <Disclaimer>
        Default streaming ingest capacity 5 MBps.
        <br />
        <a href="mailto:support@rockset.com">Contact sales</a> for higher capacity and volume
        discounts.
      </Disclaimer>

      <VerticalSpacer />

      <SectionText>
        Rockset scales compute, memory, and storage based on the amount of data retained. Data
        retained is measured as the number of uncompressed bytes, not including space amplification
        for indexes.
        <br />
        <br />
        For higher query performance, select a more powerful instance type.
      </SectionText>

      <Desktop>
        <Card maxWidth="960px">
          <CardRow header={true} noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>Instance Type</CardCell>
              <CardCell>Storage</CardCell>
              <CardCell>
                Allocated Memory
                <br />
                (approx per GB)
              </CardCell>
              <CardCell>
                Allocated Compute
                <br />
                (approx per GB)
              </CardCell>
              <CardCell>
                Price
                <br />
                (per replica)
              </CardCell>
              <CardCell></CardCell>
            </CardCellContainer>
          </CardRow>
          <CardDivider />
          <CardRow onClick={getStarted}>
            <CardCellContainer className="cells">
              <CardCell>
                <InstanceType color={'#660099'}>c4</InstanceType>
              </CardCell>
              <CardCell>per GB data retained</CardCell>
              <CardCell>40 MB</CardCell>
              <CardCell>5 millicpu</CardCell>
              <CardCell>$0.00209/GB/hr</CardCell>
              <CardCell></CardCell>
            </CardCellContainer>
            <OverlayContainer className="overlay">
              <CardCell></CardCell>
              <CardCell></CardCell>
              <CardCell></CardCell>
              <CardCell></CardCell>
              <CardCell></CardCell>
              <GetStartedButton href="https://console.rockset.com/create" promote={true}>
                Get Started
              </GetStartedButton>
            </OverlayContainer>
          </CardRow>
          <CardDivider />
          <CardRow onClick={getStarted}>
            <CardCellContainer className="cells">
              <CardCell>
                <InstanceType color={'#660099'}>c12</InstanceType>
              </CardCell>
              <CardCell>per GB data retained</CardCell>
              <CardCell>120 MB</CardCell>
              <CardCell>15 millicpu</CardCell>
              <CardCell>$0.00410/GB/hr</CardCell>
              <CardCell></CardCell>
            </CardCellContainer>
            <OverlayContainer className="overlay">
              <CardCell></CardCell>
              <CardCell></CardCell>
              <CardCell></CardCell>
              <CardCell></CardCell>
              <CardCell></CardCell>
              <GetStartedButton promote={true}>Get Started</GetStartedButton>
            </OverlayContainer>
          </CardRow>
          <CardDivider />
          <CardRow onClick={getStarted}>
            <CardCellContainer className="cells">
              <CardCell>
                <InstanceType color={'#660099'}>c36</InstanceType>
              </CardCell>
              <CardCell>per GB data retained</CardCell>
              <CardCell>360 MB</CardCell>
              <CardCell>45 millicpu</CardCell>
              <CardCell>$0.01150/GB/hr</CardCell>
              <CardCell></CardCell>
            </CardCellContainer>
            <OverlayContainer className="overlay">
              <CardCell></CardCell>
              <CardCell></CardCell>
              <CardCell></CardCell>
              <CardCell></CardCell>
              <CardCell></CardCell>
              <GetStartedButton promote={true}>Get Started</GetStartedButton>
            </OverlayContainer>
          </CardRow>
          <CardDivider />
          <CardRow onClick={getStarted}>
            <CardCellContainer className="cells">
              <CardCell>
                <InstanceType>free</InstanceType>
              </CardCell>
              <CardCell>up to 2 GB</CardCell>
              <CardCell>variable</CardCell>
              <CardCell>variable</CardCell>
              <CardCell>free forever</CardCell>
              <CardCell></CardCell>
            </CardCellContainer>
            <OverlayContainer className="overlay">
              <CardCell></CardCell>
              <CardCell></CardCell>
              <CardCell></CardCell>
              <CardCell></CardCell>
              <CardCell></CardCell>
              <GetStartedButton promote={true}>Get Started</GetStartedButton>
            </OverlayContainer>
          </CardRow>
        </Card>
      </Desktop>

      <Mobile>
        <Card>
          <CardRow header={true} noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>Instance Type</CardCell>
              <CardCell>Price per Replica</CardCell>
            </CardCellContainer>
          </CardRow>
          <MobileNegativeSpacer />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <InstanceType color={'#660099'}>c4</InstanceType>
              </CardCell>
              <CardCell>$0.00209/GB/hr</CardCell>
            </CardCellContainer>
          </CardRow>
          <CardDivider />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <b>Storage</b>
              </CardCell>
              <CardCell>per GB data retained</CardCell>
            </CardCellContainer>
          </CardRow>
          <CardDivider />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <b>
                  Allocated Memory
                  <br />
                  (approx per GB)
                </b>
              </CardCell>
              <CardCell>40 MB</CardCell>
            </CardCellContainer>
          </CardRow>
          <CardDivider />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <b>
                  Allocated Compute
                  <br />
                  (approx per GB)
                </b>
              </CardCell>
              <CardCell>5 millicpu</CardCell>
            </CardCellContainer>
          </CardRow>
          <GetStartedButton onClick={getStarted}>Get Started</GetStartedButton>
          <MobilePositiveSpacer />
        </Card>
        <Card>
          <CardRow header={true} noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>Instance Type</CardCell>
              <CardCell>Price per Replica</CardCell>
            </CardCellContainer>
          </CardRow>
          <MobileNegativeSpacer />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <InstanceType color={'#660099'}>c12</InstanceType>
              </CardCell>
              <CardCell>$0.00410/GB/hr</CardCell>
            </CardCellContainer>
          </CardRow>
          <CardDivider />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <b>Storage</b>
              </CardCell>
              <CardCell>per GB data retained</CardCell>
            </CardCellContainer>
          </CardRow>
          <CardDivider />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <b>
                  Allocated Memory
                  <br />
                  (approx per GB)
                </b>
              </CardCell>
              <CardCell>120 MB</CardCell>
            </CardCellContainer>
          </CardRow>
          <CardDivider />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <b>
                  Allocated Compute
                  <br />
                  (approx per GB)
                </b>
              </CardCell>
              <CardCell>15 millicpu</CardCell>
            </CardCellContainer>
          </CardRow>
          <GetStartedButton onClick={getStarted}>Get Started</GetStartedButton>
          <MobilePositiveSpacer />
        </Card>
        <Card>
          <CardRow header={true} noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>Instance Type</CardCell>
              <CardCell>Price per Replica</CardCell>
            </CardCellContainer>
          </CardRow>
          <MobileNegativeSpacer />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <InstanceType color={'#660099'}>c36</InstanceType>
              </CardCell>
              <CardCell>$0.01150/GB/hr</CardCell>
            </CardCellContainer>
          </CardRow>
          <CardDivider />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <b>Storage</b>
              </CardCell>
              <CardCell>per GB data retained</CardCell>
            </CardCellContainer>
          </CardRow>
          <CardDivider />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <b>
                  Allocated Memory
                  <br />
                  (approx per GB)
                </b>
              </CardCell>
              <CardCell>360 MB</CardCell>
            </CardCellContainer>
          </CardRow>
          <CardDivider />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <b>
                  Allocated Compute
                  <br />
                  (approx per GB)
                </b>
              </CardCell>
              <CardCell>45 millicpu</CardCell>
            </CardCellContainer>
          </CardRow>
          <GetStartedButton onClick={getStarted}>Get Started</GetStartedButton>
          <MobilePositiveSpacer />
        </Card>
        <Card>
          <CardRow header={true} noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>Instance Type</CardCell>
              <CardCell>Price per Replica</CardCell>
            </CardCellContainer>
          </CardRow>
          <MobileNegativeSpacer />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <InstanceType>free</InstanceType>
              </CardCell>
              <CardCell>free forever</CardCell>
            </CardCellContainer>
          </CardRow>
          <CardDivider />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <b>Storage</b>
              </CardCell>
              <CardCell>up to 2 GB</CardCell>
            </CardCellContainer>
          </CardRow>
          <CardDivider />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <b>
                  Allocated Memory
                  <br />
                  (approx per GB)
                </b>
              </CardCell>
              <CardCell>variable</CardCell>
            </CardCellContainer>
          </CardRow>
          <CardDivider />
          <CardRow noHover={true}>
            <CardCellContainer className="cells">
              <CardCell>
                <b>
                  Allocated Compute
                  <br />
                  (approx per GB)
                </b>
              </CardCell>
              <CardCell>variable</CardCell>
            </CardCellContainer>
          </CardRow>
          <GetStartedButton onClick={getStarted}>Get Started</GetStartedButton>
          <MobilePositiveSpacer />
        </Card>
      </Mobile>

      <Disclaimer>
        Minimum of 2 replicas for availability. Refer <a href="#faq">below</a> for FAQ.
        <br />
        Volume discounts and reserved pricing are available.
        <br />
        Billing is usage based, with minimum monthly billing starting at $6/month.
      </Disclaimer>

      <VerticalSpacer />

      <Card maxWidth="960px" gradientBackground={true}>
        <VerticalSpacer />
        <Promotion>Get started with $300 in free credits</Promotion>
        <GetStartedButton onClick={getStarted} promote={true}>
          Get Started
        </GetStartedButton>
        <VerticalSpacer />
      </Card>
    </SectionMargins>
  </SectionWrapper>
);
