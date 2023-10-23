import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = () => {
  const [oneUser, setOneUser] = useState({ name: "", email: "" });
  const [users, setUsers] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : []
  );

  const inputChange = (e) => {
    const { name, value } = e.target;
    setOneUser({ ...oneUser, [name]: value });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (oneUser.name && oneUser.email) {
      setUsers([
        ...users,
        { id: uuidv4(), name: oneUser.name, email: oneUser.email },
      ]);
    } else {
      alert("Pole nesmie byť prázdne!");
    }

    for (const i in oneUser) {
      oneUser[i] = "";
    }
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
            onChange={inputChange}
            value={oneUser.name}
            name="name"
          />
          <input
            type="email"
            placeholder="Email"
            onChange={inputChange}
            value={oneUser.email}
            name="email"
          />
          <div className="submitWrapper">
            <input type="submit" value="Odoslať" />
          </div>
        </form>
      </article>
      <div className="resultUsersData">
        <h2>Users from localStorage</h2>

        {users.length > 0 ? (
          <div className="users">
            {users.map((oneUser, index) => {
              const { id, name, email } = oneUser;

              return (
                <div key={id} className="oneUserWrapper">
                  <p className="indexOfUser">{index + 1}. </p>
                  <p>ID: {id} </p>
                  <p>Meno: {name} </p>
                  <p>Email: {email} </p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Form;
