import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("EntryScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class EntryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [EntryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: EntryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EntryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: EntryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [EntryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: EntryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  date?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => FloatWithAggregatesFilter, {
    nullable: true
  })
  value?: FloatWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  type?: StringWithAggregatesFilter | undefined;
}
