import { gql } from "@apollo/client"

export const GET_ALL_RECIPIES = gql`
  query {
    getAllRecipes {
      _id
      name
      category
      description
      instructions
      createdDate
      likes
      username
    }
  }
`

export const GET_CURRENT_USER = gql`
  query {
  getCurrentUser {
    username
    email
    joinDate
  }
}
`;
