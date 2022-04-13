import React, { useState, useEffect } from "react"
import { useMutation } from "@apollo/client"
import { Link, navigate } from "gatsby"

// import { useHistory } from "react-router-dom";

import "../login/LoginPage.css"
import { CREATE_USER } from "../../Queries/gqlMutations"
import { RouteComponentProps } from "../../Types/RouteComponentProps"


const RegisterPage: React.FC<RouteComponentProps> = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  }
  const [addUser, { loading }] = useMutation(CREATE_USER, {
    onError: ({ networkError, graphQLErrors }) => {
      if (networkError) {
        console.log("NetworkError:", networkError.message)
      }
      if (graphQLErrors) {
        graphQLErrors.map(({ message }) => {
          console.log(message)
        })
      }
    },
    onCompleted: async ({ signupUser }) => {
      localStorage.setItem("token", signupUser.token)
      navigate("/", {
        replace: true,
      })
      setUserInfo(initialState)
    },
  })
  const [userInfo, setUserInfo] = useState(initialState)
  const { username, email, password, confirm_password } = userInfo
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    const { username, email, password, confirm_password } = userInfo
    if (password !== confirm_password) {
      return
    }
    e.preventDefault()
    addUser({
      variables: {
        username,
        email,
        password,
      },
    })
  }
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = e => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }
  // const history = useHistory()

  return (
    <div className="container">
      <div className="background-image" />
      <div className={"login-container"}>
        <div className="card-container">
          <form className="form" onSubmit={handleSubmit}>
            <h3 id="title">Register</h3>
            <label className="label">Username</label>
            <input
              name="username"
              className="input"
              type="text"
              placeholder="Enter Username"
              required
              value={username}
              onChange={onChangeHandler}
            />

            <label className="label">Email Address*</label>
            <input
              name="email"
              className="input"
              type="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={onChangeHandler}
            />

            <label className="label">Password*</label>
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={onChangeHandler}
              required
            />

            <label className="label">Confirm Password*</label>
            <input
              name="confirm_password"
              className="input"
              type="password"
              placeholder="Enter Password"
              value={confirm_password}
              onChange={onChangeHandler}
              required
            />

            <button className="submit-button">Submit</button>
            <label className="forgot-password">
              Already have an account?{" "}
              <b
                style={{ color: "gold" }}
                // onClick={() => history.push("login")}
              >
                <Link to="../login">Sign In</Link>
              </b>
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage