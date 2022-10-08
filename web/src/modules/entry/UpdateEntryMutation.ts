import { graphql } from "react-relay";

export const updateOneEntryMutation = graphql`
  mutation UpdateEntryMutation($data: EntryUpdateInput!, $where: EntryWhereUniqueInput!) {
    updateOneEntry(data: $data, where: $where) {
      __id,
      type
      value
      date
      description
      title
      id
    }
  }
`;