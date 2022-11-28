const GET_FAVORITE_STATIONS = "station/GET_FAVORITES";
const ADD_FAVORITE_STATION = "station/ADD_FAVORITE";
const DELETE_FAVORITE_STATION = "station/DELETE_FAVORITE";

const setFavoriteStations = (favorites) => {
  return {
    type: GET_FAVORITE_STATIONS,
    favorites,
  };
};

export const addFavoriteStation = (favoriteIndex) => {
  return {
    type: ADD_FAVORITE_STATION,
    favoriteIndex,
  };
};

export const removeFavoriteStation = (favoriteIndex) => {
  return {
    type: DELETE_FAVORITE_STATION,
    favoriteIndex,
  };
};

// get all stations
export const getFavoriteStations = (station) => async (dispatch) => {
  const response = await fetch(`/api/favorite`);

  if (response.ok) {
    const data = await response.json();
    dispatch(setFavoriteStations(data));
  }

  return response;
};

// Favorite A Station
export const newFavorite = (station) => async (dispatch) => {
  const response = await fetch(`/api/favorite/${station.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(station),
  });
  if (response.ok) {
    dispatch(addFavoriteStation(station.id));
  } else {
    alert("Error Occurred during Favorite-ing station");
  }
};

// Un-favorite station
export const deleteFavorite = (station) => async (dispatch) => {
  const response = await fetch(`/api/favorite/${station.id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(removeFavoriteStation(station.id));
  } else {
    alert("Error Occurred during Un-favorite-ing a station");
  }
};

const initialState = [];

const favorites = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_FAVORITE_STATIONS:
      newState = action.favorites;
      return newState;
    case ADD_FAVORITE_STATION:
      newState = [...state];
      newState.push(action.favoriteIndex);
      return newState;
    case DELETE_FAVORITE_STATION:
      const index = state.indexOf(action.favoriteIndex);
      const newArr = state.splice(index - 1, 1);
      newState = [...newArr];
      return newState;
    default:
      return state;
  }
};
export default favorites;
