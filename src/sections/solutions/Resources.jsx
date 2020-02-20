import * as React from 'react';
import { SectionHeader, SectionMargins } from '../common/common';
import styled from 'styled-components';

import howToIcon from '../../images/howToIcon.svg';
import caseStudyIcon from '../../images/caseStudyIcon.svg';
import blogIcon from '../../images/blogIcon.svg';
import arrowRight from '../../images/arrow.svg';
import lightBlueArrowRight from '../../images/lightBlueArrow.svg';
import darkBlueArrowRight from '../../images/darkBlueArrow.svg';

const ResourcesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 960px;
  justify-content: center;
  margin: auto;
`;

const ResourceTileWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #fafafa;
  box-sizing: border-box;
  position: relative;
  margin: 10px;
  width: 300px;
  height: 320px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  :hover {
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.2);
  }
  border-radius: 5px;
  padding: 32px;
  h3 {
    font-weight: bold;
    font-size: 20px;
    line-height: 120%;
    /* or 24px */

    color: #333333;
  }

  img {
    width: 24px;
  }

  span {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-left: 8px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }
`;

const ReadMore = styled.a`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${props => props.color};
  text-decoration: none;
  cursor: pointer;

  :hover {
    text-decoration: none;
    color: ${props => props.color};
  }

  position: absolute;
  bottom: 32px;
  left: 32px;
`;

const getTypeInfo = type => {
  if (type === 'blog') {
    return {
      img: blogIcon,
      type: 'Related Blog',
      color: '#9737AB',
      arrow: arrowRight,
    };
  } else if (type === 'how-to') {
    return {
      img: caseStudyIcon,
      type: 'How-To Guide',
      color: '#1D6EFE',
      arrow: darkBlueArrowRight,
    };
  }
  return {
    img: howToIcon,
    type: 'Documentation',
    color: '#029EE6',
    arrow: lightBlueArrowRight,
  };
};

const ResourceTile = ({ resource }) => {
  const { img, type, color, arrow } = getTypeInfo(resource.type);
  return (
    <ResourceTileWrapper>
      <img src={img} />
      <span style={{ color }}>{type}</span>
      <h3>{resource.title}</h3>
      <p>{resource.description}</p>
      <ReadMore color={color} target="_blank" href={resource.link}>
        Read more
        <img style={{ width: 9, verticalAlign: 'unset', marginLeft: 4 }} src={arrow} />
      </ReadMore>
    </ResourceTileWrapper>
  );
};

export const Resources = ({ resourceList }) => {
  return (
    <SectionMargins>
      <SectionHeader>Resources</SectionHeader>
      <br />
      <br />
      <ResourcesWrapper>
        {resourceList.map(resource => (
          <ResourceTile resource={resource} />
        ))}
      </ResourcesWrapper>
    </SectionMargins>
  );
};
