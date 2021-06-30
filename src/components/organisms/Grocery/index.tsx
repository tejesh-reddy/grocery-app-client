import React from 'react';
import { Query } from 'react-apollo';
import { NumberLiteralType } from 'typescript';
import { GET_GROCERY_BY_ID } from '../../../apollo/Queries/GetGrocery';
import { QueryData } from '../../../apollo/types';
import { Grocery as GType} from '../../../types';
import { DataHandler, DataHandlerProps } from '../../molecules/DataHandler';
import { GroceryCard, GroceryCardProps } from '../../molecules/GroceryCard';

export type GroceryProps = {
    id: number
}

export const Grocery = ({id}: GroceryProps) => {

    console.log('id:', id)

    return (
        <Query query={GET_GROCERY_BY_ID} variables={{ id }}>
            {({data, loading, error}: any) => {
                const args:DataHandlerProps<GroceryCardProps> = {
                    loading,
                    error,
                    data,
                    Component: GroceryCard,
                }

                return <DataHandler {...args}/>
            }}
        </Query>
    )
};

const JustId:React.FC<GroceryProps> = (props:any) => {
    return <h1>id: {props.groceryById.id}</h1>
}
