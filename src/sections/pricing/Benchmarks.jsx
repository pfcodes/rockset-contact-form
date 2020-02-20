import * as React from 'react';
import styled from 'styled-components';

import { SectionWrapper, SectionMargins, SectionHeader } from '../common/common';

const Card = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin: 0 auto 24px auto;
  text-align: center;
  width: 100%;
  max-width: 1000px;
`;

const TableRow = styled.div`
  padding: 16px;
  background-color: ${props => (props.header ? '#F0F0F0' : null)};
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: ${props => (props.header ? 'bold' : null)};
  line-height: ${props => (props.header ? '16px' : null)};
  font-size: 14px;

  @media (min-width: 768px) {
    line-height: ${props => (props.header ? '22px' : null)};
    font-size: 16px;
  }
`;

const TableCell = styled.div`
  width: 14%;
`;

const AnnotationRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

const AnnotationRowCell = styled.div`
  width: 14.2%;
`;

const AnnotationRowDoubleCell = styled.div`
  width: 42.6%;
  background-color: #ffffff;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  text-align: center;
  padding: 16px 0;
  margin: 0 16px;
`;

const AnnotationHeader = styled.div`
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;

  @media (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const AnnotationDescription = styled.div`
  font-size: 15px;
  font-style: italic;
  padding: 4px 8px;
`;

const Italics = styled.div`
  font-style: italic;
`;

const TableDivider = styled.div`
  border: 1px solid #dfdfdf;
  margin: 0 16px;
`;

const InstanceType = styled.div`
  font-weight: bold;
  color: ${props => props.color};
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const VerticalSpacer = styled.div`
  padding: 8px 0;
`;

export const Benchmarks = props => (
  <SectionWrapper id="benchmarks" dark={props.dark}>
    <SectionMargins>
      <SectionHeader>Performance Benchmarks</SectionHeader>

      <VerticalSpacer />
      <VerticalSpacer />
      <VerticalSpacer />

      <AnnotationRow>
        <AnnotationRowCell></AnnotationRowCell>
        <AnnotationRowDoubleCell>
          <AnnotationHeader>Search Workload</AnnotationHeader>
          <AnnotationDescription>
            Simple query with high selectivity on a 2 TiB dataset, returning no more than 100 rows.
            See full details <a href="https://rockset.com">here</a>.
          </AnnotationDescription>
        </AnnotationRowDoubleCell>
        <AnnotationRowDoubleCell>
          <AnnotationHeader>Scan Workload</AnnotationHeader>
          <AnnotationDescription>
            Query with a combination of predicates on a 2 TiB dataset, yielding around 10k rows, and
            then an aggregation on those rows. See full details{' '}
            <a href="https://rockset.com">here</a>.
          </AnnotationDescription>
        </AnnotationRowDoubleCell>
      </AnnotationRow>

      <Card>
        <TableRow header={true}>
          <TableCell>Instance Type</TableCell>
          <TableCell>p50 latency</TableCell>
          <TableCell>p99 latency</TableCell>
          <TableCell>peak QPS</TableCell>
          <TableCell>p50 latency</TableCell>
          <TableCell>p99 latency</TableCell>
          <TableCell>peak QPS</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <InstanceType color={'#9737AB'}>c4</InstanceType>
          </TableCell>
          <TableCell>
            <Italics>coming soon</Italics>
          </TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
          <TableCell>-</TableCell>
        </TableRow>

        <TableDivider />

        <TableRow>
          <TableCell>
            <InstanceType color={'#9737AB'}>c12</InstanceType>
          </TableCell>
          <TableCell>36 ms</TableCell>
          <TableCell>2143 ms</TableCell>
          <TableCell>200</TableCell>
          <TableCell>207 ms</TableCell>
          <TableCell>455 ms</TableCell>
          <TableCell>10</TableCell>
        </TableRow>

        <TableDivider />

        <TableRow>
          <TableCell>
            <InstanceType color={'#9737AB'}>c36</InstanceType>
          </TableCell>
          <TableCell>34 ms</TableCell>
          <TableCell>74 ms</TableCell>
          <TableCell>500</TableCell>
          <TableCell>121 ms</TableCell>
          <TableCell>303 ms</TableCell>
          <TableCell>20</TableCell>
        </TableRow>
      </Card>
    </SectionMargins>
  </SectionWrapper>
);
