// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ListItem = {
  __typename?: 'ListItem';
  _id: Scalars['ID']['output'];
  statusType?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ListItemInput = {
  statusType?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createList?: Maybe<ListItem>;
  deleteList?: Maybe<ListItem>;
  updateList?: Maybe<ListItem>;
};


export type MutationCreateListArgs = {
  item?: InputMaybe<ListItemInput>;
};


export type MutationDeleteListArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateListArgs = {
  id: Scalars['ID']['input'];
  item?: InputMaybe<ListItemInput>;
};

export type Query = {
  __typename?: 'Query';
  getListQuery?: Maybe<Array<Maybe<ListItem>>>;
};

export type GetListQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListQueryQuery = { __typename?: 'Query', getListQuery?: Array<{ __typename?: 'ListItem', _id: string, title?: string | null, statusType?: string | null } | null> | null };


export const GetListQueryDocument = gql`
    query GetListQuery {
  getListQuery {
    _id
    title
    statusType
  }
}
    `;
export type GetListQueryProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetListQueryQuery, GetListQueryQueryVariables>
    } & TChildProps;
export function withGetListQuery<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetListQueryQuery,
  GetListQueryQueryVariables,
  GetListQueryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetListQueryQuery, GetListQueryQueryVariables, GetListQueryProps<TChildProps, TDataName>>(GetListQueryDocument, {
      alias: 'getListQuery',
      ...operationOptions
    });
};

/**
 * __useGetListQueryQuery__
 *
 * To run a query within a React component, call `useGetListQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetListQueryQuery(baseOptions?: Apollo.QueryHookOptions<GetListQueryQuery, GetListQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListQueryQuery, GetListQueryQueryVariables>(GetListQueryDocument, options);
      }
export function useGetListQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListQueryQuery, GetListQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListQueryQuery, GetListQueryQueryVariables>(GetListQueryDocument, options);
        }
export function useGetListQuerySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetListQueryQuery, GetListQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetListQueryQuery, GetListQueryQueryVariables>(GetListQueryDocument, options);
        }
export type GetListQueryQueryHookResult = ReturnType<typeof useGetListQueryQuery>;
export type GetListQueryLazyQueryHookResult = ReturnType<typeof useGetListQueryLazyQuery>;
export type GetListQuerySuspenseQueryHookResult = ReturnType<typeof useGetListQuerySuspenseQuery>;
export type GetListQueryQueryResult = Apollo.QueryResult<GetListQueryQuery, GetListQueryQueryVariables>;