import "./App.css";
import { data } from "./Data";
import Card from './Card';
import { useState } from 'react';

function App() {
  const [product , setproduct] = useState(data)
  function del(k){
    let copy = structuredClone(product);
    let usecopy = copy.filter((item,index)=> {
      return index != k;
    })
    setproduct(usecopy)
  }

  function update(index){
    let copy = structuredClone(product);
    copy[index].count++;
    setproduct(copy)
  }
  let datashow = product.map((item , index) => (
    <Card
      key={index}
      id = {index}
      name={item.name}
      price={item.price}
      catigory={item.catigory}
      sale={item.sale}
      count={item.count}
      del = {del}
      update = {update}
    />
  ));
  return <>
  <div className="per">
    {datashow}
  </div>
  </>;
}

export default App;
