import Characters from "./components/Characters/Characters"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Test from "./components/Test";
import { useState } from "react";

const App = () => {
  const [data,setData] = useState({
    fname:'asd',
    lname:'cvb'
  })

  return (
    <>
    <h1>from app.js{data.fname} {data.lname}</h1>
    {/* <Test data={data} setData={setData}/> */}
      <Characters />
    </>
  )
}

export default App