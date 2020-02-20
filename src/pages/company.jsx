import React from 'react';
import SEO from '../components/seo';
import Header from '../components/header';
import styles from './company.module.css';
import cx from 'classnames';

import headshotvenkat from '../images/headshot-venkat.jpg';
import headshotdhruba from '../images/headshot-dhruba.jpg';
import headshotshruti from '../images/headshot-shruti.jpg';
import headshottudor from '../images/headshot-tudor.jpg';
import headshotjerry from '../images/headshot-jerry.png';
import headshotmike from '../images/headshot-mike.png';
import greylock from '../images/greylock-partners.png';
import sequoia from '../images/sequoia-mark-full-grey.svg';
import TitleSection from '../sections/common/TitleSection';

const NewsArticle = ({ title, author, url, image, date }) => (
  <div className="simple-blog-post-item archive w-clearfix w-dyn-item w-col w-col-6">
    <a
      href={url}
      target="_blank"
      style={{
        backgroundImage: `url('${image}')`,
      }}
      className={cx(styles.pressRelease, 'simple-blog-image-block small w-inline-block')}
    >
      <div className="blog-post-overlay light" />
    </a>
    <a href={url} className="blog-post-title-link archive-title">
      {title}
    </a>
    <div className="archive-title-wrapper w-clearfix">
      <div className="archive-info-block w-clearfix">
        <div className="blog-author-name archive">{author}</div>
      </div>
      <div className="archive-info-block w-clearfix">
        <div className="blog-post-date archive-date">{date}</div>
      </div>
    </div>
  </div>
);

export default class AboutIndex extends React.Component {
  state = {
    activeVenkat: false,
    activeDhruba: false,
    activeShruti: false,
    activeTudor: false,
    activeJerry: false,
    activeMike: false,
  };

