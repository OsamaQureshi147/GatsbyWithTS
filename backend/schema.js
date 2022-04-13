const { gql } = require("apollo-server-express")

const typeDefs = gql`
  type Recipe {
    _id: ID
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String
    likes: Int
    username: String
  }

  type User {
    _id: ID
    username: String!
    password: String!
    email: String!
    joinDate: String!
    favourites: [Recipe]
  }

  type Token {
    token: String!
  }

  type Query {
    getAllRecipes: [Recipe]
    getCurrentUser: User
  }

  type Mutation {
    addRecipe(
      name: String!
      description: String!
      category: String!
      instructions: String!
      username: String!
    ): Recipe

    signupUser(username: String!, email: String!, password: String!): Token

    signinUser(email: String!, password: String!): Token
  }
`

module.exports = { typeDefs }
