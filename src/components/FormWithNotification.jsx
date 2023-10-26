import { useEffect, useState, useReducer } from "react";
import Modal from "../components/useReducer/Modal";
import formNotificationData from "../data/formNotificationData.js";
import { v4 as uuidv4 } from "uuid";

const FormWithNotification = () => {
  const reducer = (state, action) => {
    if (action.type === "ADD_MOVIE") {
      const newFilms = [...state.movies, action.payload];
      console.log(state.movies);
      console.log(newFilms);
      return {
        ...state,
        movies: newFilms,
        showNotification: true,
        notification: "Film bol pridaný",
      };
    } else if (action.type === "NO_VALUE") {
      console.log(state.movies);
      return {
        ...state,
        showNotification: true,
        notification: "Pole nesmie byť prázdne",
      };
    } else if (action.type === "CLOSE_NOTIFICATION") {
      return {
        ...state,
        showNotification: false,
      };
    } else if( action.type === "DELETE_MOVIE") {
      return (
        {
          ...state,
          movies: action.payload,
        }
      )
    }

    console.log("Nenašiel sa action.type");
  };

  const defaultState = {
    movies: formNotificationData,
    showNotification: false,
    notification: "",
  };

  const [movieName, setMovieName] = useState("");
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

  const clodeNotification = () => {
    dispatch({ type: "CLOSE_NOTIFICATION" });
  };

  const deleteObject = (movieID) => {
    const newMovies = state.movies.filter((movie) => movieID !== movie.id)
    dispatch({type: "DELETE_MOVIE", payload: newMovies})
  }

  return (
    <>
      <div className="formular formPadding">
        <form onSubmit={submitHandler}>
          {state.showNotification && (
            <Modal
              notification={state.notification}
              clodeNotification={clodeNotification}
            />
          )}
          <input
            type="text"
            placeholder="Zadaj názov filmu"
            onChange={inputHandler}
            value={movieName}
          />
          <input type="submit" value="Odoslať" />
        </form>
      </div>
      <div className="result">
        {state.movies.map((movie, index) => {
          return (
            <div key={index} className="oneFilm">
              <p>{index + 1}</p> <h3>{movie.name}</h3> <button onClick={() => deleteObject(movie.id)}> Zmazať </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FormWithNotification;
