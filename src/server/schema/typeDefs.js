const typeDefs = `
  type Author {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post]
  }

  type Post {
    id: Int!
    title: String
    author: Author
    votes: Int
  }

  type Fruit {
    id: Int!
    name: String!
    price: Float
    image: String
    count: Int
    category: String
  }

  # the schema allows the following query:
  type Query {
    posts: [Post]
    author(id: Int!): Author
    fruits: [Fruit]
    fruit(id: Int!): Fruit
  }

  # this schema allows the following mutation:
  type Mutation {
    upvotePost (
      postId: Int!
    ): Post
  }
`;
export default typeDefs;
