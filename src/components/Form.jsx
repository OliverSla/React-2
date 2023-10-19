import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [users, setUsers] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : []
  );

  const formSubmit = (e) => {
    e.preventDefault();

    if (userName !== "" && userEmail !== "") {
      setUsers([...users, { id: uuidv4(), name: userName, email: userEmail }]);
    } else {
      alert("Pole nesmie byť prázdne!");
    }

    setUserName("");
    setUserEmail("");
  };

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [users]);

  return (
    <>
    <article className="formular">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Méno"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
          value={userEmail}
        />
        <div className="submitWrapper">
          <input type="submit" value="Odoslať" />
        </div>
      </form>
    </article>
    <div className="result">
      <h2>Users from localStorage</h2>

        {users.length > 0 ? <div className="users">
          {users.map((oneUser, index) => {
            const {id, name, email} = oneUser;

            return(
              <div key={id} className="oneUserWrapper">  
                <p className="indexOfUser">{index + 1}. </p>
                <p>ID: {id} </p>
                <p>Meno: {name} </p>
                <p>Email: {email} </p>
            </div>
            )

          })}
        </div> : null}


    </div>
    </>
  );
};

export default Form;
