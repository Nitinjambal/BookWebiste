import React from "react";
import { Routes, Route } from "react-router-dom";
import AddBook from "../pages/AddBook";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import BookEdit from "../pages/BookEdit";

function AllRoutes() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/newbook"} element={<AddBook />}></Route>
      <Route path={"/product/:id"} element={<BookEdit />}></Route>
      <Route path={"/editProduct/:id"} element={<BookEdit />}></Route>
      <Route path={"*"} element={<PageNotFound />}></Route>
    </Routes>
  );
}

export default AllRoutes;
