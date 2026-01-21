import "./App.css";
import { SubscriptionProvider } from "./contexts/SubscriptionContext";
import Header from "./Header";
import SubscribeButton from "./SubscribeButton";
import SubscriberInfo from "./SubscriberInfo";

function App() {
  return (
    <>
      <h2>구독 관리 대시보드</h2>
      <SubscriptionProvider>
        <Header />
        <SubscribeButton />
        <SubscriberInfo />
      </SubscriptionProvider>
    </>
  );
}

export default App;
