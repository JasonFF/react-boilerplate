import * as types from '../constants/ActionTypes'

export default function checkTypes(type) {
  if (types[type]) {
    return type
  }
}