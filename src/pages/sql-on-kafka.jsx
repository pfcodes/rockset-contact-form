import * as React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import SEO from '../components/seo';
import { MarginAdjuster, GetStartedBanner, GetStartedTitle } from '../templates/blog-post';
import FormAccess from '../components/form-access';
import { Customers } from '../sections/homepage/Customers';
import { Resources } from '../sections/solutions/Resources';
import { VideoSection } from '../sections/solutions/VideoSection';
import { ApiAccess } from '../sections/solutions/ApiAccess';
import { VisualizationTools } from '../sections/solutions/Visualization';

import TitleSection from '../sections/common/TitleSection';
import UseCasesSection from '../sections/solutions/UseCasesSection';
import OperationalAnalytics from '../sections/solutions/OperationalAnalytics';
import HowItWorks from '../sections/solutions/HowItWorks';

const styles = require('./index.module.css');

const resourceList = [
  {
    type: 'blog',
    title: 'Real-time analytics in the world of VR',
    description:
      'I work as a Data Engineer at a leading company in the VR space, with a mission to capture and transmit reality in perfect fidelity.',
    link: 'https://rockset.com/blog/real-time-analytics-virtual-reality-live-streaming/',
  },
  {
    type: 'blog',
    title: 'E-commerce monitoring using Kafka-Rockset',
    description:
      'By using Rockset on the critical path, Fynd can now obtain immediate insight into what consumers are doing on their platform...',
    link:
      'https://rockset.com/blog/fynd-e-commerce-portal-responds-to-consumer-behavior-in-real-time/',
  },
  {
    type: 'blog',
    title: 'How Rockset’s Kafka-Connect works',
    description:
      'We created the Kafka Connect Plugin for Rockset to export data from Kafka and send it to a collection of documents in Rockset. Learn how it works.',
    link: 'https://rockset.com/blog/kafka-connect-plugin-for-rockset/',
  },
  {
    type: 'how-to',
    title: 'Using SQL for real-time insights on Kafka events',
    description:
      'This post offers a how-to guide for real-time analytics using SQL on streaming data with Apache Kafka and Rockset.',
    link: 'https://rockset.com/blog/real-time-analytics-using-sql-on-streaming-data-kafka-rockset/',
  },
  {
    type: 'how-to',
    title: 'Live dashboards on Kinesis',
    description:
      'This blog shows how Rockset can serve a live dashboard, which surfaces analytics on real-time Twitter data ingested into Rockset from a Kinesis stream.',
    link: 'https://rockset.com/blog/live-dashboard-on-streaming-data-using-kinesis/',
  },
  {
    type: 'doc',
    title: 'How to use Kafka topics as data source',
    description:
      'Read up on how to securely connect Kafka topics with Rockset using Kafka-Connect plugin, and create collections which sync your data in real-time.',
    link: 'https://docs.rockset.com/apache-kafka/',
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
          title="SQL on Kafka | Rockset"
          titleTemplate="%s"
          keywords={[`rockset`, `data`, `apps`]}
          description={
            'Run complex SQL on Kafka data without any code or upfront schema definition. Join streaming data with enterprise data for real-time operational monitoring and analytics'
          }
        />
        {this.state.video && (
          <div>
            <div
              style={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                background: 'rgb(0, 0, 0, 0.7)',
                zIndex: 1001,
                cursor: 'pointer',
              }}
              onClick={() => {
                this.setState({ video: false });
              }}
            />
            <div className={styles.videoFrame}>
              <div className={styles.videoResponsive}>
                <iframe
                  src="https://www.youtube.com/embed/KBb10Ttxjcc?rel=0&controls=1&autoplay=0&mute=0&start=0"
                  frameBorder={0}
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'auto',
                  }}
                />
              </div>
            </div>
          </div>
        )}
        <Header activePage="sql-on-kafka" />
        <TitleSection
          background="/images/kafka-background.png"
          title="Convert Kafka Topics into SQL Tables"
          subtitle="Real-time APIs and operational monitoring dashboards on Apache Kafka"
        />
        <UseCasesSection
          title="Visualize, Analyze and Act on Event Streams"
          subtitle={`Rockset is a serverless search and analytics engine that turns Kafka
            topics into fast SQL tables without any code. Monitor event data in real
            time - simply using SQL. Rockset tails your Kafka topic, indexes every field
            and auto-schematizes your data, so you can query Kafka event streams and join
            them with other business data using SQL, in real time.`}
          dashboardsHeader="Operational monitoring"
          dashboardsText={`Get real-time visibility into what’s happening at every stage of your event-driven
            business. Join unstructured event data with business data and drill-down into
            issues as they occur. Visualize your operations using flexible SQL dashboard
            tools.`}
          appsHeader="APIs for Developers"
          appsText={`Power your internal tools and customer-facing applications using a SQL API on
            event data from Kafka. Empower your developers to build better applications,
            faster, by giving them real-time API access.`}
          useCaseHeader="Sensor data analytics"
          useCaseText={`Analyze sensor data in real-time, detect anomalies and trigger automation. Take
            the right actions at the right time by using Rockset's real-time sort, filter and
            search functionalities on raw sensor data at scale, without any ETL.`}
        />
        <OperationalAnalytics
          title="Operational Analytics on Data from Kafka"
          subtitle="Run ad hoc SQL queries that are not natively possible on event streams. Join event
          streams with data from other sources such as DynamoDB, S3, GCS and more, in real-time.
          New data is queryable in seconds and queries return in milliseconds, 
          powered by Rockset's converged indexing technology."
          section1Header="Continuously load streaming event data"
          section1Text="Rockset delivers low data latency through native integrations with Apache Kafka and Amazon Kinesis. Rockset's Confluent-verified Gold Kafka Connect Sink Connector streams events from Kafka topics into Rockset where the data is automatically indexed. Rockset builds inverted index, columnar index and row index on these events by using RocksDB. All events are time-stamped to help you deal with events arriving out of order. Set up time-based retention policies to automatically purge older events."
          section1Image="/images/kafka-create.png"
          section2Header="Explore event data as SQL tables without ETL"
          section2Text="Rockset enables millisecond SQL including joins, filters, aggregates and full text search on raw event data. It schemalessly ingests raw data, including nested JSON and Avro, and automatically represents them as SQL tables. New fields in Kafka records automatically create new SQL columns ensuring there is no schema drift. A SQL column can contain data of mixed types. Join, filter, aggregate across datasets without upfront schema definitions or schema registry."
          section2Image="/images/kafka-query.png"
          section3Header="Deliver real-time APIs & dashboards"
          section3Text="Rockset delivers low data latency and low query latency with cloud-native
          auto-scaling to handle bursty write rates or spikes in queries. Developers can
          programmatically access Rockset via Python, Java, Javascript, GO or REST APIs
          and live dashboards can use SQL clients like Tableau, Redash, Apache Superset or
          others via the JDBC connector."
          section3Image="/images/kafka-redash.png"
        />
        <HowItWorks
          subtitle="Rockset serves as a real-time sink that continuously ingests raw event data from Kafka
          or Kinesis for real-time event analytics. It uses converged indexing to deliver
          real-time SQL over REST with serverless auto-scaling under the hood."
          imgDesk="/images/rockset_flow.png"
          imgMobile="/images/rockset_flow_mobile.png"
        />
        <VisualizationTools />
        <ApiAccess />
        <VideoSection
          title="Powerful Analytics on Kafka Without Any ETL"
          playVideo={() => this.setState({ video: true })}
        />
        <Resources resourceList={resourceList} />
        <Customers />
        {/* Override defaults from blog page */}
        <MarginAdjuster style={{ marginBottom: 0, top: 0 }}>
          <GetStartedBanner>
            <GetStartedTitle>Try SQL on Kafka now</GetStartedTitle>
            <FormAccess code="kafka-landing-bottom" />
          </GetStartedBanner>
        </MarginAdjuster>
      </>
    );
  }
}
