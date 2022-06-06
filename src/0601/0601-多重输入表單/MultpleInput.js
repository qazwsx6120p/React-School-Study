import { useState } from 'react';

function MultipleInput() {
  //給初始化狀態兩個空物件
  //如果狀態過多時會使用物件類型狀態
  const [userData, setUserData] = useState({
    //陣列可以用空陣列，但物件不要
    fullName: '',
    phone: '',
    avatar: 'blank.jpg',
  });

  const handleChange = (e) => {
    console.log(e.target.type, e.target.name, e.target.value);

    //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D

    //創建一個新物件，用來增加新增的值
    //先展開原本的物件值
    //[e.target.name]為name的fullName
    //state會顯示 --> fullName : 輸入的值
    //覆蓋原本狀態中的空陣列
    const newUserData = { ...userData, [e.target.name]: e.target.value };

    setUserData(newUserData);
  };

  return (
    <>
      <div>
        <label>姓名</label>
        <input
          type="text"
          //表單元素要設名子
          name="fullName"
          //傳給後端的值，userData.fullNamehttps://drive.google.com/drive/folders/1LC5utzJsjk0CLYaU2GniNW5v27B2rZA9?usp=sharing
          value={userData.fullName}
          //創建事件，將事件的函數寫在上面
          onChange={handleChange}
        />
      </div>
      <div>
        <label>電話</label>
        <input
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default MultipleInput;
