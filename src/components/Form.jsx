import { useEffect } from "react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  

  const submitFunc = (e) => {
    e.preventDefault();
    if(name !== ""){
      setNames([...names, name]);
    }else{
      alert("Meno musí obsahovať aspoň 1 znak")
    }
    setName("");
  };
  
  const inputHandler = (e) => {
    setName(e.target.value);
  };
  
  useEffect(() => {
    if(names.length !== 0){
      console.log(names)
    }
  },[names])


  return (
    <div className="formular">
      <form onSubmit={submitFunc}>
        <div className="from_userWrapper">
          <input type="text" placeholder="Meno" value={name} onChange={inputHandler} />
        </div>
        <div>
          <input className="from_submitWrapper" type="submit" />
        </div>
      </form>
      <div>
        {names.map((oneName, index) => {
          return <p key={index}>{oneName}</p>;
        })}
        </div>
    </div>
  );
};

export default Form;
