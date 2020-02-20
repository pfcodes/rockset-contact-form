import React from 'react';
import cx from 'classnames';
import Header from '../components/header';
import Footer from '../components/footer';
import SEO from '../components/seo';

import whitepaper from '../images/whitepaper_top.png';
import rsProduct from '../images/Rockset-Product-02.png';
import iconPlay from '../images/Icon-play-white.png';
import videoBg from '../images/Screen-Shot-2019-01-04-at-11.56.07-AM.png';
import TitleSection from '../sections/common/TitleSection';

const styles = require('./resources.module.css');

const Item = ({ link, image, category, title, description, filter }) => (
  <div
    onClick={() => {
      window.open(link, '_blank');
    }}
    className={cx(styles.resourceTile, 'resource-tile')}
    style={{ display: filter === category || filter === 'All' ? 'block' : 'none' }}
  >
    <div data-ix="fade-in-on-scroll" className={styles.sectionTitle}>
      {category}
    </div>
    <div style={{ width: '100%', textAlign: 'center' }}>
      <img src={image} alt className={`resource-image ${styles.resourceImage}`} />
    </div>
    <h2 data-ix="fade-in-on-scroll" className="heading-3">
      {title}
    </h2>
    <div data-ix="fade-in-on-scroll" className={styles.sectionDescription}>
      {description}
    </div>
  </div>
);

const ItemVideo = ({ link, embed, category, title, description, filter }) => (
  <div
    onClick={() => {
      window.open(link, '_blank');
    }}
    className={cx(styles.resourceTile, 'resource-tile')}
    style={{ display: filter === category || filter === 'All' ? 'block' : 'none' }}
  >
    <div data-ix="fade-in-on-scroll" className={styles.sectionTitle}>
      {category}
    </div>
    <div
      style={{ paddingTop: '56.17021276595745%' }}
      id="w-node-5b8808d04e9e-47d1eaa7"
      className="w-embed-youtubevideo resource-image"
    >
      <iframe
        src={embed}
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
    <h2 data-ix="fade-in-on-scroll" className="heading-3">
      {title}
    </h2>
    <div data-ix="fade-in-on-scroll" className={styles.sectionDescription}>
      {description}
    </div>
  </div>
);

export default class ResourcesPage extends React.Component {
  state = {
    filter: 'All',
    filterToggled: false,
    video: false,
  };

