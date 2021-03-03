import axios from "axios";

export const FETCH_BOOKS_START = "FETCH_BOOKS_START";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";

export const fetchBooks = () => (dispatch) => {
  dispatch({ type: FETCH_BOOKS_START });
  axios
    .get("https://cat-fact.herokuapp.com/facts")
    .then((res) => {
        dispatch({ type: FETCH_BOOKS_SUCCESS, payload: res.data})
        // action.payload is res.data (books array)
    })
    .catch((err) => console.log(err));
};
