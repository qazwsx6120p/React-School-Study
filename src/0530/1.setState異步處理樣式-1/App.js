import { useState } from 'react';

function App() {
  //const [目前狀態，更新狀態的函示] = useStatw(初始狀態)
  const [total, setTotal] = useState(0);
  return (
    <>
      {/* 將更新完的狀態存取進total */}
      <h1>{total}</h1>
      <button
        onClick={() => {
          //設一個常數來保存
          const newTatol = total + 1;
          //利用更新狀態函示來更新目前狀態
          setTotal(newTatol);
          console.log(newTatol);
        }}
      >
        點擊+1
      </button>
    </>
  );
}

export default App;