  render() {
    return (
      <div>
        <SEO
          title="Company"
          keywords={[`rockset`, `data`, `apps`]}
          description="Decades of experience in web-scale data management and distributed systems from Facebook, Google, Yahoo, and Oracle. Backed by Greylock and Sequoia."
        />
        <Header activePage="company" />
        <div>
          <TitleSection
            title="We are Building a Data-Driven Future"
            subtitle="Rockset is built by experts with decades of experience in web-scale data management and distributed systems."
            background="/images/team-in-action.png"
            customCta="Join Us — We're Hiring"
            customCtaOnClick={() => (window.location = 'https://jobs.lever.co/rockset')}
          />
          {/* <div className="subpage-header subpage-header-team-in-action">
              <div className="container w-container">
                <h1 data-ix="fade-in-on-load" className="subpage-title">
                  We Are Building a Data-Driven Future
                  <br />
                  <br />
                </h1>
                <a
                  href=""
                  className="button w-button"
                >
                  Join us — We are hiring
                </a>
              </div>
            </div> */}
          <div className="section _2-column-pricing tint">
            <div className="container w-container">
              <div className="image-block-column-left w-col w-col-12 w-col-stack">
                <div className={styles.teamPic}></div>
              </div>
              <div className="small-column-title">Our Team</div>
              <p>
                Rockset is built by experts with decades of experience in web-scale data management
                and distributed systems. The team comprises engineers who helped create the online
                data and search infrastructure at Facebook, founded the Hadoop Filesystem project at
                Yahoo, implemented the Gmail backend at Google, and built databases at Oracle.
              </p>
              <p>
                On the enterprise side, members of our team have experience launching VMware's vSAN
                and building the industry's first nested virtualization in the cloud at Ravello. We
                intimately understand data, cloud, and scale, as well as the challenges and
                opportunities it creates for enterprises.
              </p>
            </div>
          </div>
          <div className="section">
            <div className="container w-container">
              <div className="section-title-wrapper">
                <h2>Leadership</h2>
              </div>
              <div className="team-member-list-wrapper w-dyn-list">
                <div className="team-member-list w-dyn-items w-row">
                  <div className="team-member-item w-dyn-item w-col w-col-4">
                    <div
                      className={cx(styles.profileBlock, 'team-member-block')}
                      onClick={() => {
                        this.setState({ activeVenkat: !this.state.activeVenkat });
                      }}
                    >
                      <img src={headshotvenkat} alt className="team-member-image" />
                      <div className="team-member-name">Venkat Venkataramani</div>
                      <div className="team-member-tag">CEO & Co-Founder</div>
                      <p
                        style={{ maxHeight: this.state.activeVenkat ? '500px' : '0px' }}
                        className={cx(styles.profileDescription, 'team-member-description')}
                      >
                        {
                          'Venkat Venkataramani is CEO and co-founder of Rockset. He was previously an Engineering Director in the Facebook infrastructure team responsible for all online data services that stored and served Facebook user data. Collectively, these systems worked across 5 geographies and and served more than 5 billion queries a second. Prior to Facebook, Venkat worked on the Oracle Database.'
                        }
                      </p>
                      <div
                        className={styles.chevron}
                        style={{
                          transform: this.state.activeVenkat ? 'rotate(315deg)' : 'rotate(135deg)',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="team-member-item w-dyn-item w-col w-col-4">
                    <div
                      className={cx(styles.profileBlock, 'team-member-block')}
                      onClick={() => {
                        this.setState({ activeDhruba: !this.state.activeDhruba });
                      }}
                    >
                      <img src={headshotdhruba} alt className="team-member-image" />
                      <div className="team-member-name">Dhruba Borthakur</div>
                      <div className="team-member-tag">CTO & Co-Founder</div>
                      <p
                        style={{ maxHeight: this.state.activeDhruba ? '500px' : '0px' }}
                        className={cx(styles.profileDescription, 'team-member-description')}
                      >
                        {
                          "Dhruba Borthakur is CTO and co-founder of Rockset, responsible for the company's technical direction. He was an engineer on the database team at Facebook, where he was the founding engineer of the RocksDB data store. Earlier at Yahoo, he was one of the founding engineers of the Hadoop Distributed File System. He was also a contributor to the open source Apache HBase project. Dhruba previously held various roles at Veritas Software, founded an e-commerce startup, Oreceipt.com, and contributed to Andrew File System (AFS) at IBM-Transarc Labs."
                        }
                      </p>
                      <div
                        className={styles.chevron}
                        style={{
                          transform: this.state.activeDhruba ? 'rotate(315deg)' : 'rotate(135deg)',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="team-member-item w-dyn-item w-col w-col-4">
                    <div
                      className={cx(styles.profileBlock, 'team-member-block')}
                      onClick={() => {
                        this.setState({ activeShruti: !this.state.activeShruti });
                      }}
                    >
                      <img src={headshotshruti} alt className="team-member-image" />
                      <div className="team-member-name">Shruti Bhat</div>
                      <div className="team-member-tag">SVP, Product & Marketing</div>
                      <p
                        style={{ maxHeight: this.state.activeShruti ? '500px' : '0px' }}
                        className={cx(styles.profileDescription, 'team-member-description')}
                      >
                        {
                          "Shruti Bhat leads product management and marketing at Rockset. Prior to Rockset, Shruti led Product Management for Oracle Cloud, with a focus on AI, IoT and Blockchain. Previously, Shruti was VP Marketing at Ravello Systems, where she drove the start-up's rapid growth from pre-launch to hundreds of customers and a successful acquisition. Prior to that, she was responsible for launching VMware's vSAN and has led engineering teams at HP and IBM. Shruti has a bachelor's in computer science engineering and an MBA from UCLA Anderson."
                        }
                      </p>
                      <div
                        className={styles.chevron}
                        style={{
                          transform: this.state.activeShruti ? 'rotate(315deg)' : 'rotate(135deg)',
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="team-member-list w-dyn-items w-row">
                  <div className="team-member-item w-dyn-item w-col w-col-4">
                    <div
                      className={cx(styles.profileBlock, 'team-member-block')}
                      onClick={() => {
                        this.setState({ activeTudor: !this.state.activeTudor });
                      }}
                    >
                      <img src={headshottudor} alt className="team-member-image" />
                      <div className="team-member-name">Tudor Bosman</div>
                      <div className="team-member-tag">Chief Architect</div>
                      <p
                        style={{ maxHeight: this.state.activeTudor ? '500px' : '0px' }}
                        className={cx(styles.profileDescription, 'team-member-description')}
                      >
                        {
                          "Tudor Bosman leads architecture for Rockset's search and analytics engine. Prior to Rockset, Tudor was an engineer at Facebook, where he spearheaded Unicorn, Facebook's search engine, and built infrastructure for the Facebook AI Research Lab and Facebook's applied machine learning initiative. Prior to Facebook, Tudor worked at Google on Gmail's storage and indexing backend, and at Oracle on database server internals. Tudor holds an MS in Computer Science from Stanford and a BS in Computer Science from Caltech."
                        }
                      </p>
                      <div
                        className={styles.chevron}
                        style={{
                          transform: this.state.activeTudor ? 'rotate(315deg)' : 'rotate(135deg)',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="team-member-item w-dyn-item w-col w-col-4">
                    <div
                      className={cx(styles.profileBlock, 'team-member-block')}
                      onClick={() => {
                        this.setState({ activeJerry: !this.state.activeJerry });
                      }}
                    >
                      <img src={headshotjerry} alt className="team-member-image" />
                      <div className="team-member-name">Jerry Chen</div>
                      <div className="team-member-tag">Board of Directors</div>
                      <p
                        style={{ maxHeight: this.state.activeJerry ? '500px' : '0px' }}
                        className={cx(styles.profileDescription, 'team-member-description')}
                      >
                        {
                          'Jerry invests in entrepreneurs building new enterprise SaaS applications and in all aspects of AI and cloud infrastructure. He joined Greylock in 2013 as an investor and led Greylock’s investment in Notable Health and currently sits on the Board of Docker, Cato Networks, Gladly, Rhumbix, Spoke, and Blend. Prior to joining Greylock, Jerry was Vice President of Cloud and Application Services at VMware where he was part of the executive team that scaled the company from 250 to over 15,000 employees and $5B in revenue. During his ten years at VMware, Jerry launched dozens of products including several “1.0” releases and started two new business units for VMware including the Cloud Application Platform and the Enterprise Desktop business units.'
                        }
                      </p>
                      <div
                        className={styles.chevron}
                        style={{
                          transform: this.state.activeJerry ? 'rotate(315deg)' : 'rotate(135deg)',
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="team-member-item w-dyn-item w-col w-col-4">
                    <div
                      className={cx(styles.profileBlock, 'team-member-block')}
                      onClick={() => {
                        this.setState({ activeMike: !this.state.activeMike });
                      }}
                    >
                      <img src={headshotmike} alt className="team-member-image" />
                      <div className="team-member-name">Mike Vernal</div>
                      <div className="team-member-tag">Board of Directors</div>
                      <p
                        style={{ maxHeight: this.state.activeMike ? '500px' : '0px' }}
                        className={cx(styles.profileDescription, 'team-member-description')}
                      >
                        {
                          'Mike Vernal is a partner at Sequoia Capital, where he focuses on partnering with early-stage technology companies. He currently sits on the board of Citizen, Houseparty, RideOS, and Rockset. Prior to joining Sequoia, Mike was a Vice President at Facebook, where he led product, engineering and design for large pieces of the Facebook app (including Search, Profile, and Platform). After joining as an engineer in early 2008, he was the co-creator of Facebook Login, Social Plugins (e.g., the Like button) and the Graph API. He later led the teams that created Facebook’s Mobile App Ads, Audience Network and Post Search.'
                        }
                      </p>
                      <div
                        className={styles.chevron}
                        style={{
                          transform: this.state.activeMike ? 'rotate(315deg)' : 'rotate(135deg)',
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section tint">
            <div className="container w-container">
              <div className="section-title-wrapper small-title">
                <div className="small-section-title">our investors</div>
              </div>
              <div className="logos-row w-row">
                <div className="logo-column w-col w-col-6">
                  <img src={greylock} alt className={cx(styles.greylock, 'image-2')} />
                </div>
                <div className="logo-column w-col w-col-6">
                  <img src={sequoia} alt className="image-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="section blog-intro-section">
            <div className="container w-container">
              <div className="small-section-title">in the news</div>
              <div className="blog-posts-list-wrapper w-dyn-list">
                <div className="blog-posts-list archive w-clearfix w-dyn-items w-row">
                                    <NewsArticle
                    title="Rockset Continues to Grow with the Announcement of New Partnerships and Innovations"
                    author="Database Trends and Applications"
                    url="http://www.dbta.com/Editorial/News-Flashes/Rockset-Continues-to-Grow-with-the-Announcement-of-New-Partnerships-and-Innovations-139032.aspx"
                    image="/images/news-dbta.jpeg"
                    date="Feb 3, 2020"
                  />
                  <NewsArticle
                    title="Rockset Gains Momentum as the Industry’s Leading Real-Time Database in the Cloud"
                    author="Dataversity"
                    url="https://www.dataversity.net/rockset-gains-momentum-as-the-industrys-leading-real-time-database-in-the-cloud/"
                    image="/images/news-dataversity.jpg"
                    date="Jan 31, 2020"
                  />
                  <NewsArticle
                    title="Rockset Gains Momentum as the Industry’s Leading Real-Time Database in the Cloud"
                    author="Rockset"
                    url="/press/rockset-gains-momentum-real-time-database-in-the-cloud"
                    image="/images/RsLogoRGB_Rockset-Color.png"
                    date="Jan 30, 2020"
                  />
                  <NewsArticle
                    title="Rockset, a fully managed search and analytics cloud service"
                    author="PetaCrunch"
                    url="https://petacrunch.com/2020/01/09/rockset-a-fully-managed-search-and-analytics-cloud-service/"
                    image="/images/petacrunch-logo.jpg"
                    date="Jan 9, 2020"
                  />
                  <NewsArticle
                    title="Tableau Conference 2019: what the partners said"
                    author="Computer Weekly"
                    url="https://www.computerweekly.com/blog/CW-Developer-Network/Tableau-Conference-2019-what-the-partners-said"
                    image="/images/cw_logo.png"
                    date="Nov 13, 2019"
                  />
                  <NewsArticle
                    title="Rockset Partners with Tableau to Power Real-Time Dashboards on NoSQL Data"
                    author="Dataversity"
                    url="https://www.dataversity.net/rockset-partners-with-tableau-to-power-real-time-dashboards-on-nosql-data/"
                    image="/images/news-dataversity.jpg"
                    date="Nov 11, 2019"
                  />
                  <NewsArticle
                    title="Rockset Partners with Tableau to Enable Users to See NoSQL Data in Real Time"
                    author="Database Trends and Applications"
                    url="http://www.dbta.com/Editorial/News-Flashes/Rockset-Partners-with-Tableau-to-Enable-Users-to-See-NoSQL-Data-in-Real-Time-135138.aspx"
                    image="/images/news-dbta.jpeg"
                    date="Nov 8, 2019"
                  />
                  <NewsArticle
                    title="Rockset Expands SQL Links to Tableau"
                    author="Datanami"
                    url="https://www.datanami.com/2019/11/08/rockset-expands-sql-links-to-tableau/"
                    image="/images/datanami-logo.png"
                    date="Nov 8, 2019"
                  />
                  <NewsArticle
                    title="Embracing operational analytics for better development"
                    author="App Developer Magazine"
                    url="https://appdevelopermagazine.com/embracing-operational-analytics-for-better-development/"
                    image="/images/adm-logo-small.png"
                    date="Nov 8, 2019"
                  />
                  <NewsArticle
                    title="Rockset Partners with Tableau to Power Real-Time Dashboards on NoSQL Data"
                    author="Rockset"
                    url="/press/rockset-partners-with-tableau-real-time-dashboards-on-nosql"
                    image="/images/RsLogoRGB_Rockset-Color.png"
                    date="Nov 7, 2019"
                  />
                  <NewsArticle
                    title="Rockset Bridges Divide Between SQL and Kafka"
                    author="RTInsights"
                    url="https://www.rtinsights.com/rockset-bridges-divide-between-sql-and-kafka/"
                    image="/images/RTInsightslogo-wTagline272x96.jpg"
                    date="Nov 6, 2019"
                  />
                  <NewsArticle
                    title="Rockset review: Real-time SQL for operational data"
                    author="InfoWorld"
                    url="https://www.infoworld.com/article/3446026/rockset-review-real-time-sql-for-operational-data.html"
                    image="/images/infoworld-logo-print.png"
                    date="Oct 17, 2019"
                  />
                  <NewsArticle
                    title="Fast Analytics On Semi-Structured And Structured Data In The Cloud"
                    author="Data Engineering Podcast"
                    url="https://www.dataengineeringpodcast.com/rockset-serverless-analytics-episode-101/"
                    image="/images/data-engineering-podcast.jpeg"
                    date="Oct 8, 2019"
                  />
                  <NewsArticle
                    title="Kafka Transforming Into ‘Event Streaming Database’"
                    author="Datanami"
                    url="https://www.datanami.com/2019/10/01/kafka-transforming-into-event-streaming-database/"
                    image="/images/datanami-logo.png"
                    date="Oct 1, 2019"
                  />
                  <NewsArticle
                    title="Rockset Unveils Real-Time SQL Analytics for Raw Events from Apache Kafka"
                    author="DEVOPSdigest"
                    url="https://www.devopsdigest.com/rockset-unveils-real-time-sql-analytics-for-raw-events-from-apache-kafka"
                    image="/images/devopsdigest-logo.png"
                    date="Sep 30, 2019"
                  />
                  <NewsArticle
                    title="Rockset Integrates the Ability to Analyze Kafka Data"
                    author="Database Trends and Applications"
                    url="http://www.dbta.com/Editorial/News-Flashes/Rockset-Integrates-the-Ability-to-Analyze-Kafka-Data-134380.aspx"
                    image="/images/news-dbta.jpeg"
                    date="Sep 30, 2019"
                  />
                  <NewsArticle
                    title="Rockset Unveils Real-Time SQL Analytics for Raw Events from Apache Kafka"
                    author="Dataversity"
                    url="https://www.dataversity.net/rockset-unveils-real-time-sql-analytics-for-raw-events-from-apache-kafka/"
                    image="/images/news-dataversity.jpg"
                    date="Sep 27, 2019"
                  />
                  <NewsArticle
                    title="Rockset Connects Kafka with SQL"
                    author="Datanami"
                    url="https://www.datanami.com/2019/09/27/rockset-connects-kafka-with-sql/"
                    image="/images/datanami-logo.png"
                    date="Sep 27, 2019"
                  />
                  <NewsArticle
                    title="Rockset Unveils Real-Time SQL Analytics for Raw Events from Apache Kafka"
                    author="Rockset"
                    url="/press/rockset-unveils-real-time-sql-analytics-apache-kafka"
                    image="/images/RsLogoRGB_Rockset-Color.png"
                    date="Sep 26, 2019"
                  />
                  <NewsArticle
                    title="Serverless Data: The Winning Cloud Adoption Strategy"
                    author="insideBIGDATA"
                    url="https://insidebigdata.com/2019/09/25/serverless-data-the-winning-cloud-adoption-strategy/"
                    image="/images/ibd-logo-stacked.png"
                    date="Sep 25, 2019"
                  />
                  <NewsArticle
                    title="Operational Analytics in the Cloud: Rockset is a Serverless Data Management Engine Helping Users Build APIs and Real-Time Dashboards"
                    author="HostingAdvice.com"
                    url="https://www.hostingadvice.com/blog/rockset-delivers-operational-analytics-in-the-cloud/"
                    image="/images/hostingadvice-logo.png"
                    date="Sep 16, 2019"
                  />
                  <NewsArticle
                    title="Rockset Releases Industry’s First Real-Time SQL for Amazon DynamoDB"
                    author="Dataversity"
                    url="https://www.dataversity.net/rockset-releases-industrys-first-real-time-sql-for-amazon-dynamodb/"
                    image="/images/news-dataversity.jpg"
                    date="Aug 21, 2019"
                  />
                  <NewsArticle
                    title="Startup Rockset Adds SQL to DynamoDB"
                    author="Datanami"
                    url="https://www.datanami.com/2019/08/21/startup-rockset-adds-sql-to-dynamodb/"
                    image="/images/datanami-logo.png"
                    date="Aug 21, 2019"
                  />
                  <NewsArticle
                    title="Rockset Now Supports Amazon DynamoDB"
                    author="Database Trends and Applications"
                    url="http://www.dbta.com/Editorial/News-Flashes/Rockset-Now-Supports-Amazon-DynamoDB-133625.aspx"
                    image="/images/news-dbta.jpeg"
                    date="Aug 20, 2019"
                  />
                  <NewsArticle
                    title="Firm Does SQL Analytics on Amazon DynamoDB NoSQL Database Service"
                    author="AWS Insider"
                    url="https://awsinsider.net/articles/2019/08/20/dynamodb-sql.aspx"
                    image="/images/news-awsinsider.svg"
                    date="Aug 20, 2019"
                  />
                  <NewsArticle
                    title="Rockset Releases Industry's First Real-Time SQL for Amazon DynamoDB"
                    author="VM Blog"
                    url="https://vmblog.com/archive/2019/08/20/rockset-releases-industry-s-first-real-time-sql-for-amazon-dynamodb.aspx#.XWBnN5NKg_W"
                    image="/images/news-vmblog.png"
                    date="Aug 20, 2019"
                  />
                  <NewsArticle
                    title="Rockset Releases Industry’s First Real-Time SQL for Amazon DynamoDB"
                    author="Rockset"
                    url="/press/rockset-releases-industry-first-sql-on-dynamodb/"
                    image="/images/RsLogoRGB_Rockset-Color.png"
                    date="Aug 20, 2019"
                  />
                  <NewsArticle
                    title="Facebook Data Infrastructure with Dhruba Borthakur"
                    author="Software Engineering Daily"
                    url="https://softwareengineeringdaily.com/2019/07/17/facebook-data-infrastructure-with-dhruba-borthakur/"
                    image="/images/sedailylogo.png"
                    date="July 17, 2019"
                  />
                  <NewsArticle
                    title="3 cost-cutting tips for Amazon DynamoDB"
                    author="InfoWorld"
                    url="https://www.infoworld.com/article/3409075/3-cost-cutting-tips-for-amazon-dynamodb.html"
                    image="/images/infoworld-logo-print.png"
                    date="July 17, 2019"
                  />
                  <NewsArticle
                    title="Venkat Venkataramani - Valuing People"
                    author="Developer On Fire"
                    url="https://developeronfire.com/podcast/episode-427-venkat-venkataramani-valuing-people"
                    image="/images/developeronfire.png"
                    date="June 10, 2019"
                  />
                  <NewsArticle
                    title="Bringing Scalable Real-Time Analytics to the Enterprise"
                    author="O'Reilly"
                    url="https://www.oreilly.com/ideas/bringing-scalable-real-time-analytics-to-the-enterprise"
                    image="/images/oreilly.png"
                    date="June 6, 2019"
                  />
                  <NewsArticle
                    title="Up and Coming: Three Startups with Amazing Potential"
                    author="DM Radio"
                    url="https://dmradio.dataversity.net/up-and-coming-three-startups-with-amazing-potential/"
                    image="/images/news-dmradio.png"
                    date="May 31, 2019"
                  />
                  <NewsArticle
                    title="These 19 former Facebook employees are now leading some of the hottest enterprise tech startups"
                    author="Business Insider"
                    url="https://www.businessinsider.com/former-facebook-employees-enterprise-startups-2019-3"
                    image="/images/bi.png"
                    date="Apr 2, 2019"
                  />
                  <NewsArticle
                    title="Q&A with Venkat Venkataramani — Rockset GA"
                    author="ODBMS.org"
                    url="http://www.odbms.org/2019/04/qa-with-venkat-venkataramani-rockset-ga/"
                    image="/images/odbms.png"
                    date="Apr 1, 2019"
                  />
                  <NewsArticle
                    title="Facebook alumni forge own paths to big data analytics tools"
                    author="TechTarget"
                    url="https://searchdatamanagement.techtarget.com/news/252460183/Facebook-alumni-forge-own-paths-to-big-data-analytics-tools"
                    image="/images/techtarget-logo.png"
                    date="Mar 25, 2019"
                  />

                  <NewsArticle
                    title="Rockset Cranks Up Serverless Analytics Engine"
                    author="Datanami"
                    url="https://www.datanami.com/2019/03/20/rockset-cranks-up-serverless-analytics-engine/"
                    image="/images/datanami-logo.png"
                    date="Mar 20, 2019"
                  />

                  <NewsArticle
                    title="Rockset launches its serverless data platform"
                    author="SiliconANGLE"
                    url="https://siliconangle.com/2019/03/19/rockset-launches-serverless-data-preparation-tool/"
                    image="/images/sa-logo.png"
                    date="Mar 19, 2019"
                  />

                  <NewsArticle
                    title="Rockset Announces General Availability; Unleashes Power Of Real-Time SQL On Raw Data"
                    author="Rockset"
                    url="/press/rockset-announces-general-availability-unleashes-power-of-real-time-sql-on-raw-data/"
                    image="/images/RsLogoRGB_Rockset-Color.png"
                    date="Mar 19, 2019"
                  />

                  <NewsArticle
                    title="RocksDB with Dhruba Borthakur and Igor Canadi"
                    author="Software Engineering Daily"
                    url="https://softwareengineeringdaily.com/2019/02/05/rocksdb-with-dhruba-borthakur-and-igor-canadi/"
                    image="/images/sedailylogo.png"
                    date="Feb 5, 2019"
                  />

                  <NewsArticle
                    title="Rockset Data Platform with Venkat Venkataramani"
                    author="Software Engineering Daily"
                    url="https://softwareengineeringdaily.com/2018/12/21/rockset-data-platform-with-venkat-venkataramani/"
                    image="/images/sedailylogo.png"
                    date="Dec 21, 2018"
                  />

                  <NewsArticle
                    title="Revolutionizing Big Data Apps"
                    author="The Cloudcast"
                    url="https://www.thecloudcast.net/2018/11/revolutionizing-big-data-apps.html"
                    image="/images/cloudcast.jpeg"
                    date="Nov 28, 2018"
                  />

                  <NewsArticle
                    title="Amazon re:Invent Preview: RockSet and Yottascale take their bows"
                    author="ZDNet"
                    url="https://www.zdnet.com/article/amazon-reinvent-preview-rockset-and-yottascale-take-their-bows/"
                    image="/images/zdnet-logo.png"
                    date="Nov 26, 2018"
                  />

                  <NewsArticle
                    title="Rockset: Fast SQL Querying on Raw Data"
                    author="The New Stack"
                    url="https://thenewstack.io/rockset-fast-sql-querying-on-raw-data/"
                    image="/images/thenewstack.png"
                    date="Nov 22, 2018"
                  />

                  <NewsArticle
                    title="Rockset Startup Gets $21.5-million USD Funding for Data Platform"
                    author="Edgy Labs"
                    url="https://edgylabs.com/rockset-startup"
                    image="/images/el-logo.jpg"
                    date="Nov 15, 2018"
                  />

                  <NewsArticle
                    title="Open-source and cloud-native, Kubernetes paves the way for new companies to bring DevOps to data"
                    author="SiliconANGLE"
                    url="https://siliconangle.com/2018/11/13/open-source-and-cloud-native-kubernetes-paves-the-way-for-new-companies-to-bring-devops-to-data-cubeconversations/"
                    image="/images/sa-logo.png"
                    date="Nov 13, 2018"
                  />

                  <NewsArticle
                    title="RoadCast: Speeding Cloud-Native App Development with Rockset"
                    author="ActualTech Media"
                    url="https://www.actualtech.io/speeding-cloud-native-app-development-rockset/"
                    image="/images/actualTech.jpg"
                    date="Nov 9, 2018"
                  />

                  <NewsArticle
                    title="CUBEConversation with Venkat Venkataramani, Rockset & Jerry Chen, Greylock"
                    author="theCUBE"
                    url="https://www.youtube.com/watch?v=k3N6lNJHznw"
                    image="/images/thecube-logo.png"
                    date="Nov 1, 2018"
                  />

                  <NewsArticle
                    title="Rockset launches out of stealth with $21.5 M investment"
                    author="TechCrunch"
                    url="https://techcrunch.com/2018/11/01/rockset-launches-out-of-stealth-with-21-5-m-investment/"
                    image="/images/tc-logo.jpg"
                    date="Nov 1, 2018"
                  />

                  <NewsArticle
                    title="2 ex-Facebook employees just came out of nowhere with $21.5 million in funding for their new startup"
                    author="Business Insider"
                    url="https://www.businessinsider.com/rockset-facebook-greylock-sequoia-2018-11"
                    image="/images/bi.png"
                    date="Nov 1, 2018"
                  />

                  <NewsArticle
                    title="Greylock-backed Rockset launches with a serverless analytics platform for the cloud"
                    author="SiliconANGLE"
                    url="https://siliconangle.com/2018/11/01/greylock-backed-rockset-launches-serverless-analytics-platform-cloud/"
                    image="/images/sa-logo.png"
                    date="Nov 1, 2018"
                  />

                  <NewsArticle
                    title="Rockset, SQL Cloud Service, Emerges from Stealth"
                    author="Datanami"
                    url="https://www.datanami.com/2018/11/01/rockset-sql-cloud-service-emerges-from-stealth/"
                    image="/images/datanami-logo.png"
                    date="Nov 1, 2018"
                  />

                  <NewsArticle
                    title="Our Investment in Rockset"
                    author="Greylock Partners"
                    url="https://news.greylock.com/our-investment-in-rockset-d46231f6a748"
                    image="/images/greylock-logo.jpg"
                    date="Nov 1, 2018"
                  />

                  <NewsArticle
                    title="Rockset and the Future of Data-Driven Apps"
                    author="Sequoia Capital"
                    url="https://medium.com/@mvernal/rockset-and-the-future-of-data-driven-apps-34acf3e2a517"
                    image="/images/sequoia-logo.jpg"
                    date="Nov 1, 2018"
                  />

                  <NewsArticle
                    title="Rockset Reimagines Data-Driven Applications in the Cloud"
                    author="Rockset"
                    url="/press/rockset-reimagines-data-driven-apps/"
                    image="/images/RsLogoRGB_Rockset-Color.png"
                    date="Nov 1, 2018"
                  />

                  <NewsArticle
                    title="Rockset Raises $21.5 Million from Greylock and Sequoia to Transform How Data-Driven Apps Are Built"
                    author="Rockset"
                    url="/press/rockset-raises-series-a-greylock-sequoia/"
                    image="/images/RsLogoRGB_Rockset-Color.png"
                    date="Nov 1, 2018"
                  />

                  <div className="simple-blog-post-item archive w-clearfix w-dyn-item w-col w-col-6"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="section tint">
            <div className="container w-container">
              <div className="section-title-wrapper small-title">
                <div className="small-section-title">Work With Us</div>
              </div>
              <div className="logos-row w-row">
                <center>
                  <p>
                    We're a fast-growing company. We value curiosity, diversity, and
                    open-mindedness. Rockset is a fun place to work. You will solve interesting
                    problems, surrounded by exceptional people, while making customers happy. We
                    work hard, but also take our personal lives and experiences seriously. We are
                    based in San Mateo, CA.
                  </p>
                </center>
                <center>
                  <a href="https://jobs.lever.co/rockset" className="button w-button">
                    View open positions
                  </a>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
