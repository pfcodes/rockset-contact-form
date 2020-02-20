import * as React from 'react';
import styled from 'styled-components';

import CheckIcon from '../../images/check.svg';

import { SectionWrapper, SectionMargins, SectionHeader } from '../common/common';

const FEATURES = {
  'General Features': [
    'Full-featured SQL',
    'JSON, Avro, Parquet, CSV, XML data formats',
    'Schemaless ingest',
    'Unlimited integrations',
    'Unlimited users',
  ],
  Performance: [
    '3-way indexes',
    'Bulk ingest up to 10 TB/hr',
    'Cost-based optimizer',
    'Massively parallel query execution',
    'Write API for streaming ingest',
  ],
  Security: ['Standard encryption', 'Github SSO', 'GSuite SSO'],
  Support: ['Community forum', 'Ticket-based support'],
  'Data Management': [
    'Geospatial queries',
    'Nested arrays and objects',
    'PII/PHI data masking',
    'Text search',
    'Time-based data retention',
    'Time series indexing',
  ],
  Serverless: [
    'Automatic resource provisioning as your dataset grows',
    'Intelligent distribution and balancing of data',
    'Agent-less integrations with cloud data sources',
    'Automatic compute scaling for bulk ingest',
  ],
  'Data Sources': [
    'Amazon DynamoDB',
    'Apache Kafka',
    'Amazon S3',
    'Amazon Kinesis',
    'Google Cloud Storage',
    'Amazon Redshift',
    'Segment*',
    'MongoDB*',
  ],
  'Visualizations & Clients': [
    'Tableau',
    'Grafana',
    'Apache Superset',
    'Redash',
    'Jetbrains DataGrip',
    'Jupyter Notebooks',
  ],
  'APIs & SDKs': ['REST API', 'JDBC Client', 'Python', 'Node.js', 'Java', 'Go', 'R', 'SQL CLI'],
};

const Subheader = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
  margin: 64px 0 0 0;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #fafafa;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 24px 0;
  padding: 24px;
  text-align: center;
  width: 100%;
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CardCategory = styled.div`
  padding: 16px 8px;
  width: 100%;

  @media (min-width: 768px) {
    width: 33%;
  }
`;

const CardCategoryHeader = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
`;

const CardCategoryDivider = styled.div`
  width: 100%;
  border: 1px solid #dfdfdf;
  margin: 8px 0;
`;

const Feature = styled.div`
  display: flex;
  align-items: flex-start;
`;

const FeatureCheck = styled.img`
  display: inline-block;
  margin: 8px;
`;

const FeatureText = styled.div`
  text-align: left;
`;

const renderCategory = category => (
  <CardCategory>
    <CardCategoryHeader>{category}</CardCategoryHeader>

    <CardCategoryDivider />

    {FEATURES[category].map(feature => (
      <Feature>
        <FeatureCheck src={CheckIcon} />
        <FeatureText>{feature}</FeatureText>
      </Feature>
    ))}
  </CardCategory>
);

export const Features = props => (
  <SectionWrapper dark={props.dark}>
    <SectionMargins>
      <SectionHeader>Included Features</SectionHeader>

      <Card>
        <CardRow>
          {renderCategory('General Features')}
          {renderCategory('Performance')}
          {renderCategory('Security')}
        </CardRow>
        <CardRow>
          {renderCategory('Support')}
          {renderCategory('Data Management')}
          {renderCategory('Serverless')}
        </CardRow>
      </Card>

      <Subheader>Integrations</Subheader>

      <Card>
        <CardRow>
          {renderCategory('Data Sources')}
          {renderCategory('Visualizations & Clients')}
          {renderCategory('APIs & SDKs')}
        </CardRow>
      </Card>
    </SectionMargins>
  </SectionWrapper>
);
