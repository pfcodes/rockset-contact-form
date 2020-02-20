import React from 'react';
import cx from 'classnames';
import SEO from '../components/seo';
import Header from '../components/header';
import VisualCode from '../components/visual-code';
import VisualQuery from '../components/visual-query';
import VisualSchema from '../components/visual-schema';
import styles from './product.module.css';

import Asset62x from '../images/Asset-62x.png';
import Asset182x from '../images/Asset-182x.png';
import Asset112x from '../images/Asset-112x.png';
import Asset242x from '../images/Asset-242x.png';
import Asset302x from '../images/Asset-302x.png';
import Asset262x from '../images/Asset-262x.png';
import Asset272x from '../images/Asset-272x.png';
import Asset282x from '../images/Asset-282x.png';
import Asset292x from '../images/Asset-292x.png';
import Asset312x from '../images/Asset-312x.png';
import Asset382x from '../images/Asset-382x.png';
import Asset332x from '../images/Asset-332x.png';
import Asset342x from '../images/Asset-342x.png';
import Asset362x from '../images/Asset-362x.png';
import Asset352x from '../images/Asset-352x.png';
import productDiagram from '../images/productDiagram.svg';
import i212x from '../images/212x.png';
import createRetention from '../images/create-retention.png';
import whitePaperImage from '../images/whitepaper.png';
import TitleSection from '../sections/common/TitleSection';

