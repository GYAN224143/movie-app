//import { type } from "@testing-library/user-event/dist/type";

// {
//     type: 'INCREASE_COUNT'
// }

// {
//     type: 'DECREASE_COUNT'
// }
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";

export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies
  };
}
export function addFavourite(movie) {
  return {
    type: ADD_FAVOURITES,
    movie
  };
}
export function removeFromFavourites(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie
  };
}
export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val
  };
}
