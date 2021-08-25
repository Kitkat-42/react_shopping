/* eslint-disable */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState(0);
  let [작성일, 작성일변경] = useState(["2021.8.24", "2021.7.1", "2021.6.30"]);

  function 제목바꾸기() {
    // deep copy: 같은 값 공유 안하고 완전히 새로운 배열 만듦
    let newArray = [...글제목].sort();
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        {/* style은 중괄호 안에 object 형식으로 넣어주어야 한다. */}
        {/* 속성명은 camelCase로 바꿔주어야 한다. */}
        <div style={{ color: "blue", fontSize: "30px" }}> 개발 Blog </div>
      </div>
      <button
        onClick={() => {
          제목바꾸기();
        }}
      >
        정렬
      </button>
      <div className="list">
        <h3>
          {" "}
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍🏻
          </span>
          {따봉}
        </h3>
        <p>{작성일[0]}</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[1]} </h3>
        <p>{작성일[1]}</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[2]} </h3>
        <p>{작성일[2]}</p>
        <hr />
      </div>
      <Modal />
    </div>
  );
}

function Modal() {
  //원하는 이름 맘대로 지어서 쓸 수 있다
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
