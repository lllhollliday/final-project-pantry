import SearchMenu from "../components/SearchMenu"
import RecipeCards from "../components/RecipeCards"
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
