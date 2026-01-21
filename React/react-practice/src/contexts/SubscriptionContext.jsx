import { createContext, useState, useMemo } from "react";

const SubscriptionContext = createContext();

function SubscriptionProvider({ children }) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriberCount, setSubscriberCount] = useState(123);

  const toggleSubscribe = () => {
    if (!isSubscribed) {
      setIsSubscribed(true);
      setSubscriberCount((prev) => prev + 1);
    } else {
      setIsSubscribed(false);
      setSubscriberCount((prev) => prev - 1);
    }
  };

  const value = useMemo(
    () => ({
      isSubscribed,
      subscriberCount,
      toggleSubscribe,
    }),
    [isSubscribed, subscriberCount, toggleSubscribe],
  );

  return <SubscriptionContext value={value}>{children}</SubscriptionContext>;
}

export { SubscriptionContext, SubscriptionProvider };
