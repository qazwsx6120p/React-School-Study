import log from 'eslint-plugin-react/lib/util/log';
import React from 'react';

function IdForm() {
  return (
    <>
      <h1>使用id的表單元素</h1>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          //focus()聚焦input
          document.getElementById('my-input').focus();
        }}
      >
        Blur(聚焦)
      </button>
      <button
        onClick={() => {
          //blur()失焦input
          document.getElementById('my-input').blur();
        }}
      >
        Focus(失焦)
      </button>
      <button
        onClick={() => {
          //獲取input輸入的值
          const inputValue = document.getElementById('my-input').value;
          console.log(inputValue);
        }}
      >
        獲得輸入值
      </button>
    </>
  );
}

export default IdForm;
