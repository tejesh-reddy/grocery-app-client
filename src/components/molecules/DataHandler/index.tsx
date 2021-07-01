import React, { ComponentType } from 'react';

export type DataHandlerProps<P> = {
    error: any,
    loading: any,
    data: any,
    Component: React.FC<P>,
    additionalProps?: any
}


export function DataHandler<P>({error, loading, data, Component, additionalProps}:DataHandlerProps<P>) {

    if(error){
        console.log('error:', error)
        return <h1>Something went wrong...</h1>
    }
    if(loading){
        return <h1>Loading...</h1>
    }



    return <Component {...data} {...additionalProps}/>

};
