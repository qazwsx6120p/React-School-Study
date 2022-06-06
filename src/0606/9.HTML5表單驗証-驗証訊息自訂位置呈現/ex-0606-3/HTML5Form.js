import { useState } from 'react';

function HTML5Form() {
  // state為物件時，最好先在初始值描述其中的屬性有什麼，與各屬性的對應初始值
  const [fields, setFields] = useState({
    username: '',
    password: '',
    email: '',
  });

  // 設定一個狀態，為記錄錯誤訊息用
  const [fieldErrors, setFieldErrors] = useState({
    username: '',
    password: '',
    email: '',
  });

  // 欄位有變動時觸發
  const handleFieldsChange = (e) => {
    // console.log(e.target.type, e.target.name, e.target.value)
    //展開fields原狀態陣列
    //[e.target.name] <--欄位的名子 : e.target.value <--欄位更改的值
    //覆蓋原陣列
    const newFields = { ...fields, [e.target.name]: e.target.value };

    setFields(newFields);
  };

  // -----------表單用，送出時觸發-----------

  const handleSubmit = (e) => {
    // 擋掉預設送出行為
    e.preventDefault();
    // 得到通過驗証的的值
    // 第1種方式: 從state得到輸入的值
    // 可控元件，立即動態得到值時用
    console.log('state', fields.username, fields.password, fields.email);
    // 第2種方式: 利用FormData
    // 不可控元件用、上傳檔案用、單純的表單用(填完送出...etc)
    const formData = new FormData(e.target);
    console.log(
      'FormData',
      formData.get('username'),
      formData.get('password'),
      formData.get('email')
    );
    // 送到伺服器，例如用fetch
  };

  // -----------表單用，有不合法的驗証情況出現時觸發-----------

  const handleInvalid = (e) => {
    // 擋住泡泡訊息跳出
    e.preventDefault();
    // console.log(e.target.validationMessage)

    // 泡泡訊息存取在 e.target.validationMessage
    // 聲明一個變數，保存錯誤訊息陣列
    const newFieldErrors = {
      // 展開表單的錯誤訊息(此為空白物件) <--原本沒有錯誤訊息產生
      ...fieldErrors,
      // 將有錯誤訊息的表單取代空白fieldErrors
      // [e.target.name] -->表單的名子 :  e.target.validationMessage
      [e.target.name]: e.target.validationMessage,
    };
    //設定回狀態
    setFieldErrors(newFieldErrors);
  };

  // -----------表單用，整個表單有更動會觸發-----------

  // 用於讓使用者輸入某欄位時清空某欄位錯誤訊息
  // 填完資料送出後，更改原本錯誤的表單觸發onChange事件
  // 將空的錯誤訊息傳回狀態內
  // 原本顯示的錯誤訊息就會消失
  const handleFormChange = (e) => {
    //展開錯誤訊息
    //
    const newFieldErrors = { ...fieldErrors, [e.target.name]: '' };
    setFieldErrors(newFieldErrors);
  };

  return (
    <>
      <h1>HTML5表單驗証</h1>
      <form
        //表單送出事件，觸發handleSubmit函數
        onSubmit={handleSubmit}
        //表單錯誤事件，觸發handleInvalid函數
        onInvalid={handleInvalid}
        //表單更動事件，觸發handleFormChange函數
        onChange={handleFormChange}
      >
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={fields.username}
          onChange={handleFieldsChange}
          required
        />
        <br />
        {/* 有錯誤訊息呈現在此 */}
        {/* 左邊如果是true就回傳右邊錯誤訊息 */}
        {fieldErrors.username && fieldErrors.username}
        <br />
        <label>密碼</label>
        <input
          type="text"
          name="password"
          value={fields.password}
          onChange={handleFieldsChange}
          required
          minLength={6}
          maxLength={10}
        />
        <br />
        {/* 有錯誤訊息呈現在此 */}
        {/* 左邊如果是true就回傳右邊錯誤訊息 */}
        {fieldErrors.password && fieldErrors.password}
        <br />
        <label>EMail</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleFieldsChange}
          required
        />
        <br />
        {/* 有錯誤訊息呈現在此 */}
        {/* 左邊如果是true就回傳右邊錯誤訊息 */}
        {fieldErrors.email && fieldErrors.email}
        <br />
        <button type="submit">送出</button>
      </form>
    </>
  );
}

export default HTML5Form;
