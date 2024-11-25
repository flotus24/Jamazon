import CardSimilarItems from "@/components/CardSimilarItems"
import CardItems from "@/components/CardItems"
import Slider from "@/components/Slider"

export default function Home() {
  return (
    <div>
      <div>
        <Slider />
        <CardSimilarItems />
        <CardItems />
      </div>
    </div>
  )
}