export default class ProductPage extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="Product"
          keywords={[`rockset`, `data`, `apps`]}
          description="Rockset provides millisecond-latency SQL on JSON, XML, and Parquet from databases and streams, without requiring schemas or ETL."
        />
        <Header activePage="product" />
        <div>
          <TitleSection
            title="Power Live Apps on Complex Data"
            subtitle="Accelerate app development with fast SQL directly on raw data"
            background="/images/product-bg.png"
          />
          <div className="section feature-section">
            <div className={cx(styles.subheaderText, 'container above-image-section w-container')}>
              <h2 className="section-title-product">Ingest, Query, Build</h2>
              <div className="section-description">
                Rockset is a real-time database in the cloud, built to serve live applications and
                interactive dashboards.
                <br />
              </div>
              <div className="feature-info-row w-row">
                <div className="feature-info-column w-col w-col-4">
                  <div className="feature-info-block w-clearfix">
                    <img
                      src={Asset62x}
                      alt
                      className={'feature-info-icon ' + styles['ingest-product-icon']}
                    />
                    <div className="feature-info-title">
                      Ingest
                      <br />
                    </div>
                    <p className="feature-info-paragraph">
                      Ingest raw data without fixed schema. Continuous sync of new data. No complex
                      pipelines needed. <br />
                    </p>
                  </div>
                </div>
                <div className="feature-info-column w-col w-col-4">
                  <div className="feature-info-block w-clearfix">
                    <img
                      src={Asset182x}
                      alt
                      className={'feature-info-icon ' + styles['query-product-icon']}
                    />
                    <div className="feature-info-title">
                      Query
                      <br />
                    </div>
                    <p className="feature-info-paragraph">
                      Use full-featured SQL, including JOINs. Millisecond-latency queries enabled by
                      automatic indexes on all fields.
                    </p>
                  </div>
                </div>
                <div className="feature-info-column w-col w-col-4">
                  <div className="feature-info-block w-clearfix">
                    <img src={Asset112x} alt className="feature-info-icon" />
                    <div className="feature-info-title">
                      Build
                      <br />
                    </div>
                    <p className="feature-info-paragraph">
                      Serve fast queries that power the apps you build. Scale without worrying about
                      servers, shards, or pagers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="use-cases" className="image-section">
            <div className="image-section-overlay-product color">
              <div className="container w-container">
                <div className="section-title-wrapper full">
                  <h2 className="section-title">Use Cases</h2>
                </div>
                <div data-ix="fade-in-on-load-2" className="page-subtitle">
                  Go from raw data to rich interactive applications without complex data
                  infrastructure. &nbsp;&nbsp;
                  <br />
                  <br />
                </div>
                <div className={cx(styles.infoRow, 'feature-info-row w-row')}>
                  <div className="feature-info-column w-col w-col-4">
                    <div className="feature-info-block w-clearfix">
                      <img src={Asset242x} alt className="feature-info-icon" />
                      <div className="feature-info-title">
                        Personalization
                        <br />
                      </div>
                      <p className="feature-info-paragraph">
                        <b>Combine</b> behavioral & historical data
                        <br />
                        <b>Infer</b> user preferences in real-time
                        <br />
                        <b>Personalize</b> user experience
                      </p>
                    </div>
                  </div>
                  <div className="feature-info-column w-col w-col-4">
                    <div className="feature-info-block w-clearfix">
                      <img src={Asset302x} alt className="feature-info-icon" />
                      <div className="feature-info-title">
                        IoT
                        <br />
                      </div>
                      <p className="feature-info-paragraph">
                        <b>Ingest</b> time-series data streams <br />
                        <b>Analyze</b> highly dimensional data <br />
                        <b>Build</b> live apps &amp; analytics
                      </p>
                    </div>
                  </div>
                  <div className="feature-info-column w-col w-col-4">
                    <div className="feature-info-block w-clearfix">
                      <img src={Asset262x} alt className="feature-info-icon" />
                      <div className="feature-info-title">
                        Business Operations
                        <br />
                      </div>
                      <p className="feature-info-paragraph">
                        <b>Create</b> unified index across silos
                        <br />
                        <b>Search</b> and aggregate instantly <br />
                        <b>Automate</b> marketing &amp; support ops
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx(styles.infoRow, 'feature-info-row w-row')}>
                  <div className="feature-info-column w-col w-col-4">
                    <div className="feature-info-block w-clearfix">
                      <img src={Asset272x} alt className="feature-info-icon" />
                      <div className="feature-info-title">
                        Data Science
                        <br />
                      </div>
                      <p className="feature-info-paragraph">
                        <b>Load</b> data without ETL <br />
                        <b>Explore</b> using interactive notebooks <br />
                        <b>Accelerate</b> data science workflows
                      </p>
                    </div>
                  </div>
                  <div className="feature-info-column w-col w-col-4">
                    <div className="feature-info-block w-clearfix">
                      <img src={Asset282x} alt className="feature-info-icon" />
                      <div className="feature-info-title">
                        Security Analytics
                        <br />
                      </div>
                      <p className="feature-info-paragraph">
                        <b>Index</b> real-time security events
                        <br />
                        <b>Detect</b> patterns with ad hoc queries
                        <br />
                        <b>Improve</b> threat intel & prevention
                      </p>
                    </div>
                  </div>
                  <div className="feature-info-column w-col w-col-4">
                    <div className="feature-info-block w-clearfix">
                      <img src={Asset292x} alt className="feature-info-icon" />
                      <div className="feature-info-title">
                        Machine Learning
                        <br />
                      </div>
                      <p className="feature-info-paragraph">
                        <b>Load</b> data without ETL <br />
                        <b>Extract</b> features from complex data
                        <br />
                        <b>Build</b> more effective models
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section feature-section">
            <div className="full-hero-content-block-2">
              <h1 data-ix="fade-in-on-load" className="overall-hero-title">
                <strong>Engineered for the Cloud</strong>
              </h1>
              <p data-ix="fade-in-on-load-2" className="overall-hero-description">
                Rockset was born in the cloud, not the data center. We harness cloud economics by
                auto-scaling ingest, storage, and query processing to provide optimal
                price-performance. <br />
              </p>
              <img src={productDiagram} alt className={styles.productDiagram} />
            </div>
          </div>
          <div id="intro" className="section feature-section odd">
            <div className="container w-container">
              <h2 className="main-feature-title">Key Features</h2>
              <div className="paragraph page-subtitle">
                Ingest any data, query using standard SQL, and build live apps—all in a single cloud
                service.
                <br />
              </div>

              <div className={styles.featureRow}>
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>Schemaless Ingest</div>
                  <p className={styles.featureDescription}>
                    Connect to our growing list of supported data sources. Ingest in real time
                    without a fixed schema. No pipelines or ETL needed.{' '}
                  </p>
                </div>
                <div className={styles.featureAsset}>
                  <img src={i212x} style={{ width: '80%', marginLeft: '10%' }} />
                </div>
              </div>
              <div className={styles.featureRow}>
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>Smart Schemas</div>
                  <p className={styles.featureDescription}>
                    Store any data without upfront schema design. Rockset automatically infers the
                    schema and enables strongly typed queries on dynamically typed fields.{' '}
                  </p>
                </div>
                <div className={styles.featureAsset}>
                  <VisualSchema />
                </div>
              </div>
              <div className={styles.featureRow}>
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>Operational-Speed SQL</div>
                  <p className={styles.featureDescription}>
                    Run fast SQL, including joins, filters, and aggregates. Enabled by distributed
                    query processing on search, columnar, and document indexes backed by
                    RocksDB-Cloud.{' '}
                  </p>
                </div>
                <div className={styles.featureAsset}>
                  <div className="bx--tile" style={{ padding: '0px' }}>
                    <VisualQuery page="product" />
                  </div>
                </div>
              </div>
              <div className={styles.featureRow}>
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>Time-Based Retention</div>
                  <p className={styles.featureDescription}>
                    Retain weeks or months of events. High-performance time-based filtering,
                    sorting, and aggregations—accelerated by native support for time-series data.
                  </p>
                </div>
                <div className={styles.featureAsset}>
                  <div className="bx--tile" style={{ padding: '0px' }}>
                    <img
                      src={createRetention}
                      style={{
                        width:
                          '470px' /*, borderWidth: "12px 2px 2px",
                                                                                    borderStyle: "solid",
                                                                                    borderColor: "#D8D8D8",
                                                                                    borderImage: "initial",
                                                                                    borderRadius: "6px 6px 4px 4px"
                                                                                  */,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.featureRow}>
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>Easy-To-Use APIs</div>
                  <p className={styles.featureDescription}>
                    Build apps, microservices, live dashboards and data science notebooks. Use your
                    choice of Python, Java, JavaScript, and Go client libraries, or our REST APIs.{' '}
                    <br />
                  </p>
                </div>
                <div className={styles.featureAsset}>
                  <VisualCode type="build" />
                </div>
              </div>
            </div>
          </div>
          <div className="image-section">
            <div className="image-section-overlay color">
              <div className="container w-container">
                <div className="section-title-wrapper">
                  <h2 className="section-title-color-product">Security</h2>
                  <div className="section-description">
                    Rockset is designed with security as a top priority, so your data is protected
                    <br />
                  </div>
                </div>
                <div className={cx(styles.infoRow, 'feature-info-row w-row')}>
                  <div className="feature-info-column w-col w-col-4">
                    <div className="feature-info-block w-clearfix">
                      <img src={Asset312x} alt className="feature-info-icon" />
                      <div className="feature-info-title">
                        Data Encryption
                        <br />
                      </div>
                      <p className="feature-info-paragraph">
                        Encrypted at rest and SSL in transit.
                      </p>
                    </div>
                  </div>
                  <div className="feature-info-column w-col w-col-4">
                    <div className="feature-info-block w-clearfix">
                      <img src={Asset382x} alt className="feature-info-icon" />
                      <div className="feature-info-title">Field Mappings</div>
                      <p className="feature-info-paragraph">
                        Scrub and anonymize PII, PHI, and other sensitive data.
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="feature-info-column w-col w-col-4">
                    <div className="feature-info-block w-clearfix">
                      <img src={Asset332x} alt className="feature-info-icon" />
                      <div className="feature-info-title">
                        Bring Your Own Key
                        <br />
                      </div>
                      <p className="feature-info-paragraph">
                        Use your own keys or KMS-managed keys for encryption.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx(styles.infoRow, 'feature-info-row w-row')}>
                  <div className="feature-info-column w-col w-col-4">
                    <div className="feature-info-block w-clearfix">
                      <img src={Asset342x} alt className="feature-info-icon" />
                      <div className="feature-info-title">
                        Single Sign-On
                        <br />
                      </div>
                      <p className="feature-info-paragraph">
                        SSO with SAML or OAuth.
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="feature-info-column w-col w-col-4">
                    <div className="feature-info-block w-clearfix">
                      <img src={Asset362x} alt className="feature-info-icon" />
                      <div className="feature-info-title">
                        Access Control
                        <br />
                      </div>
                      <p className="feature-info-paragraph">
                        Manage permissions using role-based access control.
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="feature-info-column w-col w-col-4">
                    <div className="feature-info-block w-clearfix">
                      <img src={Asset352x} alt className="feature-info-icon" />
                      <div className="feature-info-title">
                        Audit Logging
                        <br />
                      </div>
                      <p className="feature-info-paragraph">
                        User actions are logged for security and troubleshooting.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section feature-section odd">
            <div className="container w-container">
              <div className="feature-text-block right">
                <div className="feature-intro-title">read the rockset whitepaper</div>
                <h2 className="main-feature-title">Rockset Concepts, Design &amp; Architecture</h2>
                <p className="paragraph-2">
                  Learn how Rockset's architecture enables highly parallelized execution of complex
                  queries across diverse data sets.
                </p>
                <a href="/Rockset_Concepts_Design_Architecture.pdf" className="button w-button">
                  download
                </a>
              </div>
              <img
                src={whitePaperImage}
                alt
                className={cx(styles.whitePaperImage, 'browser-mockup-left small')}
              />
            </div>
          </div>
          <div className="section cta-section">
            <div
              className="container w-container"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <h4 className="dark-cta-title">Read Rockset's latest insights and updates.</h4>
              <a
                data-ix="open-sign-up-popup"
                href="/blog"
                className="button cta-button w-button"
                style={{ margin: 0 }}
              >
                Rockset blog
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
