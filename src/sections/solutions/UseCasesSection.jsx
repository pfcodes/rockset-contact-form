import React from 'react';
import styled from 'styled-components';
import {
  TrioWrapper,
  TrioItemShadow,
  TrioHeader,
  TrioHeaderText,
  TrioImage,
  TrioBody,
} from './trio';
import Icon1 from '../../images/kafka_monitoring.svg';
import Icon2 from '../../images/kafka_api.svg';
import Icon3 from '../../images/kafka_data.svg';
import Icon3Lakes from '../../images/database.svg';

import { SectionHeader, SectionSubHeader, SectionMargins } from '../common/common';

const Wrapper = styled.div`
  padding-top: 40px;
`;

const Space = styled.div`
  min-height: ${props => props.mobileHeight || props.height};
  height: ${props => props.mobileHeight || props.height};
  width: ${props => props.mobileWidth || props.width};
  @media (min-width: 1024px) {
    min-height: ${props => props.height || 0};
    height: ${props => props.height || 0};
    width: ${props => props.width || 0};
  }
`;

const SmallerHeader = styled.div`
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 38px;
  text-align: center;

  color: #111111;
`;

export default class UseCasesSection extends React.Component {
  render() {
    return (
      <>
        <Wrapper>
          <SectionMargins>
            <SectionHeader>{this.props.title}</SectionHeader>
            <SectionSubHeader>{this.props.subtitle}</SectionSubHeader>
            <SmallerHeader>Use Cases</SmallerHeader>
            <Space height="30px" />
            <TrioWrapper>
              <TrioItemShadow customHeight={this.props.customTileHeight} padAfter={true}>
                <TrioHeader>
                  <TrioImage src={this.props.customImage1 ? this.props.customImage1 : Icon1} />
                  <Space height="20px" />
                  <TrioHeaderText>{this.props.dashboardsHeader}</TrioHeaderText>
                </TrioHeader>
                <TrioBody>{this.props.dashboardsText}</TrioBody>
              </TrioItemShadow>

              <TrioItemShadow
                customHeight={this.props.customTileHeight}
                padAfter={true}
                padBefore={true}
              >
                <TrioHeader>
                  <TrioImage src={this.props.customImage2 ? this.props.customImage2 : Icon2} />
                  <Space height="20px" />
                  <TrioHeaderText>{this.props.appsHeader}</TrioHeaderText>
                </TrioHeader>
                <TrioBody>{this.props.appsText}</TrioBody>
              </TrioItemShadow>

              <TrioItemShadow customHeight={this.props.customTileHeight} padBefore={true}>
                <TrioHeader>
                  <TrioImage
                    src={
                      this.props.customImage3
                        ? this.props.customImage3
                        : this.props.lakes
                        ? Icon3Lakes
                        : Icon3
                    }
                  />
                  <Space height="20px" />
                  <TrioHeaderText>{this.props.useCaseHeader}</TrioHeaderText>
                </TrioHeader>
                <TrioBody>{this.props.useCaseText}</TrioBody>
              </TrioItemShadow>
            </TrioWrapper>
          </SectionMargins>
        </Wrapper>
      </>
    );
  }
}
