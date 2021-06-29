import React from 'react';
import { GET_CATEGORIES } from '../../../apollo/Queries/GetCategories';
import { Query } from 'react-apollo';
import { CategoryListing, CategoryListingProps } from '../../molecules/CategoryListing';
import { DataHandler, DataHandlerProps } from '../../molecules/DataHandler';
import { GroceryListing, GroceryListingProps } from '../../molecules/GroceryListing';

export type CategoriesProps = {}

export const Categories = () => {


    return (
        <Query query={GET_CATEGORIES}>
            {({data, loading, error} : any) => {
                console.log(data)
                const args:DataHandlerProps<GroceryListingProps> = {
                    data,
                    loading,
                    error,
                    Component: GroceryListing,
                }
                return DataHandler({...args})
            }}

        </Query>
    )
};
