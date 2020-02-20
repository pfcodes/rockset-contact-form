import styled from 'styled-components';

export const TrioWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const TrioItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding-top: ${props => (props.padBefore ? '8px' : '0')};
  padding-bottom: ${props => (props.padAfter ? '8px' : '0')};
  padding-right: 0;
  padding-left: 0;

  @media (min-width: 1024px) {
    padding-top: 0;
    padding-bottom: 0;
    padding-left: ${props => (props.padBefore ? '16px' : '0')};
    padding-right: ${props => (props.padAfter ? '16px' : '0')};
  }
`;

export const TrioHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 64px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 16px;
  }
`;

export const TrioImage = styled.img`
  height: 50px;
  min-height: 50px;
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
  font-size: 14px;
  line-height: 21px;
  margin: 16px 0px;
  @media (min-width: 1024px) {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150.9%;
    /* or 24px */

    text-align: center;
  }
`;

export const TrioItemShadow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  padding-top: ${props => (props.padBefore ? '8px' : '0')};
  padding-bottom: ${props => (props.padAfter ? '8px' : '0')};
  padding-right: 0;
  padding-left: 0;

  border: 1px solid #fafafa;
  box-sizing: border-box;
  background-color: white;
  /* drop shadow */

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  margin: 20px 0px 20px 0px;
  max-width: 300px;
  @media (min-width: 1024px) {
    margin: 0px 20px 0px 20px;
    height: ${props => (props.customHeight ? props.customHeight : '346px')};
  }
`;
