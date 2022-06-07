//import CCLifecycle from './ex-0607-3/CCLifecycle'
import FCLifecycle from './ex-0607-3/FCLifecycle';
import { useState } from 'react';

function App() {
  //設定組件是否呈現的狀態
  const [isShow, setIsShow] = useState(true);

  return (
    <>
      {/* 如果是true就呈現FCLifecycle組件 */}
      {isShow && <FCLifecycle />}
      <hr />
      {/* 點一下切換狀態 true->false false->true*/}
      <button
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        {isShow ? '移除' : '呈現'}
      </button>
    </>
  );
}

export default App;
