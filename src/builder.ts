import SchemaBuilder from "@pothos/core";
// 1
import { DateResolver } from "graphql-scalars";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
// 2
import { prisma } from "./db";

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: { Input: Date; Output: Date };
  };
  PrismaTypes: PrismaTypes;

}>({  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  }, });

// 3
builder.addScalarType("Date", DateResolver, {});
builder.queryType({});
