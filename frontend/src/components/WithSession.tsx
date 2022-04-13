import React from 'react';
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../Queries/gqlQueries";

export const WithSession = Component => props => {
  const { data, loading, refetch, error } = useQuery(GET_CURRENT_USER, {
    onCompleted: (data) => {
      console.log(data);
    },
    onError: ({ networkError, graphQLErrors }) => {
      if (networkError) {
        console.log(networkError);
      }
      if (graphQLErrors) {
        graphQLErrors.map(({ message }) => console.log(message));
      }
    },
  });
    if (loading) return null;
    return(
        <Component {...props} session={data} refetch={refetch} />
    );
}