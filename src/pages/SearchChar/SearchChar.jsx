import { useState } from "react";
import SearchForm from "../searchForm/SearchForm";
import { charSearch } from "../../services/api-calls";
import { Link } from "react-router-dom";

const SearchChar = () => {
  const [chars, setChars] = useState([])

  const handleCharSearch = async formData => {
    const searchResults = await charSearch(formData)
    setChars(searchResults.results)
  }
  return (
    <>
      <h1>Enter a word or number to search for an emoji</h1>
      <SearchForm handleCharSearch={handleCharSearch} />
      {chars.map((char, id) =>
        <div key={char.name}>
          <h4>{char.name}</h4>
          <h4>{char.emoji}</h4>
          <h4>Category: {char.category.name}</h4>
          <h4>Subcategory: {char.sub_category.name}</h4>
          </div>


      )}



    </>
  )
}

export default SearchChar