"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface Props extends React.PropsWithChildren {}

const ApolloProviders = ({ children }: Props) => {
  const client = new ApolloClient({
    uri: "https://todo-backend-dcwdog3ae-khulankhs-projects.vercel.app/api/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </>
  );
};

export default ApolloProviders;
