import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import React, { useState, useEffect } from "react";

function App() {
  //state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  //effect
  //Run once when react render the first time
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  const saveToLocal = () => {
    localStorage.setItem("todo_list", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todo_list") === null) {
      localStorage.setItem("todo_list", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todo_list")));
    }
  };

  const filterHandler = () => {
    console.log("filter handler was called");
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.isCompleted === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.isCompleted === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <header className="header">
        <h1>Albert's Todo List</h1>
      </header>
      {/* Can not pass setState() directly to props*/}
      {/* Pass through a function (setInputText) to handle setState */}
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     = {
//       inputText: "",
//       todos: [],
//       status: "all",
//       filterTodos: [],
//     };
//   }

//   setInputText = (inputText) => {
//     setState({ inputText: inputText });
//   };

//   setTodos = (todos) => {
//     setState({ todos: todos });
//   };

//   setStatus = (status) => {
//     setState({ status: status });
//   };

//   setFilterTodos = (filterTodos) => {
//     setState({ filterTodos: filterTodos });
//   };

//   filterHandler = () => {
//     switch (status) {
//       case "completed":
//         setFilterTodos(
//           status.filter((todo) => todo.isCompleted === true)
//         );
//         break;
//       case "uncompleted":
//         setFilterTodos(
//           status.filter((todo) => todo.isCompleted === false)
//         );
//         break;
//       default:
//         setFilterTodos(todos);
//         break;
//     }
//   };

//   render() {
//     return (
//       <div className="App">
//         <header className="header">
//           <h1>Albert's Todo List</h1>
//         </header>
//         {/* Can not pass setState() directly to props*/}
//         {/* Pass through a function (setInputText) to handle setState */}
//         <Form
//           todos={todos}
//           setTodos={setTodos}
//           inputText={inputText}
//           setInputText={setInputText}
//           setStatus={setStatus}
//         />
//         <TodoList todos={todos} setTodos={setTodos} />
//       </div>
//     );
//   }
// }

export default App;
