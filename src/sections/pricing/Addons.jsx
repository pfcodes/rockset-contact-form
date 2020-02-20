import * as React from 'react';
import styled from 'styled-components';

import AdvancedSupportIcon from '../../images/advanced_support.svg';
import AdvancedSecurityIcon from '../../images/advanced_security.svg';
import DedicatedInstancesIcon from '../../images/dedicated_instances.svg';
import DisasterRecoveryIcon from '../../images/disaster_recovery.svg';

import { SectionWrapper, SectionMargins, SectionHeader } from '../common/common';

const Wrapper = styled.div``;

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
  padding: 24px;
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

const CardIcon = styled.img`
  height: 48px;

  @media (min-width: 1024px) {
    height: 60px;
    margin: 8px 0;
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

  @media (min-width: 768px) {
    height: 64px;
  }

  @media (min-width: 1024px) {
    height: 64px;
  }
`;

const CardButton = styled.a`
  border: 2px solid #1a70b4;
  border-radius: 5px;
  display: inline-block;
  margin-top: 24px;
  padding: 12px 28px;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: #1a70b4;
  transition: 0.3s;

  &:hover {
    background-color: #1a70b4;
    color: white;
  }
`;

export const Addons = props => (
  <SectionWrapper dark={props.dark}>
    <SectionMargins>
      <SectionHeader>Add-ons</SectionHeader>
      <CardsContainer>
        <Card>
          <CardIcon src={AdvancedSupportIcon} />
          <CardHeader>Enterprise Support</CardHeader>
          <CardDescription>
            For mission critical applications, select Enterprise Support with SEV-1 response times
            of 1 hour and 24x7 coverage.
          </CardDescription>
          <CardButton href="mailto:support@rockset.com">Contact Us</CardButton>
        </Card>
        <Card>
          <CardIcon src={AdvancedSecurityIcon} />
          <CardHeader>Advanced Security</CardHeader>
          <CardDescription>
            Includes advanced encryption with user controlled keys, GSuite, Okta & custom SSO,
            role-based access control, two factor authentication, AWS private link, and IP
            whitelisting.
          </CardDescription>
          <CardButton href="mailto:support@rockset.com">Contact Us</CardButton>
        </Card>
        <Card>
          <CardIcon src={DedicatedInstancesIcon} />
          <CardHeader>Dedicated Instances</CardHeader>
          <CardDescription>
            Dedicated hardware resources for your organization. These resources are always
            provisioned and will not be used to store or serve data belonging to other customers.
          </CardDescription>
          <CardButton href="mailto:support@rockset.com">Contact Us</CardButton>
        </Card>
        <Card>
          <CardIcon src={DisasterRecoveryIcon} />
          <CardHeader>Disaster Recovery</CardHeader>
          <CardDescription>
            Replicate your data across multiple regions to reduce downtime and limit the impact to
            your business.
          </CardDescription>
          <CardButton href="mailto:support@rockset.com">Contact Us</CardButton>
        </Card>
      </CardsContainer>
    </SectionMargins>
  </SectionWrapper>
);
