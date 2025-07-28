import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Task from "./Components/Task";
import DeleteBtn from "./Components/DeleteBtn";
import { useState } from "react";
import AddTask from "./Components/AddTask";

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnchange = (e) => {
    setInputValue(e.target.value);
    console.log("cambion ", inputValue);
  };

  const handleOnAdd = () => {
    setTasksList([...tasksList, inputValue]);
    setInputValue("");
  };

  const onDelete = (index) => {
    const newArr = [...tasksList];
    newArr.splice(index, 1);
    setTasksList(newArr);
  };

  console.log("task", tasksList);
  return (
    <div className="App d-flex flex-column align-items-center">
      <h1>To do list</h1>
      <AddTask
        value={inputValue}
        onChange={handleOnchange}
        onClick={handleOnAdd}
      />
      {tasksList.length ? (
        tasksList.map((item, index) => {
          return (
            <Task key={index} text={item}>
              <DeleteBtn onClick={() => onDelete(index)} />
            </Task>
          );
        })
      ) : (
        <h1>nada que hacer</h1>
      )}
    </div>
  );
}

export default App;
