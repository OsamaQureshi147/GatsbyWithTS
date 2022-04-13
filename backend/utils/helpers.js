const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user
  return jwt.sign({ username, email }, secret, { expiresIn })
}

const encryptPassword = async password => {
  const hashPwd = await bcrypt.hash(password, 10)
  return hashPwd
}

const decryptPassword = async (plainPassword, hashPassword) => {
  let result = await bcrypt.compare(plainPassword, hashPassword)
  return result //returns boolean
}

const verifyUser = token => {
  return jwt.verify(token, process.env.SECRET) //returns a user with username and email
}

module.exports = {
  createToken,
  encryptPassword,
  decryptPassword,
  verifyUser,
}
