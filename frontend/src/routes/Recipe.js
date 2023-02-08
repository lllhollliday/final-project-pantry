import { useLocation } from "react-router-dom"
import styled from "styled-components"

function Recipe() {
  const { state } = useLocation()

  console.log(state)
  return (
    <FlexWrapper>
      {state && (
        <div>
          <HeadWrap>
            {" "}
            <img src={state.image} alt="" />
            <div>
              <h1>{state.label}</h1>
              <p>
                {state.totalTime > 0
                  ? `Preparation time: ${state.totalTime} mins`
                  : ""}
              </p>
              {/* <p>Diet: *need to fix* {state.health}</p>{" "} */}
            </div>
          </HeadWrap>
          <Line />
          {/*   <IngWrap> */}
          <h2>Ingredients </h2>
          <InlineWrap>
            <Quantity>
              {state.ingredients.map((ing) => {
                return (
                  <ul>
                    <li>
                      {ing.quantity}{" "}
                      {/*    = "<unit>" ? "" : `${ing.quantity}`  */}
                      {ing.measure}
                    </li>
                  </ul>
                )
              })}
            </Quantity>
            <Ing>
              {state.ingredients.map((ing) => {
                return (
                  <ul>
                    <li>{ing.food}</li>
                  </ul>
                )
              })}
            </Ing>
          </InlineWrap>
          {/*      </IngWrap> */}

          <h2>Instructions</h2>
          <p>Click here to see recipe</p>
        </div>
      )}
    </FlexWrapper>
  )
}

export default Recipe

const FlexWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  h2 {
    font-weight: 500;
    font-size: 24px;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }
`

const HeadWrap = styled.div`
  display: inline-flex;
  img {
    width: 23rem;
    height: auto;
    border-radius: 15px;
  }
  h1,
  p {
    width: 17rem;
    margin-left: 2rem;
    font-weight: 500;
  }
`

const Line = styled.div`
  border-bottom: 1px solid grey;
  width: 30rem;
  margin-left: 5.5rem;
  margin-top: 2rem;
`

/* const IngWrap = styled.div`
  h2 {
    font-weight: 300;
  }

  li {
    display: inline-flex;
  }
  p:nth-child(2) {
    margin-left: 6rem;
  }
`
 */
const InlineWrap = styled.div`
  display: inline-flex;
  margin-top: 2rem;

  li {
    list-style-type: none;
    font-size: 12px;
  }
`

const Quantity = styled.div`
  font-weight: 500;
`
const Ing = styled.div`
  margin-left: 5rem;
`
