import * as React from 'react';
import styled from 'styled-components';

import FaqOpenIcon from '../../images/faq_open.svg';
import FaqClosedIcon from '../../images/faq_closed.svg';

import { SectionWrapper, SectionMargins, SectionHeader } from '../common/common';

const FaqCard = styled.div`
  background: #ffffff;
  box-sizing: border-box;
  border: ${props => (props.open ? '1px solid #DFDFDF' : '1px solid #FAFAFA')};
  box-shadow: ${props =>
    props.open ? '0px 6px 14px rgba(0, 0, 0, 0.2)' : '0px 2px 4px rgba(0, 0, 0, 0.2)'};
  border-radius: 5px;
  margin: 24px 0;
  transition: 0.3s;
`;

const FaqHeader = styled.div`
  padding: 24px;
  cursor: pointer;
  display: flex;
`;

const FaqIcon = styled.img``;

const FaqQuestion = styled.div`
  font-weight: bold;
  font-size: 22px;
  flex: 1;
  color: #9737ab;
  margin: 8px 0;
`;

const FaqAnswer = styled.div`
  font-size: 16px;
  line-height: 24px;
  padding: 0 24px 24px 24px;
  display: ${props => (props.open ? 'block' : 'none')};
`;

export class FAQ extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openIndex: 0,
    };
  }

  render() {
    return (
      <SectionWrapper id="faq" dark={this.props.dark}>
        <SectionMargins>
          <SectionHeader>Frequently Asked Questions</SectionHeader>

          <FaqCard open={this.state.openIndex === 0}>
            <FaqHeader
              onClick={() => {
                if (this.state.openIndex !== 0) {
                  this.setState({ openIndex: 0 });
                } else {
                  this.setState({ openIndex: null });
                }
              }}
            >
              <FaqQuestion open={this.state.openIndex}>
                What is Rockset’s free offering?
              </FaqQuestion>
              <FaqIcon src={this.state.openIndex === 0 ? FaqOpenIcon : FaqClosedIcon} />
            </FaqHeader>
            <FaqAnswer open={this.state.openIndex === 0}>
              Rockset has a free tier for users who retain less than 2 GBs of data. Users receive 5
              GB of ingest per month. You can access the free tier without ever having to enter your
              credit card information.
            </FaqAnswer>
          </FaqCard>

          <FaqCard open={this.state.openIndex === 1}>
            <FaqHeader
              onClick={() => {
                if (this.state.openIndex !== 1) {
                  this.setState({ openIndex: 1 });
                } else {
                  this.setState({ openIndex: null });
                }
              }}
            >
              <FaqQuestion open={this.state.openIndex}>
                Can I migrate between instance types?
              </FaqQuestion>
              <FaqIcon src={this.state.openIndex === 1 ? FaqOpenIcon : FaqClosedIcon} />
            </FaqHeader>
            <FaqAnswer open={this.state.openIndex === 1}>
              Yes. You can start with an instance type and seamlessly switch without any downtime.
              Reach out to <a href="mailto:support@rockset.com">support@rockset.com</a> to migrate.
            </FaqAnswer>
          </FaqCard>

          <FaqCard open={this.state.openIndex === 2}>
            <FaqHeader
              onClick={() => {
                if (this.state.openIndex !== 2) {
                  this.setState({ openIndex: 2 });
                } else {
                  this.setState({ openIndex: null });
                }
              }}
            >
              <FaqQuestion open={this.state.openIndex}>
                How is uncompressed data measured?
              </FaqQuestion>
              <FaqIcon src={this.state.openIndex === 2 ? FaqOpenIcon : FaqClosedIcon} />
            </FaqHeader>
            <FaqAnswer open={this.state.openIndex === 2}>
              Data retained and data ingested are measured as the total number of uncompressed bytes
              required to represent your documents in Rockset.
              <br />
              <br />
              The size is measured after data is parsed and transformed, but before it is indexed.
              If the data source uses compression, size is measured after uncompressing the data.
              Dropped fields using field mappings do not count towards size. Rockset automatically
              builds 3 indexes to speed up queries, but space amplification due to indexing does not
              count towards size.
              <br />
              <br />
              Data for a replicated collection counts once as data ingested and once for each
              replica. For example, adding 1GB of data into a collection that has 2 replicas counts
              as 1GB data ingested and 2GB data retained.
              <br />
              <br />
              An individual document's size is approximately 1 byte for each field path key plus the
              size of each field path's value.
              <br />
              <br />
              The units for data size follow base 1024, e.g. 1 GB = 1,024 MB = 1,048,576 KB.
            </FaqAnswer>
          </FaqCard>

          <FaqCard open={this.state.openIndex === 3}>
            <FaqHeader
              onClick={() => {
                if (this.state.openIndex !== 3) {
                  this.setState({ openIndex: 3 });
                } else {
                  this.setState({ openIndex: null });
                }
              }}
            >
              <FaqQuestion open={this.state.openIndex}>What is a replica?</FaqQuestion>
              <FaqIcon src={this.state.openIndex === 3 ? FaqOpenIcon : FaqClosedIcon} />
            </FaqHeader>
            <FaqAnswer open={this.state.openIndex === 3}>
              Rockset simultaneously runs multiple copies of a collection for availability and
              increased throughput capacity. Each copy of the data, including the primary copy, is
              called a "replica." All collections have 2 replicas by default. Each replica counts
              separately towards the total GBs stored.
            </FaqAnswer>
          </FaqCard>

          <FaqCard open={this.state.openIndex === 4}>
            <FaqHeader
              onClick={() => {
                if (this.state.openIndex !== 4) {
                  this.setState({ openIndex: 4 });
                } else {
                  this.setState({ openIndex: null });
                }
              }}
            >
              <FaqQuestion open={this.state.openIndex}>What is a millicpu?</FaqQuestion>
              <FaqIcon src={this.state.openIndex === 4 ? FaqOpenIcon : FaqClosedIcon} />
            </FaqHeader>
            <FaqAnswer open={this.state.openIndex === 4}>
              A millicpu is roughly one thousandth of a core. In Rockset, compute is a multi-tenant
              resource and is distributed across all users. The portion allocated to a particular
              collection depends on the collection's size and instance type, growing roughly
              linearly with collection size. For a user with dedicated instances, compute is
              isolated and can only be allocated to that user.
            </FaqAnswer>
          </FaqCard>
        </SectionMargins>
      </SectionWrapper>
    );
  }
}
