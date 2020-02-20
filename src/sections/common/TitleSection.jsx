import * as React from 'react';
import FormAccess from '../../components/form-access';
import styled from 'styled-components';

const FormWrapper = styled.div`
  overflow-x: hidden;
  text-align: left;
  #form-access-wrapper {
    margin: 40px 0px;
  }
  button {
    transition: background-color 200ms ease, border 200ms ease;
  }
`;

const WebsiteTitle = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  text-align: left;

  font-size: 32px;
  line-height: 35px;

  color: #ffffff;
  margin-bottom: 29px;

  // Tablet
  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 40px;
    margin-bottom: 29px;
  }

  // Fullscreen
  @media (min-width: 990px) {
    font-size: 54px;
    line-height: 59px;
    margin-bottom: 35px;
  }
`;

const WebsiteSubTitle = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  text-align: left;

  font-size: 20px;
  line-height: 25px;

  max-width: 900px;
  color: #ffffff;

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

const WebsiteSubtext = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  text-align: left;

  font-size: 14px;
  line-height: 20px;

  max-width: 900px;
  color: #ffffff;
  margin-top: -24px;
`;

const HeaderContent = styled.div`
  max-width: 900px;

  .primary-img {
    margin-top: 30px;
  }

  // Fullscreen
  @media (min-width: 990px) {
    display: flex;

    .primary-img {
      width: 400px;
      max-width: 400px;
      margin-top: 0px;
    }
  }
`;

const HeaderBanner = styled.div`
  height: 604px;
  background: linear-gradient(297.71deg, rgba(52, 50, 124, 0.9) 0.65%, #6B3596 54.6%, #9737AB 98.37%),
    url('${props => props.background}');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 68px 45px 0px;

  // Tablet
  @media (min-width: 768px) {
    height: 604px;
  }

  // Fullscreen
  @media (min-width: 990px) {
    height: 592px;
  }
`;

const TitleSection = ({
  title,
  subtitle,
  background,
  subtext,
  customCta = null,
  customCtaOnClick = null,
  additonalContent = null,
}) => (
  <HeaderBanner background={background}>
    <HeaderContent>
      <div>
        <WebsiteTitle>{title}</WebsiteTitle>
        <WebsiteSubTitle>{subtitle}</WebsiteSubTitle>
        <FormWrapper>
          {customCta ? (
            <button className="button w-button" onClick={customCtaOnClick}>
              {customCta}
            </button>
          ) : (
            <FormAccess code="home-top" />
          )}
        </FormWrapper>
        {subtext && <WebsiteSubtext>{subtext}</WebsiteSubtext>}
      </div>
      <div style={{ flexGrow: 0, textAlign: 'center' }}>{additonalContent}</div>
    </HeaderContent>
  </HeaderBanner>
);

export default TitleSection;
