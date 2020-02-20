import styled from 'styled-components';
/*
 Spacer
*/

export const Space = styled.div`
  height: ${props => props.mobileHeight || props.height};
  width: ${props => props.mobileWidth || props.width};
  @media (min-width: 1024px) {
    height: ${props => props.height || 0};
    min-height: ${props => props.height || 0};
    width: ${props => props.width || 0};
    min-width: ${props => props.width || 0};
  }
`;
