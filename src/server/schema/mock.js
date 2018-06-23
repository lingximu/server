// Welcome to Launchpad!
// Log in to edit and save pads, and run queries in GraphiQL on the right.

import {
  graphql
} from 'graphql';

import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';

const typeDefs = require('./typeDefs').default;

export const schema = makeExecutableSchema({
  typeDefs
});

const mocks = {
  // Here you could customize the mocks.
  // If you leave it empty, the default is used.
  // You can read more about mocking here: http://bit.ly/2pOYqXF
};

addMockFunctionsToSchema({
  schema
});

const query = `
query author {
    author(id: 2) {
        id
        name
        posts(limit: 3) {
            title
        }
    }
}
`;

graphql(schema, query).then((result) => {
  console.log('Got result', result);
});
