const {
  createToken,
  encryptPassword,
  decryptPassword,
} = require("./utils/helpers")
const { ApolloError } = require("apollo-server-express")

const resolvers = {
  Query: {
    getAllRecipes: async (parent, args, context) => {
      const { Recipe } = context
      const allRecipes = await Recipe.find()
      return allRecipes
    },

    getCurrentUser: async (parent, args, { currentUser, User }) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({ username: currentUser.username })
      .populate({
        path: 'favourites',
        model: 'User'
      });
      return user
    }
  },

  Mutation: {
    addRecipe: async (parent, args, context) => {
      const { name, description, category, instructions, username } = args
      const { Recipe } = context
      const recipe = new Recipe({
        name,
        description,
        category,
        instructions,
        username,
      })

      const result = await recipe.save()
      console.log("Recipe Saved:", result )
      return result
    },

    signupUser: async (root, args, context) => {
      const { username, email, password } = args
      const { User } = context
      const user = await User.findOne({ $or: [{ email }, { username }] })
      if (user) {
        throw new ApolloError("User Already Exists")
      }
      const hashPwd = await encryptPassword(password)
      const newUser = await new User({
        username,
        email,
        password: hashPwd,
      }).save()
      return { token: createToken(newUser, process.env.SECRET, "1hr") }
    },

    signinUser: async (root, args, context) => {
      const { email, password } = args
      const { User } = context
      const user = await User.findOne({ email })
      if (!user) {
        throw new ApolloError("Invalid Username")
      }

      const match = await decryptPassword(password, user.password)
      if (!match) {
        console.log("Wrong Password!!!")
        throw new ApolloError("Invalid Password")
      } else {
        console.log("Login Successful")
        return {
          token: createToken(user, process.env.SECRET, "1hr"),
        }
      }
    },
  },
}
module.exports = { resolvers }
