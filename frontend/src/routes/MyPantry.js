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
      <SidePantry>
        <h1>My Pantry</h1>
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
      </SidePantry>

      <RightBlock>
        <div>
          <h2>Cook with: {selectedIng.join(", ")}</h2>

          <SearchPantry selectedIng={selectedIng} />

          <RecipeCards />
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
  width: 90vw;
`
const SidePantry = styled.div`
  border: 1px solid red;
  border-radius: 15px;
  padding: 1rem;
  width: 40vw;
  h1 {
    font-size: 25px;
    font-weight: 500;
  }
  li {
    display: inline-block;
    flex-wrap: wrap;
    border: solid 1px green;
    border-radius: 20px;
    cursor: pointer;
    padding: 2px 9px 2px 9px;
    margin: 2px 4px 2px 4px;
  }
  li.selected {
    background-color: aliceblue;
  }

  input {
    font-family: "Roboto", sans-serif;
    font-size: 13px;
    margin-top: 7px;
    width: 13rem;
    padding: 4px 6px;
    border-radius: 10px;
  }
`

const RightBlock = styled.div`
  border: 1px solid orange;
  width: 65vw;
  margin-left: 2rem;
  padding: 1rem;
`
