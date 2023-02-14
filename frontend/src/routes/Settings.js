import React from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { globalContext } from "../context/globalContext"
import toast, { Toaster } from "react-hot-toast"
import styled from "styled-components"

export default function EditSettings() {
  const { user, setUser } = useContext(globalContext)
  const navigate = useNavigate()
  console.log(user)

  const SettingsUpdateRequest = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    fetch(`/users/${user._id}`, {
      method: "PATCH",
      headers: { token: localStorage.getItem("token") },
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        if (result.success) {
          toast.success("User Settings Updated!")
          setUser(result.user)
          setTimeout(() => {
            navigate("/profile")
          }, 1000)
        } else {
          toast.error(result.message)
        }
      })
  }

  return (
    <Wrapper>
      <Toaster
      
      />

      <div>
        <h2>Edit Profile</h2>
        <form onSubmit={SettingsUpdateRequest}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>First Name * </label>
            <input
              type="text"
              name="firstName"
              defaultValue={user?.firstName}
            />{" "}
            <br />
            <label>Last Name * </label>
            <input type="text" name="lastName" defaultValue={user?.lastName} />
            <br />
            <label>City, State, County (optional) </label>
            <input type="text" name="location" defaultValue={user?.location} />
            <h2 className="settingH2">Edit Settings</h2>
            <label>Birthday </label>
            <input
              className="birthdayInput"
              type="date"
              name="birthday"
              placeholder={"dd / mm / yyyy"}
            />
            <br />
          </div>

          <div className="buttons">
            <button>Save Changes</button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 3rem 0 0 -6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .buttons {
    button {
    }
  }

  h2 {
    margin-left: -12rem;
    font-size: 24px;
    color: #3e6544ce;
  }
  .settingH2 {
    margin-top: 3rem;
  }

  label,
  form,
  input {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
  }

  input {
    padding: 6px 10rem 6px 6px;
    margin: 8px -10rem 0 0;
    border-radius: 10px;
    border: 1px solid #3e6544ce;
  }

  .birthdayInput {
    ::-webkit-datetime-edit-text {
      padding: 0.6rem;
    }

    ::-webkit-calendar-picker-indicator {
      margin-left: 1rem;
    }
  }

  .buttons {
    margin-top: 2rem;
    font-family: "Roboto", sans-serif;
    font-size: 12px;

    button {
      padding: 5px 8px 5px 8px;
      border-radius: 10px;
      margin-right: 0.5rem;

      background-color: #3e6544ce;
      transition: ease-out 0.4s;
      color: #fff;
      border-radius: 10px;
      margin-right: 1.5rem;
      border: none;

      :hover {
        background-color: #65a46f52;
        transition: ease-in 0.25s;
        color: #35553aeb;
      }
    }
  }
`
