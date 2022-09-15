import { useEffect, useState } from "react";

import Edit from "./Edit";
import List from "./List";
import "./App.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    window.alert('新增成功')
  } , [data] )

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

// 製作一個加法的回傳值 prev為每次更新時的初始值
// const Home = () => {

//     const [a ,setA] = useState(100)
//     function Plus() {
//         setA (function (prev) {
//             return prev + 100
//         })
//     }

// onClick 可被按鍵

//     return <div>
//         {a}
//         <button onClick={Plus}> 加法 </button>
//     </div>

// }

export default Home;
