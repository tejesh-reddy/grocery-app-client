import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link'




const authLink = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem("auth_token")
    if(token){
        operation.setContext({
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
    }

    return forward(operation);
});



const httpLink = new HttpLink({
    uri: 'http://localhost:8080/graphql',
});


export const apolloClient =  new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
});
