import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {this.props.filterTodos.map((todo) => {
            return (
              <TodoItem
                todos={this.props.todos}
                setTodos={this.props.setTodos}
                key={todo.id}
                todo={todo}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
export default TodoList;
