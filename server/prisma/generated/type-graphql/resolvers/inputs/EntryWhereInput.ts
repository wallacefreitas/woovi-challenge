import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("EntryWhereInput", {
  isAbstract: true
})
export class EntryWhereInput {
  @TypeGraphQL.Field(_type => [EntryWhereInput], {
    nullable: true
  })
  AND?: EntryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EntryWhereInput], {
    nullable: true
  })
  OR?: EntryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [EntryWhereInput], {
    nullable: true
  })
  NOT?: EntryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  date?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  value?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  type?: StringFilter | undefined;
}
