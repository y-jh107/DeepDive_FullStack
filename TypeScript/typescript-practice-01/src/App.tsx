/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import type { Subscriber } from "./types/subscriber";
import { useState, useRef } from "react";

const mockData: Subscriber[] = [
  {
    id: 0,
    email: "example1@example.com",
    isSubscribed: true,
    createdAt: new Date(),
  },
  {
    id: 1,
    email: "example2@example.com",
    isSubscribed: true,
    createdAt: new Date(),
  },
  {
    id: 2,
    email: "example3@example.com",
    isSubscribed: true,
    createdAt: new Date(),
  },
];

function App() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>(mockData);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const idRef = useRef(3);

  const onCreate = (email: string) => {
    const newSubscriber = {
      id: idRef.current++,
      email: email,
      isSubscribed: true,
      createdAt: new Date(),
    };

    setSubscribers([newSubscriber, ...subscribers]);
  };

  const onUpdate = (targetId: number) => {
    setSubscribers(
      subscribers.map((subscriber) =>
        targetId === subscriber.id
          ? { ...subscriber, isSubscribed: !subscriber.isSubscribed }
          : subscriber,
      ),
    );
  };

  const onError = (message: string) => {
    setErrorMessage(message);
    window.alert(message);
  };

  return (
    <div className="App">
      <Header />
      <Editor subscribers={subscribers} onCreate={onCreate} onError={onError} />
      <List subscribers={subscribers} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
