import { gql } from 'graphql-tag';

export const GET_CATEGORIES = gql`
{
    categories{
      id
      name
      groceries{
        id
        name
        cost
        unit
        image
      }
    }
  }
`;