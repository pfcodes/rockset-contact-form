import * as React from 'react';
import styled from 'styled-components';

import { getStarted } from '../common/common';

const BannerWrapper = styled.div`
  background: #f0f0f0;
  padding: 24px 0;
  text-align: center;
  font-size: 24px;
  line-height: 30px;
  font-weight: bold;
  color: #9737ab;
  cursor: pointer;
`;

export const Banner = props => (
  <BannerWrapper onClick={getStarted}>Get started with $300 in free credits</BannerWrapper>
);
