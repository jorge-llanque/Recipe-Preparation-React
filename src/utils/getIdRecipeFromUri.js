export default (uri) => {
  let catchIdFromUrl = uri.search("recipe_") + 7;
  let idRecipe = uri.slice(catchIdFromUrl, uri.length);
  return idRecipe
}