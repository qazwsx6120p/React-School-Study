import { useState, Fragment } from 'react';

function Controlled() {
  const [inputText, setInputText] = useState('');
  const [textArea, setTextArea] = useState('');

  // radio group
  const [gender, setGender] = useState('');
  const genderOptions = ['男', '女', '不提供'];

  //select
  const [selectValue, setSelectValue] = useState('');
  const carOptions = ['Volvo', 'BMW', 'Benz', 'Toyota'];

  //checkbox single
  const [agree, setAgree] = useState(false);

  //checkbox group
  const [likeList, setLikeList] = useState(['西瓜', '芒果']); //<--決定一開始勾的
  const fruitOptions = ['西瓜', '芒果', '芭樂'];

  return (
    <>
      <section id="input-text">
        <h1>文字輸入框</h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
      </section>

      <section id="textarea">
        <h1>文字輸入區域</h1>
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value);
          }}
        />
      </section>

      {/* 利用map跑出全部 */}
      <section id="radio-group">
        <h1>選項按鈕(群組)</h1>
        {genderOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="radio"
                value={v}
                checked={gender === v}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label>{v}</label>
            </div>
          );
        })}
      </section>

      <section id="selec">
        <h1>下拉選單</h1>
        <label>車子品牌</label>
        <select
          value={selectValue}
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
        >
          <option value="">請選擇</option>
          {carOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            );
          })}
        </select>
      </section>

      {/* 單個核取方塊 */}
      <section id="checkbox-single">
        <h1>核取方塊</h1>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.value);
          }}
        />
        <label htmlFor="">同意新會員註冊條款</label>
      </section>

      <section id="checkbox-group">
        <h1>核取方塊(群組)</h1>
        {fruitOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                value={v}
                checked={likeList.includes(v)}
                onChange={(e) => {
                  // 先判斷目前點的值是否有在狀態陣列中
                  if (likeList.includes(e.target.value)) {
                    // if 有 -> 從陣列中移除
                    const newLikeList = likeList.filter((v, i) => {
                      return v !== e.target.value;
                    });
                    // 最後都要設定回狀態陣列中
                    setLikeList(newLikeList);
                  } else {
                    // else 沒有 -> 加入陣列中
                    const newLikeList = [...likeList, e.target.value];
                    // 最後都要設定回狀態陣列中
                    setLikeList(newLikeList);
                  }
                }}
              />
              <label>{v}</label>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Controlled;
