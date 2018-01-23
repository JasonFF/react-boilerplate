import checkTypes from './checkTypes'

export default function action ({type, data}) {
  return {
    type: checkTypes(type),
    data
  }
}