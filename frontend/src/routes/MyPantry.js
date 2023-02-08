import styled from "styled-components"
import SearchPantry from "../components/SearchPantry"
import { useState } from "react"
import RecipeCards from "../components/RecipeCards"

export default function MyPantry() {
  const [ingredient, setIngredient] = useState([])
  const [selectedIng, setSelectedIng] = useState([])
  const [input, setInput] = useState([])

  /*   const ingredients = ["carrot", "pasta", "beef", "celery", "tomato", "pork"]
   */

  const addToPantry = (e) => {
    e.preventDefault()
    setIngredient([...ingredient, input])
    setInput("")
  }

  const handleClick = (ingredient) => {
    // if ingredient is selected, highlight
    if (!selectedIng.includes(ingredient)) {
      setSelectedIng([...selectedIng, ingredient])
    } else {
      setSelectedIng(selectedIng.filter((i) => i !== ingredient))
    }
  }

  // remove item from pantry (button only renders when selected)
  const handleRemove = (removeIngredient) => {
    setIngredient((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient !== removeIngredient)
    )
  }

  console.log("ingredients state", ingredient)
  console.log("input state", input)
  console.log("selected:", selectedIng)
  return (
    <Wrapper>
      <div>
        {" "}
        <h1>My Pantry</h1>
        <LeftBlock>
          <form onSubmit={addToPantry}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="add to your pantry"
            />
          </form>
          <ul>
            {ingredient.map((ingredient, index) => (
              <li
                key={index}
                className={selectedIng.includes(ingredient) ? "selected" : ""}
                onClick={() => handleClick(ingredient)}
              >
                {ingredient}
                {selectedIng.includes(ingredient) ? (
                  <button onClick={() => handleRemove(ingredient)}>x</button>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </LeftBlock>{" "}
      </div>

      <RightBlock>
        <div>
          <h2>Cook with: {selectedIng.join(", ")}</h2>

          <ResponsiveWrap>
            <SearchPantry selectedIng={selectedIng} />
            <RecipeCards />
          </ResponsiveWrap>
        </div>
      </RightBlock>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 3rem;
  justify-content: center;
  width: 100vw;
  h1 {
    color:#3e6544ce;
    font-size: 30px;
    font-weight: 500;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
const LeftBlock = styled.div`
  margin-top: 2rem;
  padding-right: 1rem;
  height: 100%;
  border-right: 2px solid #3e6544ce;
  border-radius: 2px;
  //padding: 1rem;
  width: 20vw;
  ul{
    margin-left: -2rem;
  }

  li {
  margin-right: 5px;
    display: inline-block;
    flex-wrap: wrap;
    border: solid 1px green;
    border-radius: 15px;
    cursor: pointer;
    padding: 4px 12px;
    margin-top: 1rem;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    position: relative;
  
  }
  li.selected {
    //background-color: aliceblue;
    padding:6px 16px;
    border: 1px solid #ffb803;
  }

  input {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    margin-top: 7px;
    width: 90%;
    padding: 4px 6px;
    border-radius: 10px;
    border: 1px solid #ffb803;
  }
  input:focus {
    background-color: #fff;
    outline: #65a46f50;
    border: 2px solid #ffb803;
  }

  button{
    //margin-right: 6px;
    position: absolute;
    //top: 0;
    right: 8px;
    bottom: 18px;
    background-color: transparent;
    border: none;
    font-size: 10px;



  }
  button:hover{
    color: #ec5f18;
  }

  @media (max-width: 600px) {
    width: 100%;
    display: flex;

    input {
      margin-left: 1rem;
      border: 1px solid #3e6544ce;
      height: 2rem;
    }
  }
`

const RightBlock = styled.div`

  border: 2px solid #ffb803;
  border-radius: 10px;
  width: 60vw;
  margin-left:5rem;
  margin-top: 4rem;
  padding: 1rem;
  h2 {
   //margin-left: 5rem;
    font-weight: 400;
    font-size: 18px;
    font-family: "Roboto", sans-serif;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0;
    margin-top: 1rem;
  }
`
const ResponsiveWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 0;
`
