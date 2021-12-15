import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./pages/App/App";
import Layout from "./components/Layout/Layout";
import Game from "./pages/Game/Game";
import Todo from "./pages/Todo/Todo";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />}></Route>
        <Route path='game' element={<Game />}></Route>
        <Route path='todo' element={<Todo />}></Route>
        <Route path='*' element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
