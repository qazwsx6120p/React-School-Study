import { useState, useEffect } from 'react';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 搜尋用
  const [searchWord, setSearchWord] = useState('');

  // 錯誤訊息用
  const [error, setError] = useState('');

  // ------向server獲取資料(get)------
  const fetchUser = async () => {
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
      );
      const data = await response.json(); //轉成json

      // 設定到state
      // 如果不是回傳陣列有可能是錯誤或得不到正確資料
      // state users必須保持為陣列，不然map會發生中斷錯誤
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        setError('伺服器目前無法回傳資料，請稍後重試');
      }
    } catch (e) {
      //console.error(e)
      setError(e.message);
    }
  };

  // ------向server獲取資料(get)，用searchWord搜尋------
  const fetchUserSearch = async () => {
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users?name_like=' + //<--- ?name_like= searchWord(搜尋字體的狀態)
          searchWord
      );
      const data = await response.json();

      // 設定到state
      // 如果不是回傳陣列有可能是錯誤或得不到正確資料
      // state users必須保持為陣列，不然map會發生中斷錯誤
      if (Array.isArray(data)) {
        setUsers(data);
      } else {
        setError('伺服器目前無法回傳資料，請稍後重試');
      }
    } catch (e) {
      //console.error(e)
      setError(e.message);
    }
  };
  // didMount
  useEffect(() => {
    // 開啟載入指示動畫
    setIsLoading(true);

    // 向伺服器要資料
    fetchUser();
  }, []);

  // 自動2秒後關起載入動畫
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    }
  }, [isLoading]);

  const spinner = (
    <>
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );

  const displayTable = (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>生日</th>
        </tr>
      </thead>
      <tbody>
        {users.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.birth}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  // 有錯誤訊息即呈現錯誤
  const display = error !== '' ? error : displayTable;

  return (
    <>
      <h1>User List</h1>
      <div>
        {/* 搜尋的輸入欄位 */}
        <input
          type="text"
          placeholder="輸入姓名"
          value={searchWord}
          onChange={(e) => {
            setSearchWord(e.target.value); //更改SearchWord的狀態(打甚麼輸入甚麼)
          }}
        />
        <button
          onClick={() => {
            // 開啟指示動畫
            setIsLoading(true); //點擊更新Loading狀態為true

            // 用searchWord進行向server重要資料
            // 點擊執行fetchUserSearch函示(向伺服器要資料)
            fetchUserSearch();
          }}
        >
          搜尋
        </button>
      </div>
      {isLoading ? spinner : display}
    </>
  );
}

export default UserList;
