import resolvers from './resolvers';
import typeDefs from './typeDefs';
const {
  makeExecutableSchema, addMockFunctionsToSchema
} = require('graphql-tools');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
