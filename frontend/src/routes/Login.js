import { useState } from "react"
import styled from "styled-components"
import FormRow from "../components/FormRow"

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
}

const Login = () => {
  const [values, setValues] = useState(initialState)

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      /*       displayAlert() */
      return
    }
    console.log(values)
  }
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Headers>
          <h3>{values.isMember ? "Login" : "Sign Up"}</h3>

          <p>
            {values.isMember ? "New user?" : "Already a member?"}
            <StyledButton
              type="button"
              onClick={toggleMember}
              className="signup-btn"
            >
              {values.isMember ? "Sign up now!" : "Login"}
            </StyledButton>
          </p>
        </Headers>
        {/* name input */}

        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/*  password input */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <SubmitButton type="submit" className="btn btn-block">
          Submit
        </SubmitButton>
      </form>
    </Wrapper>
  )
}

export default Login

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`

const Headers = styled.div`
  text-align: center;
  font-size: 18.1px;
  h3 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 400;
  }
`
const StyledButton = styled.button`
  color: #3e6544eb;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 18.1px;
  margin-left: 5px;
  letter-spacing: 0.2px;
  transition: ease-out 0.2s;

  :hover {
    transition: ease-in 0.1s;
    color: #fff3d6;
  }
`

const SubmitButton = styled.button`
  margin: 0 auto;
  display: block;
  color: black;
  text-decoration: none;
  padding: 3px 35px 3px 35px;

  font-size: 18px;
  border-radius: 10px;
  border: solid 1px #65a46fd6;
  cursor: pointer;
  background-color: #fff3d6;
  -webkit-box-shadow: -1px 4px 18px -10px #bababa;
  box-shadow: -1px 4px 18px -10px #bababa;

  /*   border: solid 1px #ffb703; */
  transition: ease-out 0.2s;
  :hover {
    border: solid 1px #65a46fd6;
    transition: ease-in 0.1s;
  }
`
