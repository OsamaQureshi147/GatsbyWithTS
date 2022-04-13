const express = require("express")
const mongoose = require("mongoose")
const { ApolloServer } = require("apollo-server-express")
const cors = require("cors")
require("dotenv").config({ path: "variables.env" })

const User = require("./Models/User")
const Recipe = require("./Models/Recipe")
const { typeDefs } = require("./schema")
const { resolvers } = require("./resolvers")
const { verifyUser } = require("./utils/helpers")

//Connects to DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected!!!"))
  .catch(err => console.error(err))

//Initialise the connection
const app = express()
app.use(cors())
app.use(express.json({ extended: true }))

//Setup JWT authentication middleware
app.use(async (req, res, next) => {
  const token = req.headers["authorization"]
  if (token) {
    try {
      const currentUser = verifyUser(token)
      req.currentUser = currentUser
    } catch (error) {
      console.error(error)
    }
  }
  next()
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => {
   const currentUser = req.currentUser 
    return {
      User,
      Recipe,
      currentUser,
    }
  },
})
server.applyMiddleware({ app })

const PORT = process.env.PORT || 4000

app.listen({ port: PORT }, () => console.log(`server running at ${PORT}`))
