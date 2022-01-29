import { call, put, delay, takeLatest } from "redux-saga/effects";
import { personalHomepageApi } from "./personalHomepageApi";
import {
  fetchError,
  fetchLoading,
  fetchSuccess,
} from "./personalHomepageSlice";

const loading = 3_000;

function* fetchPersonalHomepageHandler() {
  try {
    yield delay(loading);
    const page = yield call(personalHomepageApi);
    yield put(fetchSuccess(page));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* personalHomepageSaga() {
  yield takeLatest(fetchLoading.type, fetchPersonalHomepageHandler);
}
