#0 Introduction

nomad corder 의 reactJS 기초 강의를 보고 따라하면서
영화 웹 서비스 만들기

-----------------------------------------

#0.1 Requirements

nodejs 설치

npx 설치
npm install npx -g

git 설치

-----------------------------------------

#0.2 Theory Requirements

html, css, js 기본실력 필요

-----------------------------------------

#0.3 Why React

왜 리액트인가?
일단 리액트는 페이스북이 만들었다.
모든 페북은 리액트로 돌아간다.
에어비앤비, 넷플릭스, 스포티파이, 슬랙 등등 많은 웹사이트들이 리액트를 사용한다.

-----------------------------------------

#1.0 Creating your first React App

리액트만 사용할수는 없다. 몇가지 해줘야만 하는게 있다.
이유는 리액트가 매우 현대적인 코드와 동작하기 때문이다.
섹시한 코드와 아름다운 컴포넌트를 만들고, 아름다운 웹사이트를 만들 수 있다.

문제는 어리석은 브라우저가 이 코드를 이해하지 못하기때문에,
이 코드를 못생긴 코드로 바꿔줘야만 한다.

이것을 설정하기 위해 몇가지 단계가 필요하다.
webpack을 다운로드해야하고, babel을 다운로드해야한다.
그런 다음에 리액트 코드를 컴파일해야하고 등등의 과정이 많다.

하지만 create react app 을 이용하면 해결된다.
터미널에
npx create-react-app movie_app
를 입력하면 movie_app 폴더를 하나 생성하고, 패키지가 설치된다.

설치가 완료되면
package.json 에서
scripts 부분에서 test와 eject는 필요없어서 삭제

맨위의 name은 어플리케이션 이름

터미널로 movie_app으로 이동 후에 npm start 해서 잘되는지 테스트

-----------------------------------------

#1.1 Creating a Github Repository
깃헙 설치

-----------------------------------------

#1.2 How does React work?

기본부터 설명하기위해서 대부분을 지움

삭제한 파일
logo.svg
serviceWorker.js
index.css
App.test.js
App.css



function App() {
  return <div className="App">Hello!</div>
}

public 폴더의 index.html 파일에 가면
<div id="root"></div> 는 비어있다.
하지만 브라우저에서 내 localhost에 있는 div id="root"는
내부에 Hello를 갖고 있다.

리액트가 무엇이냐면, 리액트는 당신이 거기에 쓰는 모든 요소를 생성한다는 것이다.
자바스크립트와 함게 그것들을 만들고, 그것들을 html에 넣는다.
리액트는 index.html의 div id="root"에 element를 넣는 역할을 담당한다.

index.js 파일을 보면

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render 은 <App />을 render하려고 하는데,
document.getElementById('root') 으로 render한다.

virtual DOM이라는게 있다.
virtual document object model
index.html의 소스코드에는 존재하지않지만, reac가 그걸 만들어낸다.
이게 리액트가 빠른 이유이다.

-----------------------------------------

#2.0 Creating your first React Component

index.js 파일에서
<App /> 를 컴포넌트가 부른다.
리액트는 컴포넌트와 함께 동작한다.
리액트로 컴포넌트를 만들게 될 것이고, 컴포넌트를 보기 좋게 만들 것이다.
컴포넌트가 데이터를 보여주게 할 것이다.

기본적으로 컴포넌트가 무엇일까?
컴포넌트는 html을 반환하는 함수이다.

function App() {
  return <div>Hello!</div>
}

리액트는 컴포넌트를 사용해서 html처럼 작성하려는 경우에 필요하다.
자바스크립트와 html 사이의 이러한 조합을 jsx 라고 부른다.
jsx는 리액트에서 나온 유일한 개념이다.
이 jsx에 대한 지식은 다른 분야에선 쓰이지않는다.

주의사항으로 리액트는 하나의 컴포넌트만을 렌더링해야한다.
그 컴포넌트가 App이다.
App 말고 다른 컴포넌트를 하나 새로 만들었다면, App 안에 넣어야한다.

App.js 에
import Potato from './Potato';
추가한다
./ 는 같은 폴더라는 의미

function App() {
  return (
  <div>
    Hello!
    <Potato />
    </div>
  )
}

브라우저에서 소스 코드를 보면 리액트는 컴포넌트를 가져와서,
브라우저가 이해할 수 있는 평범한 html로 만들었다.

jsx는 자바스크립트 안의 html이다.


-----------------------------------------

