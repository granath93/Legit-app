import React from "react";
import "./App.css";
import articleTopImg from "./images/wrestling.jpg"
import HeadTitle from "./headtitle/HeadTitle";
import ArticleInfo from "./articleInfo/ArticleInfo";
import CategoryList from "./categoryList/CategoryList";
import CategoryItem from "./categoryItem/CategoryItem";
import ArticleBody from "./articleBody/ArticleBody";
import ArticleImg from "./articleImg/ArticleImg";
//import Textarea from "./textarea/Textarea"

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

const articleBody = 'Lorem ipsum dolor \u003ci\u003e sit amet, <b>consectetur</b> \u003c\u002fi\u003e adipiscing elit, sed do eiusmod tempor <u> incididunt ut labore et </u> dolore magna. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea lorem. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <center> <h2>aliqua</h2> </center>  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <em>mollit</em> anim id est laborum.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default App;
