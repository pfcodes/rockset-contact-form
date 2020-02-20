import React from 'react';
import SEO from '../components/seo';
import get from 'lodash/get';
import Header from '../components/header';
// import Footer from '../components/footer'

export default class LegalDocumentTemplate extends React.Component {
  generateSeo() {
    const slug = get(this.props, 'pathContext.slug');
    const data = get(slugmap, slug);

    return data ? <SEO description={data.description} title={data.title} /> : <SEO />;
  }
  k;
  render() {
    const data = get(this.props, 'data.contentfulLegalDocument');
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
            <div className="container w-container legal-container">
              <h1>{data.title}</h1>
              <h5>
                {data.dateLabel}: {data.effectiveDate}
              </h5>
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
}

const slugmap = {
  'copyright-ip-policy': {
    title: 'Copyright IP Policy',
    description: 'Our IP Copyright Policy',
  },
  'privacy-policy': {
    title: 'Privacy Policy',
    description: "Rockset's privacy policy",
  },
  'terms-of-service': {
    title: 'Terms of Service',
    description: 'Rockset Terms of Service',
  },
  'data-privacy-addendum': {
    title: 'Data Privacy Agreement',
    description: "Rockset's Data Privacy Agreement",
  },
};
