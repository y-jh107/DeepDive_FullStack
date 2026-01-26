import "./List.css";
import PostItem from "./PostItem";
import { useState } from "react";

const List = ({ posts, onUpdate, onDelete, onReset }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return posts;
    }
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()),
    );
  };

  const onClickReset = () => {
    onReset();
  };

  const filteredPosts = getFilteredData();

  return (
    <div className="List">
      <div className="list-header">
        <h4>Post List 📋</h4>
        <button onClick={onClickReset} className="reset">
          Reset
        </button>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />
      <div className="post-wrapper">
        {filteredPosts.map((post) => {
          return (
            <PostItem
              key={post.id}
              {...post}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
