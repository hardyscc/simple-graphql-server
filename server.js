import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const typeDefs = fs.readFileSync('schema.graphql', 'utf8');
const resolvers = {
  Query: {
    viewer(root, args, context) {
      return { id: "1", name: "Tommy" }
    }
  },
}

const PORT = 3000;
const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: makeExecutableSchema({ typeDefs, resolvers }),
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  query: `{
  viewer {
    id
    name
  }
}
`,
}));

app.listen(PORT, () => {
  console.log(`Graphql Server is now running on http://localhost:${PORT}/graphql`);
});
