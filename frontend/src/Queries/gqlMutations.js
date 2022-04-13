import { gql } from "@apollo/client"

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`

export const SIGN_IN_USER = gql`
  mutation signin($email: String!, $password: String!) {
    signinUser(email: $email, password: $password) {
      token
    }
  }
`

export const ADD_RECIPE = gql`
  mutation addRecipe(
    $name: String!,
    $username: String!
    $category: String!,
    $instructions: String!,
    $description: String!
  ) {
    addRecipe(
      name: $name,
      username: $username,
      category: $category,
      instructions: $instructions,
      description: $description
    ) {
      _id
      name
      username
      description
      instructions
      createdDate
      likes
    }
  }

`
