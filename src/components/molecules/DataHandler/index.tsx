import React, { ComponentType } from 'react';

export type DataHandlerProps<P> = {
    error: any,
    loading: any,
    data: any,
    Component: React.FC<P>
}


export function DataHandler<P>({error, loading, data, Component}:DataHandlerProps<P>) {

    if(error){
        console.log('error:', error)
        return <h1>Something went wrong...</h1>
    }
    if(loading){
        console.log('loading')
        return <h1>Loading...</h1>
    }

    console.log('data:', data)


    return <Component {...data}/>

};
