import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import reducer from "./reducers/postReducer";
import { useEffect, useReducer, useRef, useCallback } from "react";

const mockPosts = [
  {
    id: 0,
    title: "졸업논문 지도교수 배정신청",
    isPublished: false,
  },
  {
    id: 1,
    title: "장학금 안내",
    isPublished: false,
  },
  {
    id: 2,
    title: "수강신청 날짜 공지",
    isPublished: false,
  },
];

function App() {
  const [posts, dispatch] = useReducer(reducer, mockPosts);
  const idRef = useRef(3);

  const onCreate = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        title: content,
        isPublished: false,
      },
    });
  }, []);

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  }, []);

  const onReset = useCallback(() => {
    if (window.confirm("초기화 하시겠습니까?")) {
      dispatch({
        type: "RESET",
      });
    }
  }, []);

  useEffect(() => {
    console.log("AdminPage mounted");
  }, []);

  useEffect(() => {
    console.log("Posts updated");
  }, [posts]);

  useEffect(() => {
    // 클린업, 정리함수
    return () => {
      console.log("AdminPage unmounted");
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List
        posts={posts}
        onUpdate={onUpdate}
        onDelete={onDelete}
        onReset={onReset}
      />
    </div>
  );
}

export default App;
