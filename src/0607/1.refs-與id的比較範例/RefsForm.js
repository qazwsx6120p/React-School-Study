import React, { useRef } from 'react';

function RefsForm() {
  //宣告記憶體位置
  //初始化一個null
  const inputE1 = useRef(null);
  return (
    <>
      <h1>使用refs的表單元素</h1>

      {/* ref類似Id但不會顯示 */}
      {/* 而且可以重複使用 */}
      <input type="text" ref={inputE1} />
      <button
        onClick={() => {
          //類似 document.getElementById('my-input').focus();
          inputE1.current.focus();
        }}
      >
        Focus(聚焦)
      </button>
      <button
        onClick={() => {
          //類似 document.getElementById('my-input').focus();
          inputE1.current.blur();
        }}
      >
        Blur(失焦)
      </button>
      <button
        onClick={() => {
          //類似 document.getElementById('my-input').focus();
          const inputValue = inputE1.current.value;
          console.log(inputValue);
        }}
      >
        獲得輸入值
      </button>
    </>
  );
}

export default RefsForm;
