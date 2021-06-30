import React from 'react';
import { Query } from 'react-apollo';
import { NumberLiteralType } from 'typescript';
import { GET_GROCERY_BY_ID } from '../../../apollo/Queries/GetGrocery';
import { QueryData } from '../../../apollo/types';
import { Grocery as GType} from '../../../types';
import { DataHandler, DataHandlerProps } from '../../molecules/DataHandler';
import { GroceryCard, GroceryCardProps } from '../../molecules/GroceryCard';

export type GroceryProps = {
    id: number,
}

export const Grocery = ({id}: GroceryProps) => {

    const addToCart = () => console.log('added', id)
    const removeFromCart = () => console.log('removed', id)


    return (
        <Query query={GET_GROCERY_BY_ID} variables={{ id }}>
            {({data, loading, error}: any) => {
                const args:DataHandlerProps<GroceryCardProps> = {
                    loading,
                    error,
                    data,
                    Component: GroceryCard,
                    additionalProps: {
                        addHandler: addToCart,
                        reduceHandler: removeFromCart
                    }
                }

                return <DataHandler {...args}/>
            }}
        </Query>
    )
};

