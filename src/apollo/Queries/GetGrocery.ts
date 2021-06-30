import { gql } from 'graphql-tag';

export const GET_GROCERY_BY_ID = gql`
query GET_GROCERY($id: Int!){
    groceryById(id: $id){
    id
    name
    cost
    unit
    image
  }
}
`;