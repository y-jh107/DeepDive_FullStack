import SubscriberInfo from "./SubscriberInfo";
import React, { useCallback, useContext } from "react";
import { SubscriptionContext } from "./contexts/SubscriptionContext";

function SubscribeButton() {
  const { isSubscribed, toggleSubscribe } = useContext(SubscriptionContext);

  const handleClick = useCallback(() => {
    toggleSubscribe();
  }, [toggleSubscribe]);

  return (
    <div>
      <button onClick={handleClick}>{isSubscribed ? "구독중" : "구독"}</button>
    </div>
  );
}

export default React.memo(SubscribeButton);