  render() {
    return (
      <div>
        <SEO
          title="Resources"
          keywords={[`rockset`, `data`, `apps`]}
          description="Find out more about Rockset through case studies, how-to guides, white papers, webinars, videos, and podcasts."
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
                  className="embedly-embed"
                  src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FKBb10Ttxjcc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKBb10Ttxjcc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FKBb10Ttxjcc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                  width="640"
                  height="528"
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen="true"
                ></iframe>
              </div>
            </div>
          </div>
        )}
        <Header activePage="resources" />
        <div className="image-hero busines-2">
          <TitleSection
            title="Resources"
            subtitle="From podcasts to how-to guides, white papers and videos, find what you need below."
            background="/images/resources-bg.png"
            customCta="Watch the Demo"
            customCtaOnClick={() => this.setState({ video: true })}
            additonalContent={
              <div
                onClick={() => {
                  this.setState({ video: true });
                }}
                style={{ position: 'relative', cursor: 'pointer' }}
              >
                <img src={videoBg} width={452} alt className="image-7 primary-img" />
                <div style={{ backgroundColor: '#1a70b4' }} className="video-lightbox-button">
                  <img src={iconPlay} alt className="video-lightbox-icon" />
                </div>
              </div>
            }
          />
        </div>
        <div className="section">
          <div className="container-5 w-container">
            <h5 className="heading-7">Filter by Content Type:</h5>
            <div
              data-delay={0}
              className="w-dropdown"
              onClick={() => this.setState({ filterToggled: !this.state.filterToggled })}
            >
              <div className="dropdown-toggle-2 w-dropdown-toggle">
                <div className="icon w-icon-dropdown-toggle" />
                <div className="text-block-7">{this.state.filter}</div>
              </div>
              <nav
                className={`dropdown-list-2 w-dropdown-list ${
                  this.state.filterToggled ? 'w-open w--open' : ''
                }`}
              >
                <a
                  onClick={() => {
                    this.setState({ filter: 'All' });
                  }}
                  className="dropdown-link-3 dropdown-link-style w-dropdown-link"
                >
                  All
                </a>
                <a
                  onClick={() => {
                    this.setState({ filter: 'Case Study' });
                  }}
                  className="dropdown-link-style w-dropdown-link"
                >
                  Case Study
                </a>
                <a
                  onClick={() => {
                    this.setState({ filter: 'How-To Guide' });
                  }}
                  className="dropdown-link-style w-dropdown-link"
                >
                  How-To Guide
                </a>
                <a
                  onClick={() => {
                    this.setState({ filter: 'White Paper' });
                  }}
                  className="dropdown-link-style w-dropdown-link"
                >
                  White Paper
                </a>
                <a
                  onClick={() => {
                    this.setState({ filter: 'Webinar' });
                  }}
                  className="dropdown-link-style w-dropdown-link"
                >
                  Webinar
                </a>
                <a
                  onClick={() => {
                    this.setState({ filter: 'Video' });
                  }}
                  className="dropdown-link-style w-dropdown-link"
                >
                  Video
                </a>
                <a
                  onClick={() => {
                    this.setState({ filter: 'Podcast' });
                  }}
                  className="dropdown-link-style w-dropdown-link"
                >
                  Podcast
                </a>
              </nav>
            </div>
            <div className="div-block-9" />
          </div>
          <div className="container-3 w-container">
            <Item
              link="https://www.gotostage.com/channel/9d437b811ace4399bddc30d098fb8f46/recording/c3e5aca8c6c643938ee2bd9c75baefe0/watch"
              image="/images/dynamodb-tech-talk.png"
              category="Webinar"
              title="SQL on NoSQL - Enabling Real-Time Analytics on DynamoDB"
              description="This tech talk covers how change data capture with DynamoDB Streams can be used to enable complex queries for analytics."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/real-time-analytics-on-connected-car-iot-data-streams-from-apache-kafka/"
              image="/images/denys-nevozhai-7nrsVjvALnA-unsplash.jpg"
              category="How-To Guide"
              title="Real-Time Analytics on Connected Car IoT Data Streams from Apache Kafka"
              description="In this IoT example, we examine how to enable complex analytic queries on real-time Kafka streams from connected car sensors."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/standard-cognition-data-apis-and-real-time-metrics-for-vision-ai/"
              image="/images/standard-case-study.png"
              category="Case Study"
              title="Standard Cognition Uses Rockset to Deliver Data APIs and Real-Time Metrics for Vision AI"
              description="Standard Cognition, an AI-powered computer vision company, uses Rockset to enable their developers to deliver data APIs and product improvements."
              filter={this.state.filter}
            />
            <Item
              link="https://podcast.ctoconnection.com/episodes/balancing-coding-and-management-with-dhruba-borthakur"
              image="/images/ctoconnection-dhruba.png"
              category="Podcast"
              title="Balancing Coding And Management With Dhruba Borthakur"
              description="Dhruba shares his experience as Rockset CTO and how he still finds time to write code in addition to building a strong technical team."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/sql-api-for-real-time-kafka-analytics-in-3-steps/"
              image="/images/twitter-demo-blog-profile.png"
              category="How-To Guide"
              title="SQL API for Real-Time Kafka Analytics in 3 Steps"
              description="Learn how to create a SQL API for real-time Kafka analytics on the Twitter Streaming API, using AWS Lambda and Rockset."
              filter={this.state.filter}
            />
            <Item
              link="https://www.gotostage.com/channel/9d437b811ace4399bddc30d098fb8f46/recording/d55afc36aaa746efb0ddcb5680e1fc59/watch"
              image="/images/kafka-tech-talk-image.png"
              category="Webinar"
              title="Best Practices for Analyzing Kafka Event Streams"
              description="Dhruba Borthakur discusses various design patterns for building analytics on Kafka event streams in this tech talk."
              filter={this.state.filter}
            />
            <ItemVideo
              link="https://www.youtube.com/watch?v=dG5AExdxcoQ"
              embed="https://www.youtube.com/embed/dG5AExdxcoQ?rel=0&controls=1&autoplay=0&mute=0&start=0"
              category="Webinar"
              title="Rockset Demo Replay"
              description="Recorded version of our weekly live demo, where we go from raw data to real-time applications and dashboards, powered by Rockset."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/analytics-on-kafka-event-streams-using-druid-elasticsearch-and-rockset/"
              image="/images/event-analytics.png"
              category="How-To Guide"
              title="Analytics on Kafka Event Streams Using Druid, Elasticsearch and Rockset"
              description="We examine how different data backends - Druid, Elasticsearch and Rockset - can be used alongside Kafka for analytics on event data streams."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/tableau-kafka-real-time-sql-dashboard-on-streaming-data/"
              image="/images/blog30.png"
              category="How-To Guide"
              title="Using Tableau with Kafka: How to Build a Real-Time SQL Dashboard on Streaming Data"
              description="Build a real-time Tableau dashboard for operational monitoring and analytics on streaming event data from Kafka."
              filter={this.state.filter}
            />
            <Item
              link="https://www.dataengineeringpodcast.com/rockset-serverless-analytics-episode-101/"
              image="/images/data-engineering-podcast.jpeg"
              category="Podcast"
              title="Fast Analytics On Semi-Structured And Structured Data In The Cloud"
              description="Venkat Venkataramani and Shruti Bhat explain how Rockset is architected to allow for fast and flexible SQL analytics on your data."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/how-we-analyze-and-visualize-kubernetes-events-in-real-time-at-rockset/"
              image="/images/rockset-kubernetes-1.png"
              category="How-To Guide"
              title="How We Analyze and Visualize Kubernetes Events in Real Time at Rockset"
              description="Learn how we rolled our own tool for analysis and visualization of Kubernetes events, and try the open-source dashboard for yourself."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/outside-lands-airbnb-prices-and-rocksets-geospatial-queries/"
              image="/images/blog29.png"
              category="How-To Guide"
              title="Outside Lands, Airbnb Prices, and Rockset’s Geospatial Queries"
              description="How to use Rockset's fast geospatial indexes with Airbnb data."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/tableau-dynamodb-real-time-sql-dashboard-on-nosql-data/"
              image="/images/tableau-real-time-dashboard.png"
              category="How-To Guide"
              title="Using Tableau with DynamoDB: How to Build a Real-Time SQL Dashboard on NoSQL Data"
              description="We create an example dashboard in Tableau on data in DynamoDB, using Rockset as the SQL intelligence layer."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/3-cost-cutting-tips-for-amazon-dynamodb/"
              image="/images/symbol-3087573_1920.jpg"
              category="How-To Guide"
              title="3 cost-cutting tips for Amazon DynamoDB"
              description="How to avoid costly mistakes with DynamoDB partition keys, read/write capacity modes, and global secondary indexes."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/tableau-operational-dashboards-reporting-dynamodb-redshift-athena/"
              image="/images/tableau-dynamodb.png"
              category="How-To Guide"
              title="Tableau Operational Dashboards and Reporting on DynamoDB"
              description="We review several approaches to building operational dashboards and reporting on DynamoDB data, using SQL engines like Redshift and Athena."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/live-dashboards-dynamodb-streams-lambda-elasticache/"
              image="/images/dynamodb-dashboard.png"
              category="How-To Guide"
              title="Custom Live Dashboards on DynamoDB"
              description="We cover different approaches to live dashboards on DynamoDB, using DynamoDB Streams, Lambda, and ElastiCache."
              filter={this.state.filter}
            />
            <ItemVideo
              link="https://www.youtube.com/watch?v=tDgmtReLS8c"
              embed="https://www.youtube.com/embed/tDgmtReLS8c?rel=0&controls=1&autoplay=0&mute=0&start=0"
              category="Video"
              title="Tech Talk: ALT architecture for low-latency queries on large datasets"
              description="We present how the Aggregator-Leaf-Tailer architecture is used to implement Rockset's low-latency, serverless operational analytics engine."
              filter={this.state.filter}
            />
            <Item
              link="https://softwareengineeringdaily.com/2019/07/17/facebook-data-infrastructure-with-dhruba-borthakur/"
              image="/images/sedailylogo.png"
              category="Podcast"
              title="Facebook Data Infrastructure with Dhruba Borthakur"
              description="Dhruba joins the show to discuss his time at Facebook building data infrastructure. He takes us through the major projects he worked on."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/redshift-with-rockset-high-performance-queries-for-operational-analytics/"
              image="/images/redshift4.png"
              category="How-To Guide"
              title="Redshift with Rockset: High performance queries for operational analytics"
              description="Run high-performance queries on data from Redshift tables by continuously ingesting and indexing Redshift data through a Rockset-Redshift integration."
              filter={this.state.filter}
            />
            <ItemVideo
              link="https://www.youtube.com/watch?v=D3OUbQMxmcI"
              embed="https://www.youtube.com/embed/D3OUbQMxmcI?rel=0&controls=1&autoplay=0&mute=0&start=0"
              category="Video"
              title="Data Council SF 19: Architecting a Low-Latency Schemaless SQL Engine"
              description="Learn about the challenges when adapting SQL to principles of strong dynamic typing and the idea of full converged indexing."
              filter={this.state.filter}
            />
            <Item
              link="https://developeronfire.com/podcast/episode-427-venkat-venkataramani-valuing-people"
              image="/images/developeronfire.png"
              category="Podcast"
              title="Venkat Venkataramani - Valuing People"
              description="Venkat Venkataramani talks with Dave Rael about leadership, humility, contribution, commitment to doing the right things, and valuing people over software and data."
              filter={this.state.filter}
            />
            <Item
              link="https://www.oreilly.com/ideas/bringing-scalable-real-time-analytics-to-the-enterprise"
              image="/images/oreilly.png"
              category="Podcast"
              title="Bringing Scalable Real-Time Analytics to the Enterprise"
              description="Dhruba Borthakur and Shruti Bhat share how Rockset is bringing operational analytics to the enterprise by simplifying data architecture in the cloud."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/using-tableau-for-live-dashboards-on-event-data/"
              image="/images/tableau-live-dashboard-1.png"
              category="How-To Guide"
              title="Using Tableau for Live Dashboards on Event Data"
              description="Connect a Tableau live dashboard to a real-time event stream of complex JSON in a few easy steps."
              filter={this.state.filter}
            />
            <Item
              link="https://dmradio.dataversity.net/up-and-coming-three-startups-with-amazing-potential/"
              image="/images/news-dmradio.png"
              category="Podcast"
              title="Up and Coming: Three Startups with Amazing Potential"
              description="Venkat Venkataramani discusses how Rockset is innovating in cloud data management to minimize the effort needed to get from data to apps."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/full-uses-rockset-with-dynamodb-for-live-dashboard/"
              image="/images/dynamodb-rockset-live-dashboard-blog.png"
              category="Case Study"
              title="FULL Uses Rockset with DynamoDB for Live Dashboard to Manage Remote Workforce"
              description="FULL Creative uses Rockset to build live dashboards and run complex SQL on contact center call data in DynamoDB."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/building-a-serverless-analytics-app-to-capture-and-query-clickstream-data/"
              image="/images/binary-survey.png"
              category="How-To Guide"
              title="Building a Serverless Analytics App to Capture and Query Clickstream Data"
              description="We built a web app that collects clickstream data as free-form JSON and runs SQL queries on the live data in a completely serverless fashion."
              filter={this.state.filter}
            />
            <ItemVideo
              link="https://www.youtube.com/watch?v=MX2zNg2ciRU"
              embed="https://www.youtube.com/embed/MX2zNg2ciRU?rel=0&controls=1&autoplay=0&mute=0&start=0"
              category="Video"
              title="NorCalDB2019: Powering fast SQL over semi-structured data in Rockset"
              description="We discuss and demonstrate some of the key aspects of Rockset: strong dynamic typing, converged indexing, and continuous auto-scaling."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/case-study-decore-uses-rockset-for-search-and-analytics-on-dynamodb/"
              image="/images/decore-dynamodb-rockset-blog.png"
              category="Case Study"
              title="Decore Uses Rockset for Search & Analytics on DynamoDB"
              description="Decore needed to enable ad hoc queries in their crypto accounting software service, so they turned to Rockset for fast analytics on DynamoDB."
              filter={this.state.filter}
            />
            <ItemVideo
              link="https://www.youtube.com/watch?v=vomEmxpa7no"
              embed="https://www.youtube.com/embed/vomEmxpa7no?rel=0&controls=1&autoplay=0&mute=0&start=0"
              category="Video"
              title="Kafka Meetup: Operational Analytics on Event Streams in Kafka"
              description="We demonstrate how to create stateful microservices to analyze event streams using Kafka and Rockset."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/analytics-on-dynamodb-athena-spark-elastic/"
              image="/images/analytics-dynamoDB.jpg"
              category="How-To Guide"
              title="Analytics on DynamoDB: Comparing Athena, Spark and Elastic"
              description="We compare options for real-time analytics on DynamoDB in terms of ease of setup, maintenance, query capability, and latency."
              filter={this.state.filter}
            />
            <ItemVideo
              link="https://www.youtube.com/watch?v=XsDXAecUIb4"
              embed="https://www.youtube.com/embed/XsDXAecUIb4?rel=0&controls=1&autoplay=0&mute=0&start=0"
              category="Video"
              title="Strata 2019: A Data System for Low-Latency Queries for Search and Analytics"
              description="Learn how Rockset's converged indexing—combining columnar and search indexes—powers fast search and analytics."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/fynd-e-commerce-portal-responds-to-consumer-behavior-in-real-time/"
              image="/images/blog21.png"
              category="Case Study"
              title="Fynd - How Does a Growing E-Commerce Portal Respond to Consumer Behavior in Real Time?"
              description="Fynd uses Rockset to perform fast queries on real-time event streams, so they can react to consumer behavior as it happens."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/the-path-to-better-pollution-forecasting-goes-through-nested-json/"
              image="/images/blog22.png"
              category="Case Study"
              title="The Path to Better Pollution Forecasting Goes Through Nested JSON"
              description="Pittsburgh-based developer, Doug Balog, collects and analyzes nested JSON weather data to improve pollution forecasts in his community."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/implementing-a-smart-city-sensor-network-simply-and-efficiently/"
              image="/images/blog23.png"
              category="Case Study"
              title="Implementing a Sensor Network Simply and Efficiently - An MIT Smart City Project"
              description="An MIT team collaborates with a school in Brazil on a smart city project to analyze weather sensor data using Rockset."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/how-to-build-a-facebook-messenger-chatbot-powered-by-fast-sql-on-csv/"
              image="/images/blog20.png"
              category="How-To Guide"
              title="How to Build a Facebook Messenger Chatbot Powered by Fast SQL on CSV"
              description="Build a chatbot that provides instant responses, leveraging fast SQL queries on CSV data."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/using-smart-schema-to-accelerate-insights-from-nested-json/"
              image="/images/blog17.png"
              category="How-To Guide"
              title="Using Smart Schema to Accelerate Insights from Nested JSON"
              description="Use Rockset's Smart Schema to understand complex, nested JSON and enable immediate queries using SQL on raw data."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/how-to-run-sql-on-pdf-files/"
              image="/images/blog18.png"
              category="How-To Guide"
              title="How to Run SQL on PDF Files"
              description="Run SQL queries on data from PDF files, and join PDFs with JSON, CSV, XLSX, and other data."
              filter={this.state.filter}
            />
            <Item
              link="https://softwareengineeringdaily.com/2019/02/05/rocksdb-with-dhruba-borthakur-and-igor-canadi/"
              image="/images/sedailylogo.png"
              category="Podcast"
              title="RocksDB with Dhruba Borthakur and Igor Canadi"
              description="Dhruba and Igor explain the technology behind RocksDB, which backs some of the most demanding applications and databases around."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/visualize-data-in-rockset-with-redash/"
              image="/images/blog13.png"
              category="How-To Guide"
              title="Visualize Data in Rockset with Redash"
              description="Create visualizations on your Rockset data quickly and easily using native integration with Redash."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/running-fast-sql-on-dynamodb-tables/"
              image="/images/blog12.png"
              category="How-To Guide"
              title="Running Fast SQL on DynamoDB Tables"
              description="Run SQL queries on your DynamoDB tables without any ETL and without impacting your production workloads."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/rockset-adds-excel-spreadsheet-support-use-sql-across-multiple-xlsx-files/"
              image="/images/blog11.png"
              category="How-To Guide"
              title="Rockset adds Excel spreadsheet support"
              description="Run complex SQL across multiple Excel spreadsheets and join XLSX files with JSON, Parquet or CSV data."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/real-time-analytics-using-sql-on-streaming-data-kafka-rockset/"
              image="/images/blog10.png"
              category="How-To Guide"
              title="Real-Time Analytics Using SQL on Streaming Data with Apache Kafka and Rockset"
              description="Connect Kafka and Rockset to obtain real-time analytics with ad hoc SQL queries on event streams."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/building-a-serverless-microservice-using-rockset-and-aws-lambda/"
              image="/images/blog8.png"
              category="How-To Guide"
              title="Building a Serverless Microservice Using Rockset and AWS Lambda"
              description="Use SQL to join and query JSON and CSV data, and build a serverless microservice using AWS Lambda."
              filter={this.state.filter}
            />
            <Item
              link="https://softwareengineeringdaily.com/2018/12/21/rockset-data-platform-with-venkat-venkataramani/"
              image="/images/sedailylogo.png"
              category="Podcast"
              title="Rockset Data Platform with Venkat Venkataramani"
              description="Venkat discusses his journey from scaling data infrastructure at Facebook to transforming how data-driven apps are built at Rockset."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/live-dashboard-on-streaming-data-using-kinesis/"
              image="/images/blog7.png"
              category="How-To Guide"
              title="Building a Live Dashboard on Streaming Data Using Amazon Kinesis and Rockset"
              description="Serve real-time analytics on Twitter data, using SQL on streaming data from Amazon Kinesis."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/blog/running-sql-on-nested-json/"
              image="/images/blog6.png"
              category="How-To Guide"
              title="Running SQL on Nested JSON"
              description="Make raw JSON immediately queryable through fast SQL queries, without ETL, data pipelines, or fixed schema."
              filter={this.state.filter}
            />
            <Item
              link="https://www.thecloudcast.net/2018/11/revolutionizing-big-data-apps.html"
              image="/images/cloudcast.jpeg"
              category="Podcast"
              title="Revolutionizing Big Data Apps"
              description="Rockset CEO Venkat Venkataramani talks about building apps without pipelines, and serverless search and analytics with native SQL."
              filter={this.state.filter}
            />
            <ItemVideo
              link="https://www.youtube.com/watch?v=X8B0uRSzz0g"
              embed="https://www.youtube.com/embed/X8B0uRSzz0g?rel=0&controls=1&autoplay=0&mute=0&start=0"
              category="Video"
              title="From Useful Data to Useful Applications with Rockset"
              description="Rockset CEO Venkat Venkataramani explains how Rockset makes it really simple to build data-driven apps with very fast SQL on raw data."
              filter={this.state.filter}
            />
            <ItemVideo
              link="https://www.youtube.com/watch?v=SMr7W4eAXaM"
              embed="https://www.youtube.com/embed/SMr7W4eAXaM?rel=0&controls=1&autoplay=0&mute=0&start=0"
              category="Video"
              title="Speeding Cloud-Native App Development with Rockset"
              description="Rockset CTO Dhruba Borthakur speaks with ActualTech about what Rockset does and how it changes the game for enterprises."
              filter={this.state.filter}
            />
            <ItemVideo
              link="https://www.youtube.com/watch?v=k3N6lNJHznw"
              embed="https://www.youtube.com/embed/k3N6lNJHznw?rel=0&controls=1&autoplay=0&mute=0&start=0"
              category="Video"
              title="CUBEConversation: Venkat Venkataramani, Rockset & Jerry Chen, Greylock"
              description="Venkat and Jerry discuss Rockset's vision and the future of cloud and data."
              filter={this.state.filter}
            />
            <Item
              link="https://www.gotostage.com/channel/9d437b811ace4399bddc30d098fb8f46/recording/6e03dc5bf38c4b07aead0d53ea8f4c1b/watch"
              image={rsProduct}
              category="Webinar"
              title="Building Live Apps on Raw Data with Rockset"
              description="As the first cloud service that runs SQL directly on raw data, Rockset greatly simplifies app development and data science on complex data sets."
              filter={this.state.filter}
            />
            <Item
              link="https://rockset.com/Rockset_Concepts_Design_Architecture.pdf"
              image={whitepaper}
              category="White Paper"
              title="Rockset Concepts, Design & Architecture"
              description="Learn how Rockset's architecture enables highly parallelized execution of complex queries across diverse data sets."
              filter={this.state.filter}
            />
          </div>
        </div>
      </div>
    );
  }
}
