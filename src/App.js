import React from "react";
import "./App.css";
import HeadTitle from "./headtitle/HeadTitle";
import ArticleInfo from "./articleInfo/ArticleInfo";
import CategoryList from "./categoryList/CategoryList";
import CategoryItem from "./categoryItem/CategoryItem";

function App() {
  return (
    <div className="App">
      <HeadTitle>Hello World</HeadTitle>
      <ArticleInfo {...articleInfo} />
      <CategoryList>
        {categories.map(category => {
          return <CategoryItem key={category.id} {...category} />;
        })}
      </CategoryList>
    </div>
  );
}

const articleInfo = {
  authorName: "Amanda Granath",
  timeToRead: "23",
  publishedDate: "2019-07-21"
};

const categories = [
  { id: "0", name: "Programming", url: "http://google.se" },
  { id: "1", name: "Photography", url: "http://google.se" },
  { id: "2", name: "UX", url: "http://google.se" }
];

export default App;
