import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
import connectDB from "../config/db";
import { commentsDataLoader } from "./commentDataloader";

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
      loaders: {
        commentsLoader: commentsDataLoader(),
      },
    }),
  });
  // Connection check with db
  await connectDB();
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
};

startServer();
