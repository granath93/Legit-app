import React from "react";
import "./App.css";
import HeadTitle from "./headtitle/HeadTitle";
import ArticleInfo from "./articleInfo/ArticleInfo";
import CategoryList from "./categoryList/CategoryList";

function App() {
  return (
    <div className="App">
      <HeadTitle>Hello World</HeadTitle>
      <ArticleInfo />
      <CategoryList categoryList={categories} />
    </div>
  );
}

const categories = [
  { id: 0, name: "Programming" },
  { id: 1, name: "Photography" },
  { id: 2, name: "UX" }
];

export default App;
