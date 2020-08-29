var recipes = {
  flour: "2 cups",
  sugar: "1tbs",
  milk: "1 cup"
}


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
  
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return(object)
}  


function deleteFromObjectByKey(object, key) {
  delete object[key]
}