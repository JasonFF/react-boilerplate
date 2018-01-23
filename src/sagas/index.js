/* eslint-disable no-constant-condition */

import { put, call, takeEvery } from 'redux-saga/effects'
import { delay } from 'redux-saga'

export function* incrementAsync() {
  console.log('ins')
  debugger
  yield call(delay, 1000)
  yield put({type: 'INCREMENT'})
}

export default function* rootSaga() {
  console.log('root')
  debugger
  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
}
