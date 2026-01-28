import "./Editor.css";
import { useState, type ChangeEvent } from "react";
import type { Subscriber } from "../types/subscriber";

const Editor = ({
  subscribers,
  onCreate,
  onError,
}: {
  subscribers: Subscriber[];
  onCreate: (email: string) => void;
  onError: (message: string) => void;
}) => {
  const [email, setEmail] = useState<string>("");

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onClickSubscribe = () => {
    if (email === "") {
      onError("이메일을 입력하세요.");
      return;
    }

    const values: string[] = subscribers.map((s) => s.email);

    if (values.includes(email)) {
      onError("중복된 이메일입니다.");
      setEmail("");
      return;
    }
    onCreate(email);
    setEmail("");
  };

  return (
    <div className="Editor">
      <input
        value={email}
        onChange={onChangeEmail}
        placeholder="이메일을 입력하세요..."
      />
      <button
        onClick={onClickSubscribe}
        style={{ backgroundColor: "rgb(255, 30, 30)" }}
        className="subscribe-btn"
      >
        구독하기
      </button>
    </div>
  );
};

export default Editor;
