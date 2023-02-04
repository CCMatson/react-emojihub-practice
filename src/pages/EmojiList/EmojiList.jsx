// Import useState:
import { useEffect, useState } from 'react'

const EmojiList = () => {
	// Initialize monsterList state:
  const [emojiList, setEmojiList] = useState([])

  useEffect(()=> {
    console.log('Component mounted!')
  }, [])

  return (
    <>
      <h3>Emoji List (OMG wow)</h3>
      {emojiList.map((emoji, idx) => 
        <div key={idx}>{emoji.name}</div>
        )}
    </>
  );
}

export default EmojiList;