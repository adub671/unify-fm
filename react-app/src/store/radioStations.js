const GET_ALL_STATIONS = "station/GET_ALL_STATIONS";
const ADD_STATION = "station/ADD_STATION";
const DELETE_STATION = "station/DELETE_STATION";
const EDIT_STATION = "station/EDIT_STATION";

const getAllStations = (stations) => {
  return {
    type: GET_ALL_STATIONS,
    stations,
  };
};

export const addStation = (station) => {
  return {
    type: ADD_STATION,
    station,
  };
};

export const removeStation = (station) => {
  return {
    type: DELETE_STATION,
    station,
  };
};

const editAStation = (station) => {
  return {
    type: EDIT_STATION,
    station,
  };
};

// get all stations
export const getStations = (station) => async (dispatch) => {
  const response = await fetch(`/api/station`);

  if (response.ok) {
    const data = await response.json();
    dispatch(getAllStations(data));
  }

  return response;
};

// create new station
export const newStation = (station) => async (dispatch) => {
  const response = await fetch(`/api/station`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(station),
  });

  if (response.ok) {
    const data = await response.json();
    if (!data.errors) {
      dispatch(addStation(data));
      return data;
    } else return data.errors;
  } else {
    alert("Error Occurred during Create Station");
  }
};
// edit station
export const editStation = (station) => async (dispatch) => {
  const response = await fetch(`/api/station/${station.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(station),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(editAStation(data));
    return data;
  } else {
    alert("Error Occurred During Edit Station");
  }
};

// delete radio station
export const deleteStation = (station) => async (dispatch) => {
  const response = await fetch(`/api/station/${station.id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(removeStation(station));
  } else {
    alert("Error Occurred during Delete Station");
  }
};

const initialState = { stations: {} };

const stations = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_STATIONS:
      newState = { ...action.stations };
      return newState;
    case ADD_STATION:
      newState = { ...state };
      newState[action.station.id] = action.station;
      return newState;
    case DELETE_STATION:
      newState = { ...state };
      delete newState[action.station.id];
      return newState;
    case EDIT_STATION:
      newState = { ...state };
      newState[action.station.id] = action.station;
      return newState;
    default:
      return state;
  }
};
export default stations;
