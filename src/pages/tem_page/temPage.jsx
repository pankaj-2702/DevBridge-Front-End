import RatingStars from "../../components/review/RatingStars"
import { useState } from "react"

const TemPage =()=>{
    const [rating, setRating] = useState(0);
    return (
       <RatingStars
    rating={rating}
    setRating={setRating}
/>
    )
}

export default TemPage