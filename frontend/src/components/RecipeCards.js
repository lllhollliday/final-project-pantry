import { useEffect, useState } from "react"
import styled from "styled-components"

// home page to render the top random recipes as the first cards

function RecipeCards() {
  const [random, setRandom] = useState([])

  // run the search as soon as the page loads (gets mounted)
  useEffect(() => {
    getRandom()
  }, [])

  const getRandom = async () => {
    const api = await fetch(`https://dummyjson.com/products/?limit=12`)

    const data = await api.json()

    setRandom(data.products)

    console.log(data)
  }

  return (
    <FlexWrap>
      <Wrapper>
        {random.map((recipe) => {
          return (
            <div>
              <CardImg key={recipe.id}>
                <img src={recipe.images[0]} alt={recipe.title} />
              </CardImg>{" "}
              <TitleTextWrapper>
                <CardTitle>
                  {recipe.title}
                  <p>Preparation time: {recipe.time}</p>
                </CardTitle>
              </TitleTextWrapper>
            </div>
          )
        })}
      </Wrapper>
    </FlexWrap>
  )
}

const FlexWrap = styled.div`
  margin-top: 30rem;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  justify-items: center;
  width: 50rem;
  margin: 4rem 0rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 8rem;
`

const CardImg = styled.div`
  width: 100%;
  min-height: 17rem;
  max-height: 17rem;
  border-radius: 2rem;
  border: 1px solid black;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 200%;
    height: 100%;
  }
`
const TitleTextWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`

const CardTitle = styled.div`
  font-size: 20px;

  p {
    font-size: 15px;
  }
`
export default RecipeCards
