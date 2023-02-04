import { useState, useEffect } from "react";
import { useLocation , Link } from 'react-router-dom'

const EmojiDetails =() => {
  const location = useLocation()
  const[emojiDetails, setEmojiDetails] = useState(location.state.emoji)


  return(
    <>
    <div>
      <h3>Details</h3>
      <h2>{emojiDetails.emoji}</h2>
    </div>
    </>
  )
}

export default EmojiDetails;