#2.1 Reusable Components with JSX + Props

jsx에서 두번째로 이해해야 하는 것은, 컴포넌트에 정보를 보낼수 있다는 점이다.
리액트가 멋진 이유는 재사용 가능한 컴포넌트를 만들 수 있다는 점이다.

컴포넌트에서 컴포넌트로, 칠드런 컴포넌트로 정보를 보내는 방법이 있다.
컴포넌트로 정보를 보내고, 그 다음에 컴포넌트에서 그 정보를 어떻게 사용할 것인가.


<Food name="kimchi"/>

Food 컴포넌트에 정보를 보내는 방법이다.
Food 컴포넌트에 name 이라는 이름의 property를 kimchi라는 value로 주었다.


<Food fav="kimchi"/>

Food 컴포넌트에 fav 라는 이름의 property를 kimchi라는 value로 주었다.

이제 어떻게 이 props(property)를 사용할까?


<Food
    fav="kimchi"
    something={true}
    papapapa={["hello", 1, 2, 3, 4, true]}
/>

누군가 Food 컴포넌트로 정보를 보내려고 하면,
리액트는 이 모든 속성을 가져올 것이다.

그리고

function Food(){
  return <h1>Food</h1>
}

food function 컴포넌트의 argument(인자값)으로 그것들을 넣을 것이다.

function Food(props){
  console.log(props)
  return <h1>Food</h1>
}

콘솔로그를 이용하여 브라우저에서 확인해보면
object가 뜨는데, 이 object는 컴포넌트로 전달 된 모든 props들이다.
props라고 불리는 한 argument의 내부이다.


es6 문법으로

function Food(props){
  console.log(props.fav)
  return <h1>Food</h1>
}

또는

function Food( {fav} ){
  console.log(fav)
  return <h1>Food</h1>
}
 
이런게 있다.
props.fav 또는 {} 내부에 fav를 쓰는 것은 같은 것이다.


function Food( {fav} ){
  console.log(fav)
return <h1>Food is {fav}</h1>
}

value를 html로 보여주는 방법.


<Food fav="kimchi" />
<Food fav="ramen" />
<Food fav="meat" />
<Food fav="choco" />

동적 데이터가 있는 컴포넌트가 있으므로, jsx와 props로 인해 모두 재사용할 수 있다.

컴포넌트는 대문자로 시작하는 것에 주의.

-----------------------------------------

#2.2 Dynamic Component Generation

웹사이트에 동적 데이터를 추가하는 방법.
데이터가 이미 api에서 왔다고 가정.

map은 array의 각 item에서 function을 실행하는 array를 가지는
JavaScript function이며, 그 function의 result를 갖는 array를 나에게 준다.
뭔 소리인지 이해하기 위한 과정으로 브라우저 콘솔창에서
const friends = ["dal", "mark", "lynn", "japan guy"]
입력
여기서 이름 옆에 작은 하트를 더하려고 하면,
friends.map(current =>  {
    console.log(current);
    return 0
})

또는

friends.map(function(current){
    console.log(current);
    return 0
})

실행해보면, 4개의 0을 반환한 item의 array를 가지고 있다.
map은 function을 취해서 그 function을 array의 각 item에 적용해,
한 번은 dal에, 한 번은 mark에게... 그리고 각 연산의 결과로 array를 만들고,
각 연산의 result는 0이다.

friends.map(function(friend){
    return friend + "❤"
})

실행하면
(4) ["dal❤", "mark❤", "lynn❤", "japan guy❤"]
이렇게 결과가 나타난다.

map은 array를 취하고, 내가 정확히 원하는 array를 반환한다.


function App() {
  return (
  <div>
    Hello!
    {foodILike}
    </div>
  )
}
여기서 {foodILike} 는 자바스크립트이다.

에러발생

