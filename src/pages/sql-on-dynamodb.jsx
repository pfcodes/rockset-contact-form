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
    title: 'Comparing options for analytics on DynamoDB',
    description:
      'A comparison of real-time analytics options on DynamoDB - Athena, Spark and Elastic - in terms of ease of setup, maintenance and query capability.',
    link: 'https://rockset.com/blog/analytics-on-dynamodb-athena-spark-elastic/',
  },
  {
    type: 'blog',
    title: 'Custom live dashboards on DynamoDB',
    description:
      'Live dashboards are used to support mission- critical decisions on real-time data. We cover different approaches to live dashboards on DynamoDB.',
    link: 'https://rockset.com/blog/live-dashboards-dynamodb-streams-lambda-elasticache/',
  },
  {
    type: 'blog',
    title: 'Standard BI dashboards on DynamoDB',
    description:
      'We review several approaches to building operational dashboards and reporting, using standard BI tools like Tableau, on DynamoDB data.',
    link:
      'https://rockset.com/blog/tableau-operational-dashboards-reporting-dynamodb-redshift-athena/',
  },
  {
    type: 'how-to',
    title: 'Using Tableau with DynamoDB',
    description:
      'We will demonstrate how you can build an interactive dashboard with Tableau, using SQL on data from DynamoDB, in a series of easy steps, with no ETL involved.',
    link: 'https://rockset.com/blog/tableau-dynamodb-real-time-sql-dashboard-on-nosql-data/',
  },
  {
    type: 'how-to',
    title: 'Running Fast SQL on DynamoDB Tables',
    description:
      'Have you ever wanted to run SQL queries on Amazon DynamoDB tables without impacting your production workloads? Learn how in this guide.',
    link: 'https://rockset.com/blog/running-fast-sql-on-dynamodb-tables/',
  },
  {
    type: 'doc',
    title: 'How to use DynamoDB tables as data source',
    description:
      'Read up on how to securely connect DynamoDB tables in your AWS account with Rockset and create collections which sync your data in real time.',
    link: 'https://docs.rockset.com/amazon-dynamodb/',
  },
];

export default class DynamoDbLandingPage extends React.Component {
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
          title="SQL on DynamoDB | Rockset"
          titleTemplate="%s"
          keywords={[`rockset`, `data`, `apps`]}
          description={
            'Run fast SQL to aggregate, filter, and join DynamoDB data without having to specify a schema, perform ETL, or create and maintain secondary indexes'
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
        <Header activePage="sql-on-dynamodb" />
        <TitleSection
          title="SQL Search and Analytics for Amazon DynamoDB"
          subtitle="Real-time APIs and dashboards on DynamoDB"
          background="/images/dynamo-bg.png"
        />
        <UseCasesSection
          title="Powerful Analytics on DynamoDB Without Any ETL"
          subtitle="Rockset is a fully managed service that enables real-time search and
            analytics on raw data from Amazon DynamoDB – with full featured SQL. Rockset
            takes an entirely new approach to loading, analyzing and serving data so that
            you can run powerful SQL analytics on data from DynamoDB without ETL."
          dashboardsHeader="Real-time dashboards"
          dashboardsText="To make live dashboards possible, Rockset reflects new data in seconds and delivers query responses in milliseconds. To bring interactive dashboards and drilldowns to life, Rockset supports high concurrency and thousands of queries per second."
          appsHeader="Data as an API"
          appsText="APIs are a critical part of the strategy for fast-moving developers building on a global scale. Rockset uses an API-first approach so you can deliver your data as an API and allow your developers to build applications faster."
          useCaseHeader="Recommendation engines"
          useCaseText="Combine real-time behavioral data with historical data. Infer user preferences in real time. Personalize user experiences by recommending the right actions at the right time by using Rockset's real-time sort, filter and search functionality."
        />
        <OperationalAnalytics
          title="Operational Analytics on Data from DynamoDB"
          subtitle="As an operational data store optimized for transactions, DynamoDB is not well suited for analytics. Use Rockset to run powerful ad hoc analytical queries that are not possible on DynamoDB. New data is queryable in seconds and queries return in milliseconds, so performance is no longer a limiting factor."
          section1Header="Continuously load data from DynamoDB"
          section1Text="Rockset delivers low data latency through native integration with DynamoDB. Rockset initially batch loads data from DynamoDB, then switches to continuous tailing to stay in sync, with no more than few seconds delay. It automatically monitors to ensure consistency between DynamoDB and Rockset and purges old data using time-based retention policies. No ETL tools like AWS Glue required."
          section1Image="/images/dynamo-create-2.png"
          section2Header="Explore unstructured data as SQL tables"
          section2Text="Rockset enables millisecond SQL including joins, filters, aggregates and full text search. It schemalessly ingests raw data, including nested JSON, and represents them as SQL tables that automatically adapt to any data changes in DynamoDB. Join, filter, aggregate across datasets without upfront schema definitions."
          section2Image="/images/dynamo-query.png"
          section3Header="Deliver real-time APIs & dashboards"
          section3Text="Rockset delivers low query latency with cloud-native auto-scaling and performance isolation. Real-time applications can programmatically access Rockset via Python, Java, Javascript, GO or REST APIs and live dashboards can use SQL clients like Tableau, Redash, Apache Superset or others via the JDBC connector. Deploy operational analytics in production without staging in temporary databases."
          section3Image="/images/dynamo-dash.png"
        />
        <HowItWorks
          subtitle="Rockset continuously tails DynamoDB so you don't have to manage ETL pipelines. It uses converged indexing to deliver real-time SQL over REST with serverless auto-scaling under the hood."
          imgDesk="/images/Dynamo flow chart@2x.png"
          imgMobile="/images/Dynamo flow chart@2x.png"
        />
        <VisualizationTools />
        <ApiAccess />
        <VideoSection
          title="Powerful Analytics on DynamoDB Without Any ETL"
          playVideo={() => this.setState({ video: true })}
        />
        <Resources resourceList={resourceList} />
        <Customers />
        {/* Override defaults from blog page */}
        <MarginAdjuster style={{ marginBottom: 0, top: 0 }}>
          <GetStartedBanner>
            <GetStartedTitle>Try SQL on DynamoDB now</GetStartedTitle>
            <FormAccess code="dynamodb-landing-bottom" />
          </GetStartedBanner>
        </MarginAdjuster>
      </>
    );
  }
}
