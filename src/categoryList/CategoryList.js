import React from "react";
import "./CategoryList.css";

function CategoryList(prop) {
  const list = prop.categoryList.map(category => (
    <li className="itemStyle" key={category.id.toString()}>
      {category.name}
    </li>
  ));
  return (
    <div className="listContent">
      <ul className="listStyle">{list}</ul>
    </div>
  );
}
export default CategoryList;
