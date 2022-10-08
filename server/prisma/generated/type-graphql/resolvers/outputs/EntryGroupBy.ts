import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EntryAvgAggregate } from "../outputs/EntryAvgAggregate";
import { EntryCountAggregate } from "../outputs/EntryCountAggregate";
import { EntryMaxAggregate } from "../outputs/EntryMaxAggregate";
import { EntryMinAggregate } from "../outputs/EntryMinAggregate";
import { EntrySumAggregate } from "../outputs/EntrySumAggregate";

@TypeGraphQL.ObjectType("EntryGroupBy", {
  isAbstract: true
})
export class EntryGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  date!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  value!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => EntryCountAggregate, {
    nullable: true
  })
  _count!: EntryCountAggregate | null;

  @TypeGraphQL.Field(_type => EntryAvgAggregate, {
    nullable: true
  })
  _avg!: EntryAvgAggregate | null;

  @TypeGraphQL.Field(_type => EntrySumAggregate, {
    nullable: true
  })
  _sum!: EntrySumAggregate | null;

  @TypeGraphQL.Field(_type => EntryMinAggregate, {
    nullable: true
  })
  _min!: EntryMinAggregate | null;

  @TypeGraphQL.Field(_type => EntryMaxAggregate, {
    nullable: true
  })
  _max!: EntryMaxAggregate | null;
}
