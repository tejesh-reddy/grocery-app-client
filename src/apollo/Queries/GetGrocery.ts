import { gql } from 'graphql-tag';

export const GET_GROCERY_BY_ID = gql`
Query(id: ID!){
    groceryById(id: $id){

    id
    name
    cost
    unit
    image
  }
}
`;