import { FETCH_QUIZ } from '../actions/types';

const QUIZ_DEFAULT_STATE = {
    quiz: {}
}

export default (state = QUIZ_DEFAULT_STATE, action) => {
    switch (action.type) {
        case FETCH_QUIZ:
            return {
                ...state,
                quiz: action.payload
            }
        default:
            return {
                ...state
            }
    }
}