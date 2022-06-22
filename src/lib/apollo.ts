import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o543o40mg001z7fdde2zsr/master',
  cache: new InMemoryCache()
})