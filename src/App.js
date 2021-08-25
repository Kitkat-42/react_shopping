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
  let [modal, modal변경] = useState(false);
  let array = [2, 3, 4];

  let newArray = array.map(function (a) {
    return a * 2;
  });

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

      {글제목.map((v, i) => {
        return (
          <div className="list">
            <h3>{v}</h3>
            <p>{작성일[i]}</p>
          </div>
        );
      })}
    </div>
  );
}

function Modal() {
  //원하는 이름 맘대로 지어서 쓸 수 있다
  return (
    <div className="modal">
      <h3>제목</h3>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
