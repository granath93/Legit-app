import React from "react";
import "./App.css";
import articleTopImg from "./images/wrestling.jpg"
import HeadTitle from "./headtitle/HeadTitle";
import ArticleInfo from "./articleInfo/ArticleInfo";
import CategoryList from "./categoryList/CategoryList";
import CategoryItem from "./categoryItem/CategoryItem";
import ArticleBody from "./articleBody/ArticleBody";
import ArticleImg from "./articleImg/ArticleImg";

function App() {
  return (
    <div className="App">
      <HeadTitle>Hello World</HeadTitle>
      <ArticleInfo {...articleInfo} />
      <ArticleImg {...articleImg}/>
      <ArticleBody text={articleBody}/>
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
  publishedDate: "21 Jul"
};

const articleImg = {
  url: articleTopImg,
  comment: "Image comment..."
}

const categories = [
  { id: "0", name: "Programming", url: "http://google.se" },
  { id: "1", name: "Photography", url: "http://google.se" },
  { id: "2", name: "UX", url: "http://google.se" }
];

const articleBody = 'Lorem ipsum dolor \u003ci\u003e sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default App;
