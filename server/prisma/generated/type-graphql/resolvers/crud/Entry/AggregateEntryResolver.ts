import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateEntryArgs } from "./args/AggregateEntryArgs";
import { Entry } from "../../../models/Entry";
import { AggregateEntry } from "../../outputs/AggregateEntry";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Entry)
export class AggregateEntryResolver {
  @TypeGraphQL.Query(_returns => AggregateEntry, {
    nullable: false
  })
  async aggregateEntry(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEntryArgs): Promise<AggregateEntry> {
    return getPrismaFromContext(ctx).entry.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
