import SearchMenu from "../components/SearchMenu"
import RecipeCards from "../components/RecipeCards.js"
import CarouselLanding from "../components/CarouselLanding"

export default function Home() {
  return (
    <div>
      <CarouselLanding />
      <SearchMenu />
      <RecipeCards />
    </div>
  )
}
