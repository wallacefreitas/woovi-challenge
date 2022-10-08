import { graphql } from "react-relay";

export const createOneEntryMutation = graphql`
  mutation CreateEntryMutation($data: EntryCreateInput!) {
    createOneEntry(data: $data) {
      __id,
      id
      title
      description
      date
      value
      type
    }
  }
`;