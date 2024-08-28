import { useEffect, useRef, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 레퍼러스를 사용하여 컴포넌트가 마운트 되었을 때와 업데이트 될 때를 구분
  const didMountRef = useRef(false);

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const handleSetText = (e) => {
    setText(e.target.value);
  };

  // useEffect(() => {
  //   컴포넌트가 마운트 되었을 때 실행
  //   if (!didMountRef.current) {
  //   didMountRef.current = true;
  //   return;
  //   } else {
  //   컴포넌트 업데이트시에 실행
  //   console.log("update");
  //   }
  // });

  // useEffect(() => {
  //   console.log("update");
  // }, []);

  useEffect(() => {
    console.log("count :", count, "text :", text);
  }, [count, text]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜빡");
    }, 1000);
    return () => {
      console.log("clean up");
      clearInterval(intervalID);
    };
  });

  // 컴포넌트 생애주기 중 업데이트가 발생하는 3가지 조건 중 상태변수가 변경될때
  // count, text State이 변경될 때마다 실행
  // 컴포넌트 업데이트시에 useEffect의 콜백함수 실행
  // useEffect(() => {
  //   console.log("count :", count, "text :", text);
  // }, [count, text]);

  // useEffect의 두번째 인자가 없으면 컴포넌트가 업데이트 될 때마다 실행
  // useEffect(() => {
  //   console.log("count :", count, "text :", text);
  // });

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="text"
          onChange={(e) => handleSetText(e)}
          placeholder="텍스트를 입력하세요."
        ></input>
      </section>
      <section>
        <Viewer count={count} text={text} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;