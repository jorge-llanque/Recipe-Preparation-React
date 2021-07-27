const APP_KEY = "7a559f6c982b3ea2cc4a7208024f028d"
const APP_ID = "c9da61d9"

export default function getResults({keyword}) {

  const API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=${APP_ID}&app_key=${APP_KEY}`

  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const {hits} = response
      if(Array.isArray(hits)){
        return hits
      }
    })
}
