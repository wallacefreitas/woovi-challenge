import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EntryAvgOrderByAggregateInput } from "../inputs/EntryAvgOrderByAggregateInput";
import { EntryCountOrderByAggregateInput } from "../inputs/EntryCountOrderByAggregateInput";
import { EntryMaxOrderByAggregateInput } from "../inputs/EntryMaxOrderByAggregateInput";
import { EntryMinOrderByAggregateInput } from "../inputs/EntryMinOrderByAggregateInput";
import { EntrySumOrderByAggregateInput } from "../inputs/EntrySumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EntryOrderByWithAggregationInput", {
  isAbstract: true
})
export class EntryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EntryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EntryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EntryAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: EntryAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EntryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EntryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EntryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EntryMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EntrySumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: EntrySumOrderByAggregateInput | undefined;
}
