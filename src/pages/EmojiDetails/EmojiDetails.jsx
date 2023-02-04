import { useState, useEffect } from "react";
import { useLocation , Link } from 'react-router-dom'

const EmojiDetails =() => {
  const location = useLocation()
  const[emojiDetails, setEmojiDetails] = useState(location.state.emoji)


  return(
    <>
    <div>
      <h3>Emoji Details</h3>
      <h2>{emojiDetails.emoji}</h2>
      <h4>Name : {emojiDetails.name}</h4>
      <h4>Category : {emojiDetails.category.name}</h4>
    </div>
    </>
  )
}

export default EmojiDetails;