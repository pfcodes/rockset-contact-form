import * as React from 'react';
import { SectionHeader, SectionMargins, SectionSubHeader } from '../common/common';

import grafana from '../../images/grafana-logo.svg';
import redash from '../../images/redash.svg';
import superset from '../../images/superset.svg';
import Tableau from '../../images/Tableau-logo.svg';
import { TabContentSection } from './TabContentSection';
import tableauImg from '../../images/tableau-publish-workbook.svg';
import styled from 'styled-components';

const Img = styled.img`
  min-width: 200px;

  @media (min-width: 768px) {
    min-width: 400px;
  }
`;

const content = [
  {
    image: grafana,
    title: 'Grafana',
    description:
      'Grafana is an open observability platform for analytics and monitoring. Grafana requires a SQL backend and cannot query Kafka directly. Use Rockset to visualize Kafka events in Grafana. ',
    link: 'https://docs.rockset.com/grafana/',
    content: <Img src="/images/kafka-grafana.png" />,
  },
  {
    image: redash,
    title: 'Redash',
    description:
      'Redash is an open source BI visualization tool that excels in operational monitoring dashboards. Redash requires a SQL backend and cannot query Kafka directly. Use Rockset to visualize Kafka events in Redash.',
    link: 'https://docs.rockset.com/redash/',
    content: <Img src="/images/kafka-redash.png" />,
  },
  {
    image: superset,
    title: 'Superset',
    description:
      'Apache Superset is an open source data exploration and visualization web application. Superset requires a SQL data backend and cannot query Kafka directly. Use Rockset to visualize Kafka events in Redash.',
    link: 'https://docs.rockset.com/apache-superset/',
    content: <Img src="/images/kafka-superset.png" />,
  },
  {
    image: Tableau,
    title: 'Tableau',
    description:
      'Tableau is a leading BI visualization tool that gives business users the flexibility they need. Tableau requires a SQL data backend and cannot query Kafka directly. Use Rockset to visualize Kafka events in Tableau (via JDBC).',
    link: 'https://docs.rockset.com/tableau/',
    content: <Img src="/images/kafka-tableau.png" />,
  },
];

export const VisualizationTools = () => {
  return (
    <div style={{ background: '#fafafa' }}>
      <SectionMargins>
        <SectionHeader>Visualization Tools</SectionHeader>
        <SectionSubHeader>
          Enable your business teams to visualize real-time event streams using dashboarding tools
          that they already know and love, using Rockset's JDBC connector and native support for
          standard SQL-based visualization tools.
        </SectionSubHeader>
        <TabContentSection content={content} />
      </SectionMargins>
    </div>
  );
};
