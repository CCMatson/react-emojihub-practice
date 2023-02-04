const baseUrl = "https://api.emojisworld.fr/v1"

export async function getEmojiList() {
  const res = await fetch(`${baseUrl}/popular`)
  return res.json()
}