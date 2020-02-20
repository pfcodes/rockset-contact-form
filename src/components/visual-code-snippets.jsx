let apiKey = 'XKQL6YCU0zDUglhW...';
let bucketName = 'rs-users-table';
let streamName = 'rs-website-clickstream';
let query =
  'SELECT \n\
        visits.promotion AS promotion, \n\
        sum(visits.converted)/count(visits.converted) AS clickthrough \n\
    FROM visits \n\
    GROUP BY clickthrough';

export default [
  {
    name: 'CLI',
    style: 'sh',

    // create a streaming collection
    createStreaming: `$ rock create collection "visits" \\
> "kinesis://${streamName}"`,

    // create a static collection
    createStatic: `$ rock create collection "users" \\
> "s3://${bucketName}"`,

    // run a query
    runQuery: `$ rock sql "${query}"`,
  },
  {
    name: 'cURL',
    style: 'sh',

    // create a streaming collection
    createStreaming: `curl -X POST -H "Content-Type: application/json" \\
  -H "Authorization: ApiKey ${apiKey}" \\
  -d '{
    "name": "visits",
    "sources": [{
      "kinesis": {
        "stream_name": "${streamName}"
      }
    }]
  }' \\
https://api.rs2.usw2.rockset.com/\\
v1/orgs/self/ws/commons/collections`,

    // create a static collection
    createStatic: `curl -X POST -H "Content-Type: application/json" \\
  -H "Authorization: ApiKey ${apiKey}" \\
  -d '{
    "name": "users",
    "sources": [{
      "s3": {
        "bucket_name": "${bucketName}"
      }
    }]
  }' \\
https://api.rs2.usw2.rockset.com/\\
v1/orgs/self/ws/commons/collections`,

    // run a query
    runQuery: `curl -X POST -H "Content-Type: application/json" \\
  -H "Authorization: ApiKey XKQL6YCU0zDUglhW" \\
  -d '{
    "sql": {
      "query": "${query}"
    }
  }' \\
https://api.rs2.usw2.rockset.com/\\
v1/orgs/self/queries`,
  },
  {
    name: 'Python',
    style: 'python',

    // create a streaming collection
    createStreaming: `from rockset import Client

rs = Client(api_key='${apiKey}')
rs.Collection.create('visits', 
    sources=[rs.Source.kinesis('${streamName}')])`,

    // create a static collection
    createStatic: `from rockset import Client

rs = Client(api_key="${apiKey}")
rs.Collection.create('users', 
    sources=[rs.Source.s3('${bucketName}')])`,

    // run a query
    runQuery: `from rockset import Client, Q

rs = Client(api_key='${apiKey}')
rs.query(Q('''${query}'''))`,
  },
  {
    name: 'Java',
    style: 'java',

    // create a streaming collection
    createStreaming: `import com.rockset.client.RocksetClient;
import com.rockset.client.model.*;
import java.util.*;

RocksetClient rs = new RocksetClient("${apiKey}");
List<Source> sources = new ArrayList<Source>;
sources.add(
    new Source().kinesis(
        new SourceKinesis().streamName("${streamName}")));
rs.createCollection(new CreateCollectionRequest()
    .name("visits")
    .sources(sources));`,

    // create a static collection
    createStatic: `import com.rockset.client.RocksetClient;
import com.rockset.client.model.*;
import java.util.*;

RocksetClient rs = new RocksetClient("${apiKey}");
List<Source> sources = new ArrayList<Source>;
sources.add(
    new Source().s3(
        new SourceS3().bucketName("${bucketName}")));
rs.createCollection(new CreateCollectionRequest()
    .name("users")
    .sources(sources));`,

    // run a query
    runQuery: `import com.rockset.RocksetClient;
import com.rockset.model.*;

RocksetClient rs = new RocksetClient("${apiKey}");
rs.query(new QueryRequest()
    .sql(new QueryRequestSql()
        .query("${query}")));`,
  },
  {
    name: 'Node',
    style: 'js',

    // create a streaming collection
    createStreaming: `var rs = require('rockset')('${apiKey}');

rs.collections.create({
  'name': 'visits',
  'source': {
    'kinesis': {
      'stream_name': '${bucketName}'
    }
  }
})`,

    // create a static collection
    createStatic: `var rs = require('rockset')('${apiKey}');

rs.collections.create({
  'name': 'users',
  'source': {
    's3': {
      'bucket_name': '${bucketName}'
    }
  }
});`,

    // run a query
    runQuery: `var rs = require('rockset')('${apiKey}');

rs.queries.query({
  'sql': {
    'query': \`${query}\`
  }
});`,
  },
  {
    name: 'Go',
    style: 'golang',

    // create a streaming collection
    createStreaming: `import apiclient "github.com/rockset/rockset-go-client"
import models "github.com/rockset/rockset-go-client/lib/go"

rs := apiclient.Client("${apiKey}")
rs.Collection.Create(models.CreateCollectionRequest{
  Name: "visits",
  Sources: []models.Source{{
    Kinesis: &models.SourceKinesis{
      StreamName: "${streamName}",
    },
  }},
})`,

    // create a static collection
    createStatic: `import apiclient "github.com/rockset/rockset-go-client"
import models "github.com/rockset/rockset-go-client/lib/go"

rs := apiclient.Client("${apiKey}")
rs.Collection.Create(models.CreateCollectionRequest{
  Name: "users",
  Sources: []models.Source{{
    S3: &models.SourceS3{
      BucketName: "${bucketName}",
    },
  }},
})`,

    // run a query
    runQuery: `import apiclient "github.com/rockset/rockset-go-client"
import models "github.com/rockset/rockset-go-client/lib/go"

rs := apiclient.Client("${apiKey}")
rs.Query(models.QueryRequest{
  Sql: &models.QueryRequestSql{
    Query: \`${query}\`,
  },
})`,
  },
];
