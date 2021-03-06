import {takeEvery, call, put, all} from 'redux-saga/effects'
import ShopActionsTypes from "./shop.types"
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils"
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./shop.actions"


export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)

        yield put(fetchCollectionsSuccess(collectionsMap))

    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}


export function* fetchCollectionStart() {
    yield takeEvery(ShopActionsTypes.FETCH_COLLECTION_START, fetchCollectionAsync)
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionStart)
    ])

}