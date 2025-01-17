import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import { useState } from 'react';

function App() {

  let post = '첫 블로그 글';
  // 스테이트 생성
  let [title, setTitle] = useState(
    [
      '인천 우동 맛집',
      '남자코트 추천',
      '자바독학'
    ]);

  let [createDate, setCreateDate] = useState(
    [
      '2025년 1월 17일',
      '2025년 1월 16일',
      '2025년 1월 15일'
    ]);

  let [content, setContent] = useState(
  [
    '인천 우동 겁나 맛있음',
    '남자 바바리 코트 명품',
    '자바 독학 가능함'
  ])
  
  let [like, setLike] = useState([0,0,0]);

  let [showModal, setShowModal] = useState(false);

  let [index, setIndex] = useState(0);
  
  function addLike(num){
    let copyLike;
    copyLike = [... like];
    copyLike[num]++;
    setLike([... copyLike]);
  }

  function changeTitle(){
    let subTitle;
    let subLike;
    
    subTitle = [... title];
    subLike = [... like];

    if(subTitle[1] == '남자코트 추천'){
      subTitle[1] = '여자코트 추천';  
    }else{
      subTitle[1] = '남자코트 추천';
    }
    subLike[0] = 0;

    setTitle(subTitle);
    setLike(subLike) ;
  }

  function sort(){
    let temp = [... title];
    
    temp.sort((x, y) => {
      if(x > y) return 1; // 크면 바꿈
      if(x < y) return -1;// 작으면 바꿈
      return 0; //안바꿈
    })

    setTitle([...temp]);
  }

  function revers(){
    let temp = [... title];

    temp.sort((x, y) => {
      if(x > y) return -1; // 크면 바꿈
      if(x < y) return 1;// 작으면 바꿈
      return 0; //안바꿈
    })
    setTitle([...temp]);
  }

  return (
    <div className="App">
      <div className = "black-bg">
        React로 만드는 블로그
      </div>

      <div>
        <button onClick={sort}>오름차순</button>
        <button onClick={revers}>내림차순</button>
      </div>
      {/* 리스트 시작 */}

      {
        title.map(function(x, i){
          return (
            <div className='list' onClick={(e) => {
              e.stopPropagation();}}>
              <h4 
                onClick= {()=>{
                  if(index != i){
                    setShowModal(true);
                  }else if(index == i && showModal == false){
                    setShowModal(true);
                  }
                  else{
                    setShowModal(false);
                  }
                  setIndex(i);
                  }}>{x}
                  <span onClick={(e) => {
                    e.stopPropagation();
                    addLike(i)}}>👍</span>
                  {like[i]}
              </h4>
              <p>
                작성일 : {createDate[i]}
              </p>
            </div>
          )
        })
      }
      {/* <div className = "list">
        <h4 onClick={showMd}>
          {title[0]}<span onClick={() => addLike(0)}>👍</span>{like[0]}
        </h4>
        <p>작성일 : {createDate[0]}</p>
      </div> */}
      {/* 남자코트 추천 */}
      {/* 버튼을 클릭 -> 여자코트 추천으로 변경  */}
      {/* 좋아요 --> 0 으로 바꾸기 */}
      {/* <div className = "list">
        <h4 onClick={showMd}>
          {title[1]}<span onClick={() => addLike(1)}>👍</span>
          {like[1]}<span>
            <button onClick={changeTitle}>변경</button>
          </span>
          
        </h4>
        <p>작성일 : {createDate[1]}</p>
      </div>
      <div className = "list">
        <h4 onClick={showMd}>
          {title[2]}<span onClick={() => addLike(2)}>👍</span>{like[2]}
        </h4>
        <p>작성일 : {createDate[2]}</p>
      </div> */}
      {/* 리스트 종료 */}
      {/* 상세 페이지 시작 */}
      { 
        // 리턴 안에는 if를 못써요...
        // 삼항연산자는 쓸수 있음.
        // 자식 콤포넌트에 전달할 props를
        // 기술
        showModal == true ? 
        <Modal title = {title}
               createDate = {createDate}
               content = {content}
               index = {index} /> 
        : null
      }
      {/* 상세 페이지 종료 */}
    </div>
  );
}

export default App;
