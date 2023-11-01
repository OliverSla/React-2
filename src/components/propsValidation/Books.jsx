import React from "react";
import Book from "./Book";
import formNotificationData from "../../data/formNotificationData";

const Books = () => {
  return (
    <div>
      {formNotificationData.map((oneBook, index) => {
        return <Book key={index} {...oneBook}/>;
      })}
    </div>
  );
};

export default Books;
