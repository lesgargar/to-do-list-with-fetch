import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Task from "./Components/Task";
import DeleteBtn from "./Components/DeleteBtn";
import { useEffect, useState } from "react";
import AddTask from "./Components/AddTask";

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    createUser();
  }, []);

  const createUser = async () => {
    const response = await fetch(
      "https://playground.4geeks.com/todo/users/lesgarcia",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const responseJSON = await response.json();

    console.log("response to Json", responseJSON);
  };

  const handleOnchange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnAdd = () => {
    if (!inputValue.length) {
      alert("Task cannot be empty");
      return;
    }
    const newTodo = {
      label: inputValue,
      is_done: false,
    };
    fetch("https://playground.4geeks.com/todo/todos/lesgarcia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar datos");
        }
        return response.json();
      })
      .then((task) => {
        setTasksList([...tasksList, task]);
      })
      .catch((err) => console.log("falla crear", err))
      .finally(() => {
        setInputValue("");
      });
  };

  const onDelete = (id) => {
    const newArray = [...tasksList];
    fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en solicitud de eliminar");
        }
        return response;
      })
      .then(() => {
        const filterTaskList = newArray.filter((item) => item.id != id);
        setTasksList(filterTaskList);
      })
      .catch((err) => console.log("error al borrar", err));
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
            <Task key={item.id} text={item.label}>
              <DeleteBtn onClick={() => onDelete(item.id)} />
            </Task>
          );
        })
      ) : (
        <h1>No hay tareas pedientes</h1>
      )}
    </div>
  );
}

export default App;
