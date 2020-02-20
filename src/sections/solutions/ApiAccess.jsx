import * as React from 'react';
import { SectionHeader, SectionMargins, SectionSubHeader } from '../common/common';

import python from '../../images/python-logo.svg';
import r from '../../images/r-logo.svg';
import rest from '../../images/rest-logo.svg';
import go from '../../images/go-logo.svg';
import nodejs from '../../images/nodejs.svg';
import Java_logo from '../../images/Java_logo.svg';
import { TabContentSection } from './TabContentSection';

const content = [
  {
    image: python,
    title: 'Python',
    link: 'https://docs.rockset.com/python/',
    description:
      'Rockset’s Python package is called rockset and the entire API is contained within a single Python module called rockset. APIs defined in the rockset module allow you to securely connect to the Rockset service, create or manage collections and query Rockset.',
    content: (
      <pre>
        <code lang="python">
          {`# connect to Rockset
from rockset import Client, Q, F
rs = Client()

# build a query object
q = Q('hello_world').where(F['name'] == 'Jim Gray')
results = rs.sql(q)`}
        </code>
      </pre>
    ),
  },
  {
    image: nodejs,
    title: 'Node',
    description:
      'Rockset’s node client library allows you to securely connect to Rockset service, create, manage and administer collections and issue queries against collections.',
    link: 'https://docs.rockset.com/nodejs/',
    content: (
      <pre>
        <code lang="JavaScript">
          {`var client = require('rockset')("{apiKey}", "{apiServer}");

client.queries.query({
    'sql': {
        'query': 'select * from _events limit 1'
    }
}, function(error, response, body) {
    console.log(response);
});`}
        </code>
      </pre>
    ),
  },
  {
    image: Java_logo,
    title: 'Java',
    description:
      'Rockset’s Java client library allows you to securely connect to Rockset service, create, manage and administer collections and issue queries against collections.',
    link: 'https://docs.rockset.com/java/',
    content: (
      <pre>
        <code lang="java">
          {`import com.rockset.client.RocksetClient;

RocksetClient client = new RocksetClient("<apiKey>", "<apiServer>");
QueryRequest request = new QueryRequest()
                            .sql(new QueryRequestSql()
                            .query("select * from \"_events\""));
QueryResponse response = rs.query(request);
`}
        </code>
      </pre>
    ),
  },
  {
    image: rest,
    title: 'REST API',
    description:
      'Rockset is an API-first product. Rockset’s REST API allows for creating and managing all resources in Rockset. All endpoints are only accessible via https.',
    link: 'https://docs.rockset.com/rest-api/',
    content: (
      <pre>
        <code lang="bash">
          {`curl --request POST \\
  --url https://api.rs2.usw2.rockset.com/v1/orgs/self/queries \\
  -H 'Authorization: ApiKey <apikey>' \\
  -H 'Content-Type: application/json' \\
  -d '{
    "sql": {
      "query": "SELECT * FROM foo where _id = :_id",
      "parameters": [
        {
          "name": "_id",
          "type": "string",
          "value": "85beb391"
        }
      ]
    }
  }'`}
        </code>
      </pre>
    ),
  },
  {
    image: go,
    title: 'Golang',
    description:
      'Rockset’s Golang client library allows you to securely connect to Rockset service, create, manage and administer collections and issue queries against collections.',
    link: 'https://docs.rockset.com/golang/',
    content: (
      <pre>
        <code lang="go">
          {`import apiclient "github.com/rockset/rockset-go-client"

// create a Rockset client object
client := apiclient.Client("<apiKey>", "<apiServer>")          
// construct query
q := models.QueryRequest {
    Sql : &models.QueryRequestSql{
        Query: "select * from hello",
    },
};

// query
res, _, err := client.Query(q)
// print json result
fmt.Println(res)`}
        </code>
      </pre>
    ),
  },
  {
    image: r,
    title: 'R',
    description:
      'Rockset’s R language client is RRockset. R client is a DBI-based (https://db.rstudio.com/dbi/) adapter for Rockset and supports only read operations (querying collections).',
    link: 'https://docs.rockset.com/rlang/',
    content: (
      <pre>
        <code lang="python">
          {`library('DBI')
sql <- "select _id, kind from _events limit 5"
con <- dbConnect(RRockset::Rockset(), apikey='<api-key>')

# fetch the documents using dbSendQuery
res <- dbSendQuery(con, sql)
print(dbFetch(res))

# use dbGetQuery
res <- dbGetQuery(con, sql)
print(res)`}
        </code>
      </pre>
    ),
  },
];

export const ApiAccess = () => {
  return (
    <SectionMargins>
      <SectionHeader>API Access</SectionHeader>
      <SectionSubHeader>
        Insert, update and query data programmatically from custom application code using Rockset's
        client libraries wrapped on top of REST.
      </SectionSubHeader>
      <TabContentSection content={content} />
    </SectionMargins>
  );
};
