import React from 'react';
import styled from 'styled-components';
import arrowBlue from '../../images/arrowBlue.svg';

const SectionWrapper = styled.div`
  background: linear-gradient(279.3deg, #34327c 0.65%, #9737ab 98.37%), #9737ab;
  padding: 60px 28px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Header = styled.div`
  font-weight: 600;
  font-size: 25px;
  line-height: 32px;
  color: #ffffff;
`;

const SubHeader = styled.div`
  margin-top: 40px;
  font-weight: 600;
  font-size: 19px;
  line-height: 25px;
  color: #ffffff;

  @media (min-width: 768px) {
    margin-top: 30px;
  }
`;

const SlidyLinkWrapper = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  color: #92b9ff;
  margin-top: 10px;
  position: relative;

  :hover {
    color: #92b9ff;
  }

  :after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #92b9ff;
    transition: width 0.2s ease;
    -webkit-transition: width 0.2s ease;
  }

  :hover:after {
    width: 100%;
    left: 0;
    background: #92b9ff;
  }
`;

const SlidyLink = ({ link, title }) => (
  <SlidyLinkWrapper href={link}>
    {title}
    <img
      style={{ width: 9, verticalAlign: 'unset', marginLeft: 4, color: '#92B9FF' }}
      src={arrowBlue}
    />
  </SlidyLinkWrapper>
);

const HorizontalDivider = styled.div`
  width: 100%;
  opacity: 0.3;
  border-top: 1px solid #ffffff;
  margin-top: 40px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const GroupTwo = styled.div`
  @media (min-width: 768px) {
    padding-left: 20px;
    margin-left: 100px;
    margin-right: 25px;
    border-left: 1px solid rgba(256, 256, 256, 0.3);
    margin-top: -30px;
    padding-bottom: 30px;
    margin-bottom: -30px;
  }
  @media (min-width: 990px) {
    padding-left: 50px;
    margin-left: 200px;
    margin-right: 20px;
  }
`;

export const LearnMore = () => {
  return (
    <SectionWrapper>
      <div>
        <Header>Learn more about Rockset</Header>
        <SlidyLink link="/product" title="Visit the product page" />
        <HorizontalDivider />
      </div>
      <GroupTwo>
        <SubHeader>Ready to build?</SubHeader>
        <SlidyLink link="https://console.rockset.com/create" title="Get started with Rockset" />
        <SubHeader>Have more questions?</SubHeader>
        <SlidyLink link="mailto::hello@rockset.com" title="Talk to a product specialist" />
      </GroupTwo>
    </SectionWrapper>
  );
};
