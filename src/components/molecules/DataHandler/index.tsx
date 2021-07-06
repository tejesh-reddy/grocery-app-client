import React, { ComponentType } from 'react';

export type DataHandlerProps<P> = {
    error: any,
    loading: any,
    data: any,
    Component: React.FC<P>,
    additionalProps?: any,
    errorMessage?: string
}


export function DataHandler<P>({error, loading, data, Component, additionalProps, errorMessage}:DataHandlerProps<P>) {

    if(error){
        console.log('error:', error)
        return <h1>{errorMessage? errorMessage: "Something went wrong..."}</h1>
    }
    if(loading){
        return <h1>Loading...</h1>
    }



    return <Component {...data} {...additionalProps}/>

};
