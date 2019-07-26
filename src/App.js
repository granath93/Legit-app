import React from "react";
import "./App.css";
import HeadTitle from "./headtitle/HeadTitle";
import ArticleInfo from "./articleInfo/ArticleInfo";
import CategoryList from "./categoryList/CategoryList";
import CategoryItem from "./categoryItem/CategoryItem";

const categories = [
  { id: "0", name: "Programming" },
  { id: "1", name: "Photography" },
  { id: "2", name: "UX" }
];

function App() {
  return (
    <div className="App">
      <HeadTitle>Hello World</HeadTitle>
      <ArticleInfo {...articleInfo} />
      <CategoryList>
        {categories.map(category => {
          return <CategoryItem key={category.id} name = {category.name} />;
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

export default App;
