import React, { useEffect, useState } from 'react';
import './UserList.css';

function UserList() {
  //使用者資料狀態
  const [users, setUsers] = useState([]);
  //載入動畫狀態,預設式false
  const [isLoading, setIsLoading] = useState(false);

  // 向server獲取資料(get)
  const fetchUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //將資料轉成json
    const data = await response.json();

    // 設定到state
    setUsers(data);
  };

  // didMount
  useEffect(() => {
    // 開啟載入指示動畫
    setIsLoading(true);

    //-----------------------------------
    //凡是從資料庫撈資料一律使用useEffect
    //因為它是異步它會在載入動畫之後執行
    fetchUser();
    //-----------------------------------

    // 設定載入動畫,2秒後關起
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  //載入動畫html
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
  //資料表table
  const displayTable = (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {/* 利用map將陣列值跑出 */}
        {users.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{v.id}</td>
              <td>{v.name}</td>
              <td>{v.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <>
      <h1>User List</h1>
      {/* isLoading==true 顯示載入動畫 ; isLoading==false 顯示資料table */}
      {isLoading ? spinner : displayTable}
    </>
  );
}

export default UserList;
