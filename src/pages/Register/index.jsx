import { useState } from "react"

import "../../styles/Register.css"

const Register = () => {
  const [user, setUser] = useState(null)

  return (
    <div className="register">
      <h1>Contest Calendar</h1>
      <form>
        <input type="email" placeholder="tourist@gmail.com" required />
        <input type="password" required />
        <button>Register</button>
      </form>
    </div>
  )
}

export default Register
