import { gql } from 'graphql-tag';

export const GET_USER = gql`
{
    user{
        id
        username
        email_id
    }
}
`;

export const GET_CART = gql`
{    user{
        cart{
            id
            status
            items{
                grocery{
                    id
                }
                quantity
            }
        }
    }
}`;