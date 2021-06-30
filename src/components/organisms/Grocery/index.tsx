import React from 'react';
import { Query } from 'react-apollo';
import { GET_GROCERY_BY_ID } from '../../../apollo/Queries/GetGrocery';
import { QueryData } from '../../../apollo/types';
import { DataHandler, DataHandlerProps } from '../../molecules/DataHandler';
import { GroceryCard } from '../../molecules/GroceryCard';

export type GroceryProps = {
    id: number,
}

export const Grocery = (id: number) => {

    return (
        <Query query={GET_GROCERY_BY_ID}>
            {({data, loading, error}: any) => {
                const args:DataHandlerProps = {
                    loading,
                    error,
                    data,
                    Component: GroceryCard
                }

                return <DataHandler {...args}/>
            }}
        </Query>
    )
};
