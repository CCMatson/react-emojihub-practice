// Import useState:
import { useEffect, useState } from 'react'
import { getEmojiList } from '../../services/api-calls'
import { Link } from 'react-router-dom'

const EmojiList = () => {
	// Initialize monsterList state:
  const [emojiList, setEmojiList] = useState([])

  useEffect(()=> {
    const fetchEmojiList = async () => {
      const emojiData = await getEmojiList()
      setEmojiList(emojiData.results)
    }
    fetchEmojiList()
  }, [])

  return (
    <>
      <h3>Here are some popular emojis (OMG wow)</h3>
      {emojiList.map((emoji, idx) => 
      {
        return <div>
          <Link to="/emoji" state={{emoji}} key={idx}>{emoji.name}</Link>
        </div>
      }
        )}
    </>
  );
}

export default EmojiList;