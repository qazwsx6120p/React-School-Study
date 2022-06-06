import { useState, Fragment } from 'react';

function Controlled() {
  // 1.input輸入框，宣告狀態
  const [inputText, setInputText] = useState('');

  //-------------------------------------

  // 2.文字輸入框，宣告狀態
  const [textArea, setTextArea] = useState('');

  //-------------------------------------

  // 3.單個選取，宣告狀態
  const [isChecked, setIsChecked] = useState(false); //預設沒有被選中

  //-------------------------------------

  // 4.選取單，宣告狀態
  const [gender, setGender] = useState('');
  // 宣告一個選取單的陣列
  const genderOptions = ['男', '女', '不提供'];

  //-------------------------------------

  //5.下拉式選單，宣告狀態
  const [selectValue, setSelectValue] = useState('');
  // 宣告一個下拉式選取單的陣列
  const carOptions = ['Volvo', 'BMW', 'Benz', 'Toyota'];

  //-------------------------------------

  //6.核取方塊，宣告狀態
  const [agree, setAgree] = useState(false);

  //-------------------------------------

  //7.checkbox group
  const [likeList, setLikeList] = useState([]); //<--決定一開始勾的
  const fruitOptions = ['西瓜', '芒果', '芭樂'];

  return (
    <>
      <section id="input-text">
        <h1>文字輸入框</h1>
        <input
          type="text"
          //文字輸入框屬性是用 value
          value={inputText}
          //事件觸發 e為input輸入框本身
          onChange={(e) => {
            //e.target.value 輸入框傳送的值
            //更新InputText狀態
            setInputText(e.target.value);
          }}
        />
      </section>

      <section id="textarea">
        <h1>文字輸入區域</h1>
        {/* react裡的textarea只需要用一個標籤<textarea/> */}
        <textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value);
          }}
        />
      </section>

      <section id="radio">
        <h1>選取項目</h1>
        {/* react裡的textarea只需要用一個標籤<textarea/> */}
        <input
          type="radio"
          // 預設更新完的狀態 <--false未勾選
          checked={isChecked}
          //單個使用的是onClick事件
          onClick={() => {
            setIsChecked(!isChecked); //<--更新狀態為相反的預設狀態
          }}
        />
      </section>

      <section id="radio-group">
        <h1>選項按鈕(群組)</h1>
        {/* 利用map跑出選取單所有陣列 */}
        {genderOptions.map((v, i) => {
          return (
            //<Fragment key={i}/> <--用map要加key，上面react記得引入
            //這邊使用div
            <div key={i}>
              <input
                type="radio"
                //value為陣列跑出的每一個值，傳送給後端的值
                value={v}
                //判斷哪一個值被選中 --> 男、女、不提供
                checked={gender === v}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              {/* 顯現在前端的值 */}
              <label>{v}</label>
            </div>
          );
        })}
      </section>

      <section id="selec">
        <h1>下拉選單</h1>
        <label>車子品牌</label>
        {/* 下拉式選單 */}
        <select
          value={selectValue}
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
        >
          {/* 中間的選項 */}
          {/* 第一個選項通常是空白字串 */}
          <option value="">請選擇</option>
          {/* 利用map跑出陣列所有索引值 */}
          {carOptions.map((v, i) => {
            return (
              //傳送給後端的值
              <option key={i} value={v}>
                {/* 前端顯現的值 */}
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
            // 記得加key
            <div key={i}> 
              <input
                type="checkbox"
                //此核取方塊的值
                value={v}
                //判斷此核取方塊是否有被選中
                //選取的陣列裡是否包含該選項，用includes查看使否有這個值
                checked={likeList.includes(v)}
                //取消勾選，加回勾選
                onChange={(e) => {
                  // 先判斷目前點的值是否有在狀態陣列中
                  if (likeList.includes(e.target.value)) {
                    // if 有 -> 從陣列中移除
                    // 創建一個新陣列用於存取移除後的結果
                    const newLikeList = likeList.filter((v, i) => {
                      //回傳不包含e.target.value的陣列，就是移除e.target.value
                      return v !== e.target.value;
                    });
                    // 最後將移除後的新陣列設定回狀態中
                    setLikeList(newLikeList);
                  } else {
                    // else 沒有 -> 加入陣列中
                    // 創建一個新陣列用於存取新增後的結果
                    const newLikeList = [...likeList, e.target.value];
                    // 最後將新增後的新陣列設定回狀態中
                    setLikeList(newLikeList);
                  }
                }}
              />
              {/* 前端顯示的值 */}
              <label>{v}</label>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Controlled;
