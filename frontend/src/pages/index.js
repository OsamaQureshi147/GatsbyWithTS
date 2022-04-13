import * as React from "react"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import AppWithSession from './App'

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("token")
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  }
})

const client = new ApolloClient({
  // uri: "https://48p1r2roz4.sse.codesandbox.io",
  // uri: "http://localhost:5000/graphql",
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  // {
  // typePolicies: {
  //   User: {
  //     keyFields: ["email"],
  //   },
  // },
  // }
  connectToDevTools: true,
})


const IndexPage = () => (
  <ApolloProvider client={client}>
    <AppWithSession />
  </ApolloProvider>
)

export default IndexPage
