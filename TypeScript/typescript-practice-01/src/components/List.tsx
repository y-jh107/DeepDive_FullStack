import Subscribe from "./Subscribe";
import type { Subscriber } from "../types/subscriber";

const List = ({
  subscribers,
  onUpdate,
}: {
  subscribers: Subscriber[];
  onUpdate: (targetId: number) => void;
}) => {
  const countSubscribers = subscribers.length;

  return (
    <div>
      <h3>구독자 목록🧑‍🧑‍🧒‍🧒</h3>
      <div>구독자 수: {countSubscribers}</div>
      {subscribers.map((subscriber) => (
        <Subscribe key={subscriber.id} {...subscriber} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default List;
