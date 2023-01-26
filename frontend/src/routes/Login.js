import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import FormRow from "../components/FormRow"
import { globalContext } from "../context/globalContext"


const Login = () => {
  const [isMember, setIsMember] = useState(false)
  const { setUser} = useContext(globalContext)
  const navigate = useNavigate()

  const toggleMember = () => {
    setIsMember(!isMember)
  }


  const onSubmit = (e) => {
    e.preventDefault()
    const user = {email: e.target.email.value, password: e.target.password.value, name: e.target.name.value }
    fetch(`http://localhost:8000/users/${isMember?"login":"register"}`, {method:"POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(user)})
    .then(res => res.json())
    .then(result => {
      console.log(result)
      if(result.success){
        console.log(result)
        setUser (result.user)
        isMember?navigate("/profile"):
        setIsMember(true)
      }
    })
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Headers>
          <h3>{isMember ? "Login" : "Sign Up"}</h3>

          <p>
            <StyledButton
              type="button"
              onClick={toggleMember}
              className="signup-btn"
            >
              {isMember ? "Sign up now!" : "Login"}
            </StyledButton>
          </p>
        </Headers>
        {/* name input */}

        {!isMember && (
          <FormRow
            type="text"
            name="name"
          />
        )}

        {/* email input */}
        <FormRow
          type="email"
          name="email"
        />
        {/*  password input */}
        <FormRow
          type="password"
          name="password"
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



.form {
  width: 35rem;
  padding: 5rem 5.5rem;
  margin: 3rem auto;
  border: 1px solid var(--form-color);
  border-radius: 40px;
  background-color: var(--form-color);
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
}
.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: 0.375rem 0.75rem;
  border-radius: 10px;
}
.form-input,
.form-select,
.btn-block {
  height: 35px;
}
.form-row {
  margin-bottom: 1rem;
}

.form-textarea {
  height: 7rem;
}

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
