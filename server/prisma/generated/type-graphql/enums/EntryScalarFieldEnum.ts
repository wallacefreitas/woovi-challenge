import * as TypeGraphQL from "type-graphql";

export enum EntryScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  date = "date",
  value = "value",
  type = "type"
}
TypeGraphQL.registerEnumType(EntryScalarFieldEnum, {
  name: "EntryScalarFieldEnum",
  description: undefined,
});
