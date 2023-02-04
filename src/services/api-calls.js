const baseUrl = "https://api.emojisworld.fr/v1"

export async function getEmojiList() {
  const res = await fetch(`${baseUrl}/popular`)
  return res.json()
}

export async function charSearch (formData){
  const res = await fetch (`${baseUrl}/search?q=${formData.query}`)
  return res.json()
}