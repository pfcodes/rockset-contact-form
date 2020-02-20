import React from 'react';
import Header from '../components/header';
import SEO from '../components/seo';
import TitleSection from '../sections/common/TitleSection';
import { MarginAdjuster, GetStartedBanner, GetStartedTitle } from '../templates/blog-post';
import FormAccess from '../components/form-access';
import { Addons } from '../sections/pricing/Addons';
import { Banner } from '../sections/pricing/Banner';
import { Benchmarks } from '../sections/pricing/Benchmarks';
import { Examples } from '../sections/pricing/Examples';
import { FAQ } from '../sections/pricing/FAQ';
import { Features } from '../sections/pricing/Features';
import { Pricing } from '../sections/pricing/Pricing';

export default class PricingPage extends React.Component {
  render() {
    return (
      <>
        <SEO
          title="Pricing"
          keywords={[`rockset`, `data`, `apps`]}
          description="Rockset pricing is based on usage and includes compute, memory, and storage for ingesting and querying your data."
        />
        <Header activePage="pricing" />
        <div>
          <TitleSection
            title="Pay As You Go"
            subtitle="Rockset continuously scales compute, memory, and storage based on the size of your data. You pay for amount of data ingested and data retained."
            background="/images/dynamo-bg.png"
            subtext="No credit card required"
          />

          <Banner />

          <Pricing dark={false} />

          <Examples dark={true} />

          <Features dark={false} />

          <Addons dark={true} />

          {/* Override defaults from blog page */}
          <MarginAdjuster style={{ marginBottom: '-30px', top: '-30px' }}>
            <GetStartedBanner>
              <GetStartedTitle>Get started with $300 in free credits</GetStartedTitle>
              <FormAccess code="pricing" />
            </GetStartedBanner>
          </MarginAdjuster>

          <FAQ dark={false} />
        </div>
      </>
    );
  }
}
