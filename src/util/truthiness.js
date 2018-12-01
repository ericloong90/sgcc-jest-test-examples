let simpleNull = () => {
  return null
}

let simpleUndefined = () => {
  return undefined
}

let simpleDefined = () => {
  return 1
}

let simpleTruthy = () => {
  return true
}

let simpleFalsy = () => {
  return false
}

let simpleString = (string) => {
  return string
}

let simpleArray = (array) => {
  return array
}

let simpleError = () => {
  throw new Error('Error')
}

export {
  simpleNull,
  simpleUndefined,
  simpleDefined,
  simpleTruthy,
  simpleFalsy,
  simpleString,
  simpleArray,
  simpleError,
}