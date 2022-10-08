import "reflect-metadata";
import path from "path";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "./prisma/generated/type-graphql";

const prisma = new PrismaClient();

async function main() {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  })

  const context = {
    prisma
  }

  const server = new ApolloServer({
    schema,
    context
  });

  const { url } = await server.listen();

  console.log(url)

}

main();