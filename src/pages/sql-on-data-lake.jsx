import * as React from 'react';
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
    title: 'How to Do Data Science Using SQL on Raw JSON',
    description:
      'Learn how an investment management firm used Rockset to analyze complex, third-party data sets from Amazon S3.',
    link: 'https://rockset.com/blog/how-to-do-data-science-using-sql-on-raw-json/',
  },
  {
    type: 'blog',
    title: 'From Schemaless Ingest to Smart Schema: Enabling SQL on Raw Data',
    description:
      'Rockset allows schemaless ingest from data lakes, and turns raw data into SQL tables for fast analytics.',
    link:
      'https://rockset.com/blog/from-schemaless-ingest-to-smart-schema-enabling-sql-on-raw-data/',
  },
  {
    type: 'blog',
    title: 'Serverless Data Management: A SQL Search and Analytics Engine',
    description:
      'Use Rockset in conjunction with cloud object stores like Amazon S3 and Google Cloud Storage.',
    link: 'https://rockset.com/blog/serverless-data-management-a-sql-search-and-analytics-engine/',
  },
  {
    type: 'how-to',
    title: 'Building a Serverless Microservice Using Rockset and AWS Lambda',
    description:
      'Use SQL to join and query JSON and CSV data from Amazon S3 and Kinesis to build a serverless microservice.',
    link:
      'https://rockset.com/blog/building-a-serverless-microservice-using-rockset-and-aws-lambda/',
  },
  {
    type: 'docs',
    title: 'How to use Amazon S3 as a data source',
    description:
      'Learn how to securely connect Amazon S3 with Rockset and create collections that sync your data in real time.',
    link: 'https://docs.rockset.com/amazon-s3/',
  },
  {
    type: 'docs',
    title: 'How to use Google Cloud Storage as a data source',
    description:
      'Learn how to securely connect Google Cloud Storage with Rockset and create collections that sync your data in real time.',
    link: 'https://docs.rockset.com/google-cloud-storage/',
  },
];

export default class DataLakeLandingPage extends React.Component {
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
          title="SQL on S3 or GCS | Rockset"
          titleTemplate="%s"
          keywords={[`rockset`, `data`, `apps`]}
          description={
            'Run fast SQL to aggregate, filter, and join data from data lakes like Amazon S3 or Google Clouse Storage without having to specify a schema, perform ETL, or create and maintain secondary indexes'
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
        <Header activePage="sql-on-data-lake" />
        <TitleSection
          title="SQL Search and Analytics for Your Data Lake"
          subtitle="Real-time APIs and dashboards on Amazon S3 and Google Cloud Storage "
          background="/images/data-lake.png"
        />
        <UseCasesSection
          title="Analyze Raw Data as It Lands in Your Data Lake"
          subtitle="Rockset is a fully managed service that enables real-time search and analytics on raw data from Amazon S3 and Google Cloud Storage – with full featured SQL. Rockset takes an entirely new approach to loading, analyzing and serving data so that you can run powerful SQL analytics on data from your data lake without ETL."
          dashboardsHeader="Real-time dashboards"
          dashboardsText="To make live dashboards possible, Rockset reflects new data in seconds and delivers query responses in milliseconds. To bring interactive dashboards and drilldowns to life, Rockset supports high concurrency and thousands of queries per second."
          appsHeader="Data as an API"
          appsText="APIs are a critical part of the strategy for fast-moving developers building on a global scale. Rockset uses an API-first approach so you can deliver your data as an API and allow your developers to build applications faster."
          useCaseHeader="Analytics on primary database"
          useCaseText="Stream data from any transactional database to your data lake, and Rockset will automatically pick up new data as it lands and deliver real-time SQL analytics on your latest business data."
          lakes={true}
        />
        <OperationalAnalytics
          title="Operational Analytics on Data in Your Data Lake"
          subtitle="Run fast SQL analytics on data collected in your data lake without requiring upfront schema definition or ETL. As new data lands in your data lake, it becomes queryable in seconds in Rockset. Queries return in milliseconds, so performance is no longer a limiting factor."
          section1Header="Load continuously from your data lake"
          section1Text="Rockset delivers low data latency through native integrations with S3 and GCS. Rockset initially batch loads data from S3 or GCS, then switches to continuous ingest to stay in sync, with no more than few seconds delay. It automatically monitors to ensure consistency between S3/GCS and Rockset and purges old data using time-based retention policies. No ETL tools like AWS Glue required."
          section1Image="/images/s3-collection.png"
          section2Header="Explore unstructured data as SQL tables"
          section2Text="Rockset enables millisecond SQL including joins, filters, aggregates and full text search. It schemalessly ingests raw data, including nested JSON, and represents them as SQL tables that automatically adapt to any changes in the data from your data lake. Join, filter, aggregate across datasets without upfront schema definitions."
          section2Image="/images/dynamo-query.png"
          section3Header="Deliver real-time APIs & dashboards"
          section3Text="Rockset delivers low query latency with cloud-native auto-scaling and performance isolation. Real-time applications can programmatically access Rockset via Python, Java, Javascript, GO or REST APIs and live dashboards can use SQL clients like Tableau, Redash, Apache Superset or others via the JDBC connector. Deploy operational analytics in production without staging in temporary databases."
          section3Image="/images/dynamo-dash.png"
        />
        <HowItWorks
          subtitle="Rockset continuously ingests data from S3 or GCS so you don't have to manage ETL pipelines. It uses converged indexing to deliver real-time SQL over REST with serverless auto-scaling under the hood."
          imgDesk="/images/lakes-pipeline.png"
          imgMobile="/images/lakes-pipeline.png"
        />
        <VisualizationTools />
        <ApiAccess />
        <VideoSection
          title="Powerful Analytics on Your Data Lake Without Any ETL"
          playVideo={() => this.setState({ video: true })}
        />
        <Resources resourceList={resourceList} />
        <Customers />
        {/* Override defaults from blog page */}
        <MarginAdjuster style={{ marginBottom: 0, top: 0 }}>
          <GetStartedBanner>
            <GetStartedTitle>Try SQL on S3 or GCS now</GetStartedTitle>
            <FormAccess code="data-lake-landing-bottom" />
          </GetStartedBanner>
        </MarginAdjuster>
      </>
    );
  }
}
