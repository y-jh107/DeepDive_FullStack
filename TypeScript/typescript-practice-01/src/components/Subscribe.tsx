import "./Subscribe.css";
import { useRef } from "react";

const Subscribe = ({
  id,
  email,
  isSubscribed,
  createdAt,
  onUpdate,
}: {
  id: number;
  email: string;
  isSubscribed: boolean;
  createdAt: Date;
  onUpdate: (targetId: number) => void;
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const onClickSubscribe = () => {
    onUpdate(id);
  };

  return (
    <div className="Subscribe">
      <div>📌</div>
      <div className="content">{email}</div>
      <div>구독 날짜: {createdAt.toDateString()}</div>
      <button
        ref={buttonRef}
        onClick={onClickSubscribe}
        className="subscribe-btn"
      >
        {isSubscribed ? "해지" : "구독"}
      </button>
    </div>
  );
};

export default Subscribe;
