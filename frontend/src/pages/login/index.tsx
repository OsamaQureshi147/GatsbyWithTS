import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { navigate } from "gatsby";

import "./LoginPage.css"
import Seo from "../../components/seo"
import { SIGN_IN_USER } from "../../Queries/gqlMutations"
import { RouteComponentProps } from "../../Types/RouteComponentProps"


const LoginPage: React.FC<RouteComponentProps> =  () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string>("")

  const [loginUser, { loading }] = useMutation(SIGN_IN_USER, {
    onCompleted: async({ signinUser }) => {
      localStorage.setItem("token", signinUser.token)
      navigate("/", {
        replace: true,
      })
      setError("");
    },
    onError: ({ networkError, graphQLErrors }) => {
      if (networkError) {
        console.log("Network Error:", networkError.message)
      }
      if (graphQLErrors) {
        graphQLErrors.map(({ message }) => {
          setError(message)
          console.log("gQL Error", error)
        })
      }
    },
  })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()
    await loginUser({
      variables: {
        email,
        password,
      },
    })
    setEmail("")
    setPassword("")
  }
  return (
    <>
      <Seo title="Recipe | Login" />
      <div className="container">
        <div className="background-image" />
        <div className={"login-container"}>
          <div className="card-container">
            <form className="form" onSubmit={handleSubmit}>
              <h3 id="title">Login</h3>
              <label className="label">Email Address*</label>
              <input
                className="input"
                type="email"
                placeholder="Enter Email"
                required
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.currentTarget.value)
                }
              />
              <label className="label">Password*</label>
              <input
                className="input"
                type="password"
                placeholder="Enter Password"
                value={password}
                required
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.currentTarget.value)
                }
              />
              <div className="check-box-container">
                <input className="check-box" type="checkbox" />
                <label>Remember me</label>
              </div>
              <button className="submit-button">Submit</button>
              <label className="forgot-password">
                Forgot <b style={{ color: "gold" }}>Password?</b>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}


export default LoginPage