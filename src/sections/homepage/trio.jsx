import styled from 'styled-components';

export const TrioWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const TrioItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-right: 0;
  padding-left: 0;

  @media (min-width: 1024px) {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const TrioHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 64px;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 16px;
  }
`;

export const TrioImage = styled.img`
  padding-right: 16px;
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
  margin-bottom: 16px;
  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
