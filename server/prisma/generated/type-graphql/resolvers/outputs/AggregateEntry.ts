import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EntryAvgAggregate } from "../outputs/EntryAvgAggregate";
import { EntryCountAggregate } from "../outputs/EntryCountAggregate";
import { EntryMaxAggregate } from "../outputs/EntryMaxAggregate";
import { EntryMinAggregate } from "../outputs/EntryMinAggregate";
import { EntrySumAggregate } from "../outputs/EntrySumAggregate";

@TypeGraphQL.ObjectType("AggregateEntry", {
  isAbstract: true
})
export class AggregateEntry {
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
