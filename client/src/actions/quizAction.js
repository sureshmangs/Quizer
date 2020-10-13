import { FETCH_QUIZ } from './types';
import axios from 'axios';


export const fetchQuiz = (id) => {
    return async dispatch => {
        try {
            const res = await axios.post('/quiz/fetchQuiz', {
                "quizid": id
            })
            dispatch({
                type: FETCH_QUIZ,
                payload: res.data
            });

        } catch (err) {
            console.log('error', err)
        }
    };
}