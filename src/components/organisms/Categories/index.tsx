import React from 'react';
import { GET_CATEGORIES } from '../../../apollo/Queries/GetCategories';
import { Query } from 'react-apollo';
import { DataHandler, DataHandlerProps } from '../../molecules/DataHandler';
import { GroceryListing, GroceryListingProps } from '../GroceryListing';
import { Order } from '../../../types';

export type CategoriesProps = {
    cart: Order,
    onUpdate: (data:any) => any
}

export const Categories = ({cart, onUpdate}:CategoriesProps) => {


    return (
        <Query query={GET_CATEGORIES}>
            {({data, loading, error} : any) => {
                const args:DataHandlerProps<GroceryListingProps> = {
                    data,
                    loading,
                    error,
                    Component: GroceryListing,
                    additionalProps: {
                        cart: cart,
                        onUpdate: onUpdate,
                    }
                }
                return DataHandler({...args})
            }}

        </Query>
    )
};
