import { useState } from 'react'

const SearchForm = (props) => {
  const [formData, setFormData] = useState ({query: ''})

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
    console.log(evt.target.value)
  }
  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleCharSearch(formData)
    console.log(formData)
  }


  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
      <input name="query" type="text" autoComplete='off'
      value={formData.query}
      onChange={handleChange}
      placeholder="Enter a number"/>
      <button type="submit">Search</button>
    </form>
    </div>
    </>
  )




}

export default SearchForm