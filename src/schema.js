import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    post(length: Int!): [Post]
  }

  type Mutation {
    addPost(title: String!): Boolean!
    addComment(postId: String!, text: String!): Boolean!
  }

  type Post {
    id: String!
    title: String!
    comments: [Comment]
  }

  type Comment {
    text: String!
  }
`;
