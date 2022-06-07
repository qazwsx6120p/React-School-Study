import React, { useState } from 'react';
import CCLifecycle from './CCLifecycle';

function App() {
  const [isShow, setIsShow] = useState(true); //<--設定初始值為true

  return (
    <>
      {/* 移除CCLifecycle元件 */}
      {/* 假如isShow是true就顯示 CCLifecycle*/}
      {isShow && <CCLifecycle />}
      <button
        onClick={() => {
          //按下將狀態設相反
          setIsShow(!isShow);
        }}
      >
        {isShow ? '移除' : '呈現'}
      </button>
    </>
  );
}

export default App;
