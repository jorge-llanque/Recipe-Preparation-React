const APP_KEY = "7a559f6c982b3ea2cc4a7208024f028d"
const APP_ID = "c9da61d9"

export default function getResults({keyword, dietParam, type, keywordType}) {

  console.log(keyword, type, keywordType)

  let API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  if(dietParam){
    API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=${APP_ID}&app_key=${APP_KEY}&diet=${dietParam}`
  }else if(type && type === "mealType") {
    API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${keywordType}`
  }else if(type && type === "dishType"){
    API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=${APP_ID}&app_key=${APP_KEY}&dishType=${keywordType}`
  }else if(type && type === "healthyType"){  
    API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${keywordType}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${keyword}`
  }else {
    API_URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${keyword}&app_id=${APP_ID}&app_key=${APP_KEY}`
  }

  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const {hits} = response
      if(Array.isArray(hits)){
        return hits
      }
    })
}
