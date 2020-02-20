import * as React from 'react';
import Header from '../components/header';
import SEO from '../components/seo';
import { MarginAdjuster, GetStartedBanner, GetStartedTitle } from '../templates/blog-post';
import FormAccess from '../components/form-access';
import { Customers } from '../sections/homepage/Customers';
import { Resources } from '../sections/solutions/Resources';
import { VisualizationTools } from '../sections/solutions/Visualization';

import TitleSection from '../sections/common/TitleSection';
import UseCasesSection from '../sections/solutions/UseCasesSection';
import OperationalAnalytics from '../sections/solutions/OperationalAnalytics';
import HowItWorks from '../sections/solutions/HowItWorks';

const styles = require('./index.module.css');

const resourceList = [
  {
    type: 'how-to',
    title: 'Using Tableau with Kafka to Explore Trending Reddit Comments',
    description:
      'Build a real-time Tableau dashboard for operational monitoring and analytics on streaming event data from Kafka.',
    link: 'https://rockset.com/blog/tableau-kafka-real-time-sql-dashboard-on-streaming-data/',
  },
  {
    type: 'how-to',
    title: 'Visualize Rental Marketplace Data from DynamoDB',
    description:
      'We create an example dashboard in Tableau on data in DynamoDB, using Rockset as the SQL intelligence layer.',
    link: 'https://rockset.com/blog/tableau-dynamodb-real-time-sql-dashboard-on-nosql-data/',
  },
  {
    type: 'how-to',
    title: 'Create a Live Dashboard for Event Data',
    description:
      'In a few steps, we walk through how to ingest a stream of complex JSON event data, connect Tableau to the data in Rockset, and add charts to a live dashboard.',
    link: 'https://rockset.com/blog/using-tableau-for-live-dashboards-on-event-data/',
  },
  {
    type: 'blog',
    title: 'Evaluate Analytics Services for Operational Dashboards',
    description:
      'We review several approaches to building operational dashboards on DynamoDB data, using SQL engines like Redshift and Athena.',
    link:
      'https://rockset.com/blog/tableau-operational-dashboards-reporting-dynamodb-redshift-athena/',
  },
  {
    type: 'doc',
    title: 'How to Connect Rockset and Tableau',
    description: 'Read up on how to setup Tableau Desktop and configure it for use with Rockset.',
    link: 'https://docs.rockset.com/tableau/',
  },
  {
    type: 'how-to',
    title: 'FULL Uses Rockset for Live Dashboards',
    description:
      'FULL Creative uses Rockset to build live dashboards and run complex SQL on contact center call data in DynamoDB.',
    link: 'https://rockset.com/blog/full-uses-rockset-with-dynamodb-for-live-dashboard/',
  },
];

export default class KafkaLandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: false,
    };
  }

  render() {
    return (
      <>
        <SEO
          title="Tableau on NoSQL | Rockset"
          titleTemplate="%s"
          keywords={[`rockset`, `data`, `apps`]}
          description={'Visualize NoSQL data in Tableau dashboards without a single line of code.'}
        />
        <Header activePage="sql-on-kafka" />
        <TitleSection
          background="/images/kafka-background.png"
          title="Visualize NoSQL Data in Tableau Dashboards"
          subtitle="Without a single line of code"
        />
        <UseCasesSection
          title="Access the Full Data Story"
          customImage1="/images/dynamodb.svg"
          customImage2="/images/kafka.svg"
          customImage3="/images/s3.svg"
          customTileHeight="570px"
          subtitle={`Tableau users can visualize data from modern sources like Apache Kafka, Amazon DynamoDB, and Amazon S3 in real time- without writing a single line of code- for operational monitoring and analytics. `}
          dashboardsHeader="DynamoDB"
          dashboardsText={`The burden of server management saps time and energy that could be spent analyzing business data. Rockset is an operational analytics engine that is entirely serverless, it does not require provisioning, capacity planning or server administration in the cloud. Developers and data engineers can run complex queries with the full power of SQL and, using Rockset’s JDBC connector, enable visualizations that include NoSQL data from DynamoDB in Tableau
          dashboards in real time.`}
          appsHeader="Kafka"
          appsText={`Kafka does not have a direct connection to Tableau, limiting the ability of data teams to make decisions on real-time streaming data. Rockset complements Kafka’s KSQL stream processing capabilities by serving as the “sink” that
          ingests the processed stream. With Rockset, streaming event data from Kafka is automatically
          represented as a dynamic SQL table and available for querying in seconds. Using Rockset’s JDBC
          connector, business teams are able to visualize real-time event streams that include NoSQL
          data in Tableau.`}
          useCaseHeader="S3"
          useCaseText={`Accessing S3 data in Tableau used to require hours or weeks of data cleaning, migration to a data warehouse, and custom pipelines. The onerous data engineering effort left large swaths of data inaccessible to analysts making business decisions. With Rockset, you can run fast SQL analytics on data collected in your data lake without requiring upfront schema definition or ETL. As new data lands in your data lake, it becomes queryable in seconds in Rockset. `}
        />
        <HowItWorks
          subtitle="Rockset helps you make instant decisions from reams of real-time data by continuously collecting data, running and search and analytics without predefined schemas and ETL, and powering dashboards."
          imgDesk="/images/tableau-works.png"
          imgMobile="/images/tableau-works.png"
        />
        <OperationalAnalytics
          title="Operational Monitoring and Analytics"
          subtitle="Rockset is designed for highly concurrent, low latency queries so that business teams can access real-time data for real-time insights."
          section1Header="Continuously load data"
          section1Text="Use one of Rockset's native integrations with DynamoDB, Amazon S3, Google Cloud Storage, Amazon Redshift, Kinesis, Apache Kafka and more to securely load your data. Stay in sync with your source without building custom pipelines."
          section1Image="/images/tableau-create.png"
          section2Header="Explore unstructured data as SQL tables"
          section2Text="Your nested JSON, XML, CSV or Parquet dataset is converted into a SQL table without requiring a schema ahead of time. Rockset distributes, replicates and indexes your dataset so you can run millisecond-latency SQL (including JOINs) over TBs of data."
          section2Image="/images/dynamo-query.png"
          section3Header="Deliver real-time dashboards"
          section3Text="Query Rockset from an interactive Tableau dashboard. Rockset auto-scales storage and compute, so you get reliable performance without having to manage servers or databases."
          section3Image="/images/dynamo-dash.png"
        />
        <VisualizationTools />
        <Resources resourceList={resourceList} />
        <Customers />
        {/* Override defaults from blog page */}
        <MarginAdjuster style={{ marginBottom: 0, top: 0 }}>
          <GetStartedBanner>
            <GetStartedTitle>Try Tableau on NoSQL now</GetStartedTitle>
            <FormAccess code="tableau-landing-bottom" />
          </GetStartedBanner>
        </MarginAdjuster>
      </>
    );
  }
}
