import React from 'react';
import styled from 'styled-components';
import { SectionHeader, SectionMargins, SectionSubHeader } from '../common/common';

const Wrapper = styled.div`
  background-color: #fafafa;
  padding-top: 20px;

  @media (min-width: 1024px) {
    padding-top: 0px;
  }
`;

export const DuploWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const DuploItem = styled.div`
  background: #ffffff;
  border: 1px solid #fafafa;
  /* box-sizing: border-box; */
  /* drop shadow */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 10px;

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

export const DuploHeader = styled.div`
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

export const DuploImage = styled.img`
  height: ${props => (props.height ? props.height : '90px')};
  margin: ${props => (props.margin ? props.margin : '0px')};
`;

export const DuploHeaderText = styled.div`
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const DuploBody = styled.div`
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 16px;
  text-align: center;
  padding: 20px;
  padding-top: 10px;
  @media (min-width: 1024px) {
    margin: auto;
    width: 70%;
    font-size: 16px;
    line-height: 24px;
  }
`;
export class WhyRockset extends React.Component {
  render() {
    return (
      <>
        <Wrapper>
          <SectionMargins>
            <SectionHeader>The Power of Now</SectionHeader>

            <SectionSubHeader>
              Provide developers the data they need, at the speed they require, with the reliability
              they demand. Without the burden of database tuning and performance engineering, data
              teams can enable developers in building amazing applications faster.
            </SectionSubHeader>

            <DuploWrapper>
              <DuploItem>
                <DuploHeader>
                  <DuploImage src="/images/ingest@2x.png" />
                  <DuploHeaderText>Move faster</DuploHeaderText>
                </DuploHeader>
                <DuploBody>
                  Stream in new, messy data sets instantly, without being bottlenecked on data
                  pipelines.
                </DuploBody>
              </DuploItem>

              <DuploItem>
                <DuploHeader>
                  <DuploImage src="/images/time@2x.png" />
                  <DuploHeaderText>Act on the freshest data</DuploHeaderText>
                </DuploHeader>
                <DuploBody>Give applications continuous access to up-to-date data.</DuploBody>
              </DuploItem>
            </DuploWrapper>

            <DuploWrapper>
              <DuploItem>
                <DuploHeader>
                  <DuploImage src="/images/apps@2x copy.png" />
                  <DuploHeaderText>Serve real-time applications</DuploHeaderText>
                </DuploHeader>
                <DuploBody>
                  Give developers the performance they need for their most demanding applications.
                </DuploBody>
              </DuploItem>

              <DuploItem>
                <DuploHeader>
                  <DuploImage src="/images/secure-database@2x.png" />
                  <DuploHeaderText>Be confident</DuploHeaderText>
                </DuploHeader>
                <DuploBody>When speed is important, your uptime is critical.</DuploBody>
              </DuploItem>
            </DuploWrapper>
          </SectionMargins>
        </Wrapper>
      </>
    );
  }
}
