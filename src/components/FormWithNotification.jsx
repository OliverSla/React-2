import { useEffect, useState, useReducer } from "react";
import Modal from "../components/useReducer/Modal";
import formNotificationData from "../data/formNotificationData.js";
import { v4 as uuidv4 } from "uuid";

const FormWithNotification = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_MOVIE":
        const newFilms = [...state.movies, action.payload];
        return {
          ...state,
          movies: newFilms,
          showNotification: true,
          notification: "Film bol pridaný",
        };
      case "NO_VALUE":
        return {
          ...state,
          showNotification: true,
          notification: "Pole nesmie byť prázdne",
        };
      case "CLOSE_NOTIFICATION":
        return {
          ...state,
          showNotification: false,
        };
      case "DELETE_MOVIE":
        const filteredMovies = state.movies.filter(
          (movie) => movie.id !== action.payload
        );
        return {
          ...state,
          movies: filteredMovies,
        };
      default:
        return state;
    }
  };

  const defaultState = {
    movies: formNotificationData,
    showNotification: false,
    notification: "",
  };

  const [movieName, setMovieName] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitHandler = (e) => {
    e.preventDefault();

    if (movieName) {
      dispatch({
        type: "ADD_MOVIE",
        payload: { name: movieName, id: uuidv4() },
      });
    } else {
      dispatch({ type: "NO_VALUE" });
    }

    setMovieName("");
  };

  const inputHandler = (e) => {
    setMovieName(e.target.value);
  };

  const closeNotification = () => {
    dispatch({ type: "CLOSE_NOTIFICATION" });
  };

  const deleteObject = (movieID) => {
    dispatch({ type: "DELETE_MOVIE", payload: movieID });
  };

  const filterHandler = (e) => {
    setFilterValue(e.target.value);
  };

  // Filtrované filmy sú odvodené priamo pri vykreslení
  const filteredMovies = filterValue
    ? state.movies.filter((movie) =>
        movie.name.toLowerCase().includes(filterValue.toLowerCase())
      )
    : state.movies;

  return (
    <>
      <div className="formular formPadding">
        <form onSubmit={submitHandler}>
          {state.showNotification && (
            <Modal
              notification={state.notification}
              closeNotification={closeNotification}
            />
          )}
          <input
            type="text"
            placeholder="Zadaj názov filmu"
            onChange={inputHandler}
            value={movieName}
          />
          <input
            type="text"
            placeholder="Filtrovať"
            onChange={filterHandler}
            value={filterValue}
          />
          <input type="submit" value="Odoslať" />
        </form>
      </div>
      <div className="result">
        {filteredMovies.map((movie, index) => {
          return (
            <div key={movie.id} className="oneFilm">
              <p>{index + 1}</p> <h3>{movie.name}</h3> <button onClick={() => deleteObject(movie.id)}>Zmazať</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FormWithNotification;
