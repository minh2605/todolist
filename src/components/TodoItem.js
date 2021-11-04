import React, { Component } from "react";
class TodoItem extends Component {
  deleteHandler = () => {
    const todosRemain = this.props.todos.filter((el) => {
      return el.id !== this.props.todo.id;
    });
    this.props.setTodos(todosRemain);
  };

  completeHandler = () => {
    this.props.setTodos(
      this.props.todos.map((el) => {
        if (el.id === this.props.todo.id) {
          return {
            ...el,
            isCompleted: !el.isCompleted,
          };
        }
        return el;
      })
    );
  };

  render() {
    return (
      <li
        className={`todo-item ${
          this.props.todo.isCompleted ? "completed" : ""
        }`}
      >
        <span className="todo-title">{this.props.todo.text}</span>
        <button onClick={this.completeHandler} className="btn btn-complete">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={this.deleteHandler} className="btn btn-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default TodoItem;
