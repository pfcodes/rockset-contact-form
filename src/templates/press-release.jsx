import React from 'react';
import SEO from '../components/seo';
import Header from '../components/header';
import get from 'lodash/get';

const slugmap = {
  'rockset-announces-general-availability-unleashes-power-of-real-time-sql-on-raw-data': {
    title: 'Rockset Announces General Availability',
    description:
      'Industry’s First Serverless Search and Analytics Engine gives Developers and Data Scientists Freedom from ETL',
  },
  'rockset-raises-series-a-greylock-sequoia': {
    title: 'Rockset Raises $21.5 Million from Greylock and Sequoia',
    description:
      'Rockset, the serverless search and analytics company, today announced that it has raised $21.5 million in seed and Series A funding from Greylock Partners and Sequoia Capital.',
  },
  'rockset-reimagines-data-driven-apps': {
    title: 'Rockset Reimagines Data-Driven Applicaitons int he Cloud',
    description:
      'Rockset, the serverless search and analytics company, today formally launched and unveiled the industry’s first cloud service that runs SQL directly on raw data.',
  },
  'rockset-releases-industry-first-sql-on-dynamodb': {
    title: 'Industry’s First Real-Time SQL for Amazon DynamoDB',
    description:
      'DynamoDB users can now search and analyze their data using SQL in real time, making it possible to power live Tableau dashboards or build custom applications for operational analytics on DynamoDB',
  },
};

export default class PressReleaseTemplate extends React.Component {
  render() {
    const data = get(this.props, 'data.contentfulPressRelease');

    return (
      <div>
        {this.generateSeo()}
        <Header />
        <div
          style={{
            paddingTop: '52px',
            backgroundColor: 'white',
          }}
        >
          <div className="section">
            <div className="container w-container press-container">
              <h1>{data.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.body.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  generateSeo() {
    const slug = get(this.props, 'pathContext.slug');
    const data = get(slugmap, slug);

    return data ? <SEO description={data.description} title={data.title} /> : <SEO />;
  }
}
