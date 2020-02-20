import styled from 'styled-components';

export const SectionWrapper = styled.div`
  background: ${props => (props.dark ? '#fafafa' : 'white')};
`;

export const SectionHeader = styled.p`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  text-align: center;

  font-size: 28px;
  line-height: 35px;
  margin: 0px 20px;

  // Tablet
  @media (min-width: 768px) {
  }

  // Fullscreen
  @media (min-width: 990px) {
    font-size: 39px;
    line-height: 49px;
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
    text-align: center;
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

export const SectionMargins = styled.div`
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
    padding: 100px 0px 70px 0px;
  }
`;

export const PreLinkText = styled.span`
  text-transform: uppercase;
  color: #333333;
  font-size: 10px;
  padding-right: 8px;
  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const BrandedLink = styled.a`
  color: #9737ab;
  font-weight: bold;
  font-size: 14px;
  text-decoration: none;
  :hover {
    color: #9737ab;
  }

  @media (min-width: 768px) {
    font-size: 15px;
  }

  background-image: linear-gradient(#e9d4ed, #e9d4ed);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.5s;

  :hover,
  :focus {
    background-size: 100% 2px;
  }
`;

export const DemoSectionContent = styled.div`
  padding-bottom: 20px;

  // Tablet
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  // Fullscreen
  @media (min-width: 990px) {
  }

  // Fullscreen
  @media (min-width: 1024px) {
  }
`;

export const DemoSectionText = styled.div`
  margin: 23px 10px 0px 10px;

  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;

  color: #333333;

  // Tablet
  @media (min-width: 768px) {
    margin: 23px 13px 0px 13px;

    width: 55%;
  }

  // Fullscreen
  @media (min-width: 990px) {
    margin: 25px 13px 0px 13px;

    font-size: 18px;
    line-height: 28px;
  }

  // Fullscreen
  @media (min-width: 1024px) {
    margin: 90px 20px 0px 20px;
  }
`;

export const DemoSectionVideo = styled.div`
  margin: 20px auto 0px;
  max-width: 320px;
  max-height: 180px;

  @media (min-width: 768px) {
    margin: 23px 10px 0px 10px;
    max-width: 40%;
  }

  @media (min-width: 990px) {
    margin: 50px 0px 0px 20px;
    max-height: 190px;
  }
`;

export const VideoLightboxContainer = styled.div`
  position: relative;
  cursor: 'pointer';
`;

export const VideoLightboxButton = styled.div`
  position: absolute;
  left: 0px;
  top: 53%;
  right: 0px;
  display: block;
  width: 50px;
  height: 50px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 13px;
  padding-left: 3px;
  border-radius: 100%;
  background-color: #33b354;
  -webkit-transform: translate(0px, -50%);
  -ms-transform: translate(0px, -50%);
  transform: translate(0px, -50%);
  -webkit-transition: -webkit-transform 200ms ease;
  transition: -webkit-transform 200ms ease;
  transition: transform 200ms ease;
  transition: transform 200ms ease, -webkit-transform 200ms ease;
  text-align: center;

  :hover {
    box-shadow: 0 0 13px 0 rgba(0, 0, 0, 0.5);
    -webkit-transform: translate(0px, -50%) scale(1.2);
    -ms-transform: translate(0px, -50%) scale(1.2);
    transform: translate(0px, -50%) scale(1.2);
    cursor: pointer;
  }
`;

export const VideoLightboxIcon = styled.img`
  height: 20px;
`;

export const getStarted = () => {
  window.location = 'https://console.rockset.com/create';
};
