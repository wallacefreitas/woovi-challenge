import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EntryWhereInput } from "../../../inputs/EntryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEntryArgs {
  @TypeGraphQL.Field(_type => EntryWhereInput, {
    nullable: true
  })
  where?: EntryWhereInput | undefined;
}
