export const updateParam = (param, value) => {
  return {
    type: "UPDATE_PARAM",
    param: param,
    value: value
  }
}

export const requestParamRange = (param) => {
  return {
    type: "REQUEST_PARAM_RANGE",
    param: param 
  }
}

export const updateParamRange = (param, value) => {
  return {
    type: "UPDATE_PARAM_RANGE",
    param: param,
    value: value
  }
}