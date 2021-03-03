import { FETCH_BOOKS_START, FETCH_BOOKS_SUCCESS } from '../actions'

const initialState = {
    books: [],
    isLoading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                books: action.payload
                // action.payload is res.data (books array)
            }
        default:
            return state;
    }
}


export default reducer