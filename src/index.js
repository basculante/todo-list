import React from "react";
import ReactDOM from "react-dom";
import TodoList from"./TodoList";
import "./index.css";

var destination = document.querySelector("#container");

ReactDOM.render(
	<div>
		<h1 className="title">todo list</h1>
		<TodoList />
	</div>,
	destination
	);