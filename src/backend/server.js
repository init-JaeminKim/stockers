import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import resolvers from "./graphql/resolvers.js";
import cors from 'cors'

const typeDefs = gql`

  type Articles {
    author: String!
    title: String!
    description: String!
  }

  type Symbols {
    name: String!
    symbol: String!
  }

  type Query {
    news(q: String): [Articles]!
    symbols: [Symbols]!
  }
`;



const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.use(cors())

app.listen({ port: 4000 }, () =>
  console.log("Now browse to http://localhost:4000" + server.graphqlPath)
);
