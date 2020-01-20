import React from 'react';


const foodIlike = [
    {
      id :1,
      name : "Kimchi",
      image :
       "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg"
  },{
      id:2,
      name : "samgyubsal",
      image : 
       "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg"
  }
]

function Food({name, picture}){
  console.log(name)
  return <div>
    <h2>I  like {name}!!!!</h2>
    <img src = {picture} />
    </div>
}

function App() {
  return (
    <div>
    <h1>Hi</h1>
    {foodIlike.map( dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} />
    )
    )}
     </div>
  );

}

export default App;
