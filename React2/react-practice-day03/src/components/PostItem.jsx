import "./PostItem.css";
import { memo } from "react";

const PostItem = ({ id, title, isPublished, onUpdate, onDelete }) => {
  const onClickDeleteBtn = () => {
    onDelete(id);
  };

  const onClickReleaseBtn = () => {
    onUpdate(id);
  };

  return (
    <div className="PostItem">
      <div>📌</div>
      <div className="content">{title}</div>
      <button onClick={onClickReleaseBtn} className="release">
        {isPublished ? "비공개" : "공개"}
      </button>
      <button onClick={onClickDeleteBtn} className="delete">
        삭제
      </button>
    </div>
  );
};

export default memo(PostItem);
