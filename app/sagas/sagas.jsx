import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { setFrontPage, getComments } from "RedditAPI";

async function* setFrontPage() {
    try {
        var frontPageData = await setFrontPage();
        yield put
    } catch (e) {

    } finally {

    }
}
