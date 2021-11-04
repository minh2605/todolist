import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.textInputHandler.bind(this);
  }
  textInputHandler = (e) => {
    this.props.setInputText(e.target.value);
  };

  submitTodoHandler = (e) => {
    e.preventDefault();
    const todos = this.props.todos;
    const setTodos = this.props.setTodos;
    const inputText = this.props.inputText;
    const setInputText = this.props.setInputText;
    setTodos([
      ...todos,
      {
        text: inputText,
        isCompleted: false,
        id: Math.round(Math.random() * 1000),
      },
    ]);
    setInputText("");
  };

  statusHandler = (e) => {
    this.props.setStatus(e.target.value);
  };

  render() {
    return (
      <form className="form">
        <div className="add">
          <input
            onChange={this.textInputHandler}
            value={this.props.inputText}
            type="text"
            className="form-input"
          />
          <button className="form-btn" onClick={this.submitTodoHandler}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="select">
          <select
            onChange={this.statusHandler}
            name="todos"
            className="filter-todo"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Form;
