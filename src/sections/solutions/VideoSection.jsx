import * as React from 'react';
import styled from 'styled-components';

import {
  SectionMargins,
  SectionHeader,
  VideoLightboxButton,
  VideoLightboxIcon,
  VideoLightboxContainer,
} from '../common/common';
import iconPlay from '../../images/Icon-play-white.png';
import videoBg from '../../images/video.svg';

const Wrapper = styled.div`
  background-color: #fafafa;
`;

const VideoContainer = styled.div`
  text-align: center;
  margin-top: 40px;
`;

export const VideoSection = ({ playVideo, title }) => (
  <Wrapper>
    <SectionMargins>
      <SectionHeader>{title}</SectionHeader>
      <VideoContainer>
        <VideoLightboxContainer>
          <img src={videoBg} />
          <VideoLightboxButton>
            <VideoLightboxIcon src={iconPlay} onClick={playVideo} />
          </VideoLightboxButton>
        </VideoLightboxContainer>
      </VideoContainer>
    </SectionMargins>
  </Wrapper>
);