index.js:1 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`. See https://fb.me/react-warning-keys for more information.
    in Food (at App.js:43)
    in App (at src/index.js:7)
    in StrictMode (at src/index.js:6)
    
-----------------------------------------

#2.3 map Recap

map 연습

function renderFood(dish){
  console.log(dish)
}

function App() {
  return (
  <div>
    {foodILike.map(renderFood)}
    </div>
  )
}

콘솔창에 foodILike의 데이터들 확인 가능

App.js에서

import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture}></img>
    </div>
  );
}

const foodILike = [
    데이터
];

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image} />
}

function App() {
  return (
  <div>
    {foodILike.map(renderFood)}
    </div>
  )
}

export default App;

했더니 이번엔 이미지가 제대로 뜬다. key 관련 에러는 여전히 뜬다.


function App() {
  return (
  <div>
    {foodILike.map(renderFood)}
    {console.log(foodILike.map(renderFood))}
    </div>
  )
}

콘솔창에서 확인해보면 이상한 array가 뜨는데,
이것들이 기본적으로 리액트 컴포넌트이다.
foodILike.map(renderFood) 를 하면
기본적으로 여기에 Food 컴포는트와 같은 array를 가져오게 된다.


App 컴포넌트를
function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  )
}
으로 다시 바꿨는데 이번엔 이미지가 잘뜬다.
이전엔 오타가 있었던 듯하다.


key 오류
Warning: Each child in a list should have a unique "key" prop.
각각 list 내의 child는 unique한 key prop을 가져야한다.

모든 리액트의 element들은 유일해야하고,
이들을 list 안으로 집어넣을때, 이들은 유일성을 잃어버린다.
그래서 각 item들에 id를 추가해야한다.

<Food key={dish.id} name={dish.name} picture={dish.image} />

이제 key 에러가 뜨지않는다.
key prop은 Food로 전달하지않았다.
이것은 기본적으로 리액트 내부에서 사용하기 위한 것이기때문이다.

그리고 브라우저의 콘솔창에서 웹 표준과 관련된 이미지 alt 관련 주의사항이 뜨는데,
Food 컴포넌트에서
<img src={picture} alt={name}></img>
코드를 수정하였다.

-----------------------------------------

#2.4 Protection with PropTypes

우리가 원하는 Props를 받고 있는지 체크할 수 있는 방법.
father 컴포넌트로부터 전달받은 props가 우리가 예상한 props인지 확인.

터미널에 npm install prop-types

prop-types는 내가 전달받은 props가 내가 원하는 props인지를 확인해줌.

App.js 에서
import PropTypes from 'prop-types' 추가

강의영상에서 Fail to compile 에러가 뜨는데
npm install 이후 npm start 를 하니 에러가 해결되었다.


Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
}

브라우저를 보면 시각적으로 에러는 없다.
하지만 콘솔창을 보면 Failed prop type 에러가 뜬다.
rating의 type은 숫자로 제공됐지만 string을 받고 있다.

rating: PropTypes.number.isRequired


picture를 보내야하는데 image를 보내는 실수를 할 수도 있다.

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />
      ))}
    </div>
  )
}

Failed prop type: The prop `picture` is marked as required in `Food`, but its value is `undefined`.

이런 string 또는 number 같은 예제뿐만 아니라,
array인지, boolean인지, true인지, false인지, object인지, 있는지 없는제 체크할 수 있다.

하나의 예로, isRequired를 반드시 체크할 필요는 없다.

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

rating의 isRequired를 지우고, FoodILikes 에서 kimchi 의 rating을 지웠다.
브라우저의 콘솔창을 보면 에러가 없다.

Food의 rating이 number여야하지만, 필수는 아니게 된다.
number 또는 undefined가 된다는 말이다.

rating의 값을 문자로 변경해보면,
Failed prop type: Invalid prop `rating` of type `string` supplied to `Food`, expected `number`
에러가 뜬다.

prop types 매뉴얼
https://ko.reactjs.org/docs/typechecking-with-proptypes.html

-----------------------------------------

#3.0 Class Components and State

App.js의 Food 코드들을 지운다.
State에 대해 알아야하는데, Food 코드들은 이걸 위해 동작하기 않기 때문이다.
State는 동적 데이터와 함께 작업할때 만들어진다. 변하는 데이터, 존재하지 않는 데이터.
생겨나고 사라지고 변경되는 데이터, 하나였다가 두개였다가 0이 되는 데이터.
이런 것들이 dynamic data 이다. 그리고 이런 props에 필요한 것이 State이다.


function App() {

}

이 컴포넌트는 functiopn App을 수행한다.

이런 것들을 function 컴포넌트라고 부른다.


class App extends React.Component {
  
}

클래스 컴포넌트로 바꾼다.
React.Component 는 필수이고, 뒤에 많은 것을 가지고 있다. 그 중 하나가 state이다.
매번 컴포넌트를 만들 때마다 모든 것을 다 구현하고 싶지않다.
이게 extends 하는 이유이다.

예를 들면 baby(애기)는 human(사람)에서 확장되고, human으로부터 모든 것(특징)을
가져올 수 있고, 그것으로부터 확장된다.

Samsung은 cell phone class에서 확장된 것이다.
만약 비디오 게임 개발을 한다면 Samsung을 프로그래밍하지않고, cell phone을 프로그래밍 한다.
cell phone은 많은 특성들을 가지고 있다. 예를 들어 screen, camera, charger

아이폰과 삼성은 이러한 것을 공유한다.
camera, screen, charger를 cell phone class에 넣은 다음,
cell phone class에서 확장한 samsung class를 가지게 된다.



class App extends React.Component {
  
}

React.Component 에서 가져오고, React.Component 에서 확장하고,
App 컴포넌트는 React.Component 가 된다.

리액트 컴포넌트는 return을 가지고 있지않다.
function 이 아니기 때문이다.
render method 를 가지고 있고, App 컴포넌트 안에 있다.

class App extends React.Component {
  render(){
    return <h1>I am a class Component</h1>
  }
}

리액트 컴포넌트는 render method를 가지고 있지만, extends from을 했기 때문에
App 컴포넌트도 이제 render method가 있다.



function 컴포넌트는 뭔가를 return하고 스크린에 표시된다.
클래스 컴포넌트는 리액트 컴포넌트로부터 확장되고, 스크린에 표시된다.

리액트는 자동적으로 모든 클래스 컴포넌트의 렌더 메소드를 실행하고자 한다.

클래스 컴포넌트는 state 를 가지고 있다.
state는 오브젝트이고, 컴포넌트의 데이터를 넣을 공간이 있다. 이 데이터는 변한다.

class App extends React.Component {
  state = {
    count: 0
  }
  render(){
    return <h1>The number is {this.state.count}</h1>
  }
}

여기서 state에 바꾸고 싶은 data를 넣는데, App에서 data를 어떻게 바꿀 것인가가 중요하다.



class App extends React.Component {
  state = {
    count: 0
  }
  render(){
    return (
    <div>
      <h1>The Number is {this.state.count}</h1>
      <button>Add</button>
      <button>Minus</button>
    </div>
    )
  }
}

state가 클래스 컴포넌트에 있기때문에, this.state를 할 필요가 있다.
ReactJS는 자바스크립트이다. 그래서 자바스크립트를 쓸 수 있다.



class App extends React.Component {
  state = {
    count: 0
  }

  add = function () {
    console.log('add')
  }

  minus = function () {
    console.log('minus')
  }

  render(){
    return (
    <div>
      <h1>The Number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

여기서 onClick은 자바스크립트의 onClick과는 다른, 리액트의 onClick이다.

-----------------------------------------

#3.1 All you need to know about State

add = function () {
    this.state.count = 1
  }

이런 식으로 state를 직접 변경하려 하면 터미널에서
Line 10:5:  Do not mutate state directly. Use setState()  react/no-direct-mutation-state
메세지가 뜬다. setState()를 사용하라고 한다.
그와 함께 리액트는 render function을 refresh하지 않는다.

매번 state의 상태를 변경할 때, render function을 호출해서 바꿔주어야 한다.

setState function을 호출하면, 리액트는 그에 따라 view와 render function을 refresh한다.


add = function () {
  this.setState({count:1})
}

minus = function () {
  this.setState({count:-1})
}

state는 object인 것에 주의.

npm start를 하였는데 따로 설치한 eslint와 충돌하여 movie_app을 지우고 새로 설치했다......

react 설치시 자동으로 함께 설치되는 typescript-eslint와 충돌이 일어난건가?

다시 이것저것해주고 npm start를 했더니
App.js:10 Uncaught TypeError: Cannot read property 'setState' of undefined
에러 발생

add와 minus 함수를

add = () => {
this.setState({count:1})
}

minus = () => {
this.setState({count:-1})
}

es6 arrow function으로 변경하였더니 잘되었다.

'this'가 자동으로 바인딩 되는 것에 따르는 것에 대한 댓글이 있는데, 잘모르겠다.


add = () => {
this.setState({ count: this.state.count + 1 })
}

minus = () => {
this.setState( {count: this.state.count - 1 })
}

이건 좋지 않은 코드이다.
성능 문제가 발생할 수 있다.



add = () => {
    this.setState( current => ({ count: current.count + 1 }) )
}

minus = () => {
    this.setState( current => ({ count: current.count - 1 }) )
}

this.state.count로 하는 대신에, current를 가져와서 한다.
이것이 state를 set할 때, 리액트에서 외부의 상태에 의존하지 않는 가장 좋은 방법이다.

정리하면,
매 순간 setState를 호출할 때마다, 리액트는 새로운 state와 함께
render function을 호출할 것이다.
오직 setState를 할때만이다.
this.state.count = 1 이라고 하면, 아무 일도 일어나지 않는다.

-----------------------------------------

#3.2 Component Life Cycle

리액트 컴포넌트에서 사용하는 유일한 펑션은 렌더 펑션이다.
리액트 클래스 컴포넌트는 렌더말고 많은 걸 가지고 있다.
life cycle moethod라는 것을 가지고 있는데, 리액트가 컴포넌트를 생성하고, 없애는 방법이다.
컴포넌트가 생성될때, 렌더 전에 호출되는 몇가지 펑션이 있다.
컴포넌트가 렌더된 후, 호출되는 다른 펑션들이 존재한다.
Add를 클릭하고 +1이 될 때, 컴포넌트가 업데이트될 때, 호출되는 다른 펑션이 있다.
전부를 다 알 필요는 없고, 가장 중요한 몇가지만 알면 된다.

하나는 Mounting 이다.
마운팅은 '태어나는 것'과 같다.

다른 하나는 Updating 이다.
일반적인 업데이트를 의미한다.

Unmounting은 컴포넌트가 죽는걸 의미한다.
컴포넌트가 어떻게 죽을까? 페이지를 바꿀때, state를 사용해서 컴포넌트를 교차할대 등등 다양하다.



마운팅은 먼저 호출되는 함수가 하나 있는데 constructor() 이다.
컨스트럭터는 리액트 함수가 아니라, 자바스크립트에서 클래스를 만들때 호출되는 함수이다.

class App extends React.Component {

  constructor(props){
    super (props)
    console.log('hello')
  }

  state = {
    count: 0
  }

  add = () => {
    this.setState( current => ({ count: current.count + 1 }) )
  }

  minus = () => {
    this.setState( current => ({ count: current.count - 1 }) )
  }

  render(){
    console.log('render')
    return (
    <div>
      <h1>The Number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

브라우저의 콘솔창을 확인해보면, 컨스트럭터는 시작 전에 호출됐고 "hello"가 표시된다.
그런 다음에 render()가 "render"를 표시한다.
이건 리액트가 아니라 자바스크립트이다.
컴포넌트가 마운트 될 때, 컴포넌트가 스크린에 표시될 때, 컴포넌트가 웹사이트에 갈 때
컨스트럭터를 호출한다.
그리고 나서 render()를 호출한다.

컴포넌트가 렌더할때 componentDidMount()를 호출한다.
기본적으로 이 것은 '이 컴포넌트는 처음 렌더됐다'라고 알려준다.

componentDidMount(){
    console.log('component rendered')
  }



Update는 add 혹은 minus같은 것을 클릭해서 state를 변경할때, 그게 업데이트이다.
컴포넌트가 업데이트될 때 호출되는 많은 함수들이 있는데, render()와
componentDidUpdate()이다.

componentDidUpdate(){
    console.log('updated')
  }

setState를 호출하면, 컴포넌트를 호출하고, 렌더를 호출한 다음, 업데이트가 완료되면
componentDidUpdate가 실행된다.



언마운트는 컴포넌트가 떠날 때 호출된다.

componentWillUnmount(){
    console.log('Goodbye')
  }

언마운트는 어떤걸 하거나, 다른 페이지로 갈때 작동한다.




index.js에서

ReactDOM.render(
    <App />,
  document.getElementById('root')

React.StrictMode 를 지웠다.

-----------------------------------------

#3.3 Planning the Movie Component

movie component 구성



class App extends React.Component {
  
  state = {
    isLoading: true
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 6000)
  }

  render(){
    const { isLoading } = this.state
    return (
      <div>
        { isLoading ? "Loading..." : "We are ready" }
      </div>
    )
  }

}



이론적으로 우리가 할 일은 componentDidMount에서 data를 fetch하는 것이다.
그리고 api로부터 data fetching이 완료되면, 그러면 "we are ready" 대신에
movie를 render하고 map을 만들고, movie를 render하는 것이다.

-----------------------------------------

#4.0 Fetching Movies from API

일반적으로 자바스크립트에서 data를 fetch하는 방법은 fetch를 사용하는 것이다.
fetch 대신에 axios가 있다.
터미널에서 npm install axios

yts에서 만든 api를 사용할 것이다.
yts는 불법 토렌트 영화 사이트이다.
yts 화면 맨하단에 api로 가서 list movies로 가면
end point의 https://yts.mx/api/v2/list_movies.json 주소로 가면 된다.
크롬 브라우저로 json view 확장기능을 쓰는게 좋다.
참고로 yts는 불법 사이트이기때문에 url 주소가 언제나 바뀔 수 있음에 주의.

axios 임포트하고

app 컴포넌트에

componentDidMount(){
    axios.get("https://yts.mx/api/v2/list_movies.json")
  }

추가하고

브라우저에서 콘솔창에서 네트워크로 가서 list_movies.json이 보이고, 마우스 호버했을때
주소가 yts이면 정상적으로 잘되었다.



axios.get은 항상 빠르지않으므로, 자바스크립트에게 componentDidMount 함수가 끝날 때까지
시간이 걸릴수 있다가 알려주어야한다.

getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json")
  }

  componentDidMount(){
    this.getMovies()
  }

-----------------------------------------

#4.1 Rendering the Movies

getMovies = async () => {
  const movies = await axios.get("https://yts.mx/api/v2/list_movies.json")
  console.log(movies)
}

API에서 data를 가져왔으니, 콘솔창으로 확인.
object에서 data에 또 data가 있음. 거기에 movies가 있음.




getMovies = async () => {
  const movies = await axios.get("https://yts.mx/api/v2/list_movies.json")
  console.log(movies.data.data.movies)
}

이렇게 해도 되지만


getMovies = async () => {
  const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json")
  console.log(movies)
}

이렇게 할 수 있음.

movies를 state 안에 넣어야함.


getMovies = async () => {
  const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json")
  this.setState({ movies:movies })
}


this.setState({ movies:movies }) 는
this.setState({ movies }) 으로 가능
하나는 state = {} 안에 있는 movies 이고, 다른 하나는 axios에 온 movies임.




getMovies = async () => {
  const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json")
  this.setState({ movies:movies, isLoading: false })
}

axios에서 movies를 get하는것을 await로 기다리다가 다 되면, setState하면서 isLoading을 false로 변경




We are ready 를 이제 다른 걸로 바꿀 차례.
movies를 render해야함.
src 폴더에 Movies.js 파일 추가.
movies 컴포넌트는 state를 필요로 하지 않을 거이며, 클래스 컴포넌트가 될 필요가 없음.





API로부터 응답받는 것에 대해 propTypes

// poster - medium cover image
Movies.propTypes = {
    id: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
}



영화 평점(rating)순으로 보여주게 하려면
https://yts.mx/api 에서 Endpoint parameters에서 sory_by에 rating

https://yts.mx/api/v2/list_movies.json?sort_by=rating





function Movies( {id, year, title, summary, poster} ){
    return (
        <div></div>
    )
}

Movies 컴포넌트 수정

-----------------------------------------

#4.2 Styling the Movies

HTML 작업

function Movies( {id, year, title, summary, poster} ){
    return (
        <div className='movies__movie'>
            <img src={poster} alt={title} title={title}></img>
            <div className='movie__data'>
                <h3 className='movie__title'>{title}</h3>
                <h5 className='movie__year'>{year}</h5>
                <p className='movie__summary'>{summary}</p>
            </div>
        </div>
    )
}

여기서 img 태그에 title은, 이미지 마우스 호버하면 타이틀이 표시된다.



css는 css 파일 하나 만들고 App.js에서 
import './App.css' 추가하는 식으로 할 수 있음.

-----------------------------------------

#4.3 Adding Genres

props에 array 포함시키기.

Movies.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,

    genres: propTypes.arrayOf(propTypes.string).isRequired

}





Movie.js의 Movies 컴포넌트의

<ul className='genres'>
    { genres && genres.map(genre => (<li className='genres__genre'>{genre}</li>)) }
</ul>

genres가 있다면, genres.map() 실행
그냥 genres.map() 만 하면,
axios로 불러오는 data에 genres가 없는 경우 에러가 발생.




index.js:1 Warning: Each child in a list should have a unique "key" prop.

key를 제공하지 않았다는 에러가 뜸.
map에 있는 각각의 item에는 key가 필요.
하지만 이 경우에는 id가 없기때문에 제공할 key가 없음.
map function은 또다른 argument가 있는데, 하나는 현재의 item이고, 다른 하나는 item number(index).

<ul className='genres'>
    { genres && genres.map((genre, index) => (<li key={index} className='genres__genre'>{genre}</li>)) }
</ul>

-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------
-----------------------------------------