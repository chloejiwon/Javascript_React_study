import React from 'react';

function Food({fav}){
  console.log(fav)
  return <h1>I like {fav}!!!!</h1>
}


function App() {
  return (
    <div>
    <h1>Hi</h1>
    <Food fav="kimchi"/>
    <Food fav="ramen"/>
    <Food fav="pasta"/>
    <Food fav="pizza"/>
  </div>
  );

}

export default App;
