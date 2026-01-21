import { useContext, useMemo } from "react";
import React from "react";
import { SubscriptionContext } from "./contexts/SubscriptionContext";

function SubscriberInfo() {
  const { subscriberCount } = useContext(SubscriptionContext);

  const calculateEvenSubscribers = (num) => {
    return num % 2 === 0 && num !== 0;
  };

  const isEven = useMemo(
    () => calculateEvenSubscribers(subscriberCount),
    [subscriberCount],
  );

  return (
    <div>
      <div>현재 구독자수: {subscriberCount}</div>
      <div>{isEven ? "🎉 짝수 구독자 이벤트" : ""}</div>
    </div>
  );
}

export default React.memo(SubscriberInfo);
