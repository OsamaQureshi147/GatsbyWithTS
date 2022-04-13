import React from "react"
import HomePage from "./home/HomePage"
import { Router, Link } from "@reach/router"
import CustomAppBar from "../components/CustomAppBar"
import Login from "../pages/login"
import Register from "../pages/register"
import AddRecipe from "../pages/addRecipe"
import { RouteComponentProps } from "../Types/RouteComponentProps"
import { WithSession } from "../components/WithSession"

const App: React.FC<RouteComponentProps> = ({ session, refetch }) => {
  const hello = "Hello World"
  return (
    <>
      <CustomAppBar path="/" session={session} refetch={refetch} />

      <Router>
        <HomePage path="/" />
        <Login path="/login" />
        <Register path="/register" />
        <AddRecipe path="/xyz" session={session} username={hello} />
      </Router>
    </>
  )
}

export default WithSession(App)
