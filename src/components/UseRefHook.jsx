import { useRef, useState } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    inputRef.current.textContent = name;
    inputRef.current.style.fontSize = "2em";
    inputRef.current.style.color = "green";
    inputRef.current.style.margin = "50px";
    inputRef.current.style.textTransform = "uppercase";

    setName("");
  };

  const inputHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="UseRefHook">
      <h2 ref={inputRef}>Oliver</h2>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Zmeniť meno"
          value={name}
          onChange={inputHandler}
        />
        <input type="submit" value={"Zmeniť meno"} />
      </form>
    </div>
  );
};

export default UseRefHook;
