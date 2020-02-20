import styled from 'styled-components';

export const FlowWrapper = styled.div`
  display: flex;
  margin: 20px 0 40px 0;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 40px;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const FlowStep = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 80%;
  @media (min-width: 768px) {
    width: 50%;
    max-width: 150px;
  }
`;

export const FlowStepImage = styled.img``;

export const FlowStepText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  margin-top: 5px;
  color: #333333;
`;

export const FlowTransition = styled.div`
  flex: 1;
  position: relative;
  
  &::after {
    // width: 75px;
    font-size: 20px;
    line-height: 40px;
    content: " ";
    border-right: 2px dashed #EA12E5;
  }

  @keyframes border-move {
    0% {
      background-position: 0px 0px;
    }
    100% {
      background-position: 100% 0px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 75px;
    padding-bottom: 8px;
    margin: 0 4px;

    &::after {
      border-right: none;
      background: linear-gradient(90deg, #EA12E5 50%, transparent 50%);
      background-repeat: repeat-x;
      background-size: 15px 3px;
      background-position: 0px 0px;
      padding: 1px;
      animation: border-move 1s infinite linear;
      }
      content: " ";
      bottom: -7px;
    }
  }

  @media (min-width: 1024px) {
    &::after {
      animation: border-move 5s infinite linear;
    }
  }
`;

export const FlowTransitionText = styled.div`
  color: #868686;
  text-transform: uppercase;
  text-align: center;
  display: none;
  font-size: 12px;
  @media (min-width: 1024px) {
    display: block;
  }
`;
