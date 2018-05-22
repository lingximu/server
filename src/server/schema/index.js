const {
    makeExecutableSchema, addMockFunctionsToSchema
} = require('graphql-tools');

import resolvers from './resolvers'
import typeDefs from './typeDefs'

const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

module.exports = schema
