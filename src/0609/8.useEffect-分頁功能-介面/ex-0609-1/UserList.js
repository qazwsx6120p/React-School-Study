import { useState, useEffect } from 'react';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 搜尋用
  // 輸入用
  const [searchWordInput, setSearchWordInput] = useState('');
  // 按下"搜尋"按鈕時，送到伺服器用
  const [searchWord, setSearchWord] = useState('');

  // 旗標(元件生命周期是否已經mount，進入update階段)
  const [isMounted, setIsMounted] = useState(false);

  // 排序 (asc | desc)
  const [order, setOrder] = useState('asc');

  // 錯誤訊息用
  const [error, setError] = useState('');

  // 分頁用
  // pageNow 目前在第幾頁
  // perPage 每頁多少項目
  // pageTotal 總共多少頁
  const [pageNow, setPageNow] = useState(1); //初始化1，至少會有1頁
  const [perPage, setPerPage] = useState(3);
  const [pageTotal, setPageTotal] = useState(1); //初始化1，至少會有1頁

  // 向server獲取資料(get)
  const fetchUser = async () => {
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
      );
      const data = await response.json();

      // 設定到state
      // 如果不是回傳陣列有可能是錯誤或得不到正確資料
      // state users必須保持為陣列，不然map會發生中斷錯誤
      if (Array.isArray(data)) {
        // console.log(data)
        setUsers(data);
        // pageTotal
        //總頁數 = 資料的總長度/每頁有幾筆 EX:10筆/每頁5筆 = 2頁
        setPageTotal(Math.ceil(data.length / perPage));
      } else {
        setError('伺服器目前無法回傳資料，請稍後重試');
      }
    } catch (e) {
      //console.error(e)
      setError(e.message);
    }
  };

  // 向server獲取資料(get)，用searchWord搜尋
  const fetchUserFilter = async () => {
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users?name_like=' +
          searchWord +
          '&_sort=id&_order=' +
          order
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

  // 自動2秒後關起載入動畫
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    }
  }, [isLoading]);

  // // didMount
  useEffect(() => {
    // 開啟載入指示動畫
    setIsLoading(true);
    // 向伺服器要第一次的資料
    fetchUser();
    // 設定進入更新狀態的旗標
    setIsMounted(true);
  }, []);

  // didMount+didUpdate
  useEffect(() => {
    // didUpdate// 已經在更新階段
    if (isMounted) {
      // 開啟指示動畫
      setIsLoading(true);
      // 向伺服器要更新資料
      fetchUserFilter();
    }
  }, [order, searchWord]);

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
          <th>ID {order === 'asc' ? '🔼' : '🔽'}</th>
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

  const pagination = (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="#/"
              onClick={() => {
                setPageNow(1);
              }}
            >
              最前頁
            </a>
          </li>
          {/* 創造一個陣列，陣列長度為總頁數，然後陣列塞滿1 */}
          {/* 利用Array(5).fill(將陣列填滿1) */}
          {/* 假如是5頁，就塞滿[1,1,1,1,1] */}
          {Array(pageTotal)
            .fill(1)
            .map((v, i) => {
              return (
                <li
                  // 樣板字串
                  // 判斷頁碼跟pageNow一樣的話給他一個active
                  className={`page-item ${i + 1 === pageNow ? 'active' : ''}`}
                  key={i}
                >
                  <a
                    className="page-link"
                    href="#/"
                    onClick={() => {
                      setPageNow(i + 1); //現在是第幾頁 = 索引+1 EX:[1(i=0),1,1,1,1] 0+1=第一頁
                    }}
                  >
                    {/* 索引 0,1,2,3,4 */}
                    {/* 頁碼 1,2,3,4,5  <--索引+1*/}
                    {/* 索引值+1就是頁碼 */}
                    {i + 1}
                  </a>
                </li>
              );
            })}
          <li className="page-item">
            <a
              className="page-link"
              href="#/"
              onClick={() => {
                setPageNow(pageTotal);
              }}
            >
              最後頁
            </a>
          </li>
        </ul>
      </nav>
    </>
  );

  // 有錯誤訊息即呈現錯誤
  const display = error !== '' ? error : displayTable;

  return (
    <>
      <h1>User List</h1>
      <div>
        <input
          type="text"
          placeholder="輸入姓名"
          value={searchWordInput}
          onChange={(e) => {
            setSearchWordInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // 將輸入的搜尋字詞，設定到要送到server的字詞
            setSearchWord(searchWordInput);
          }}
        >
          搜尋
        </button>
        <button
          onClick={() => {
            // 用order=asc進行向server重要資料
            // fetch在didUpdate裡進行，確保order已設定完成
            setOrder('asc');

            // 注意: 以下程式寫法會抵觸到setState異步執行
            // 實際上setOrder會比fetch更慢(晚)執行
            // 如果fetch中用到了order會得到舊的order而非最後更新過的order
            //
            // setOrder('asc')
            // fetch('http://xxx/?_order='+order) //如果這裡面有用到order狀態
          }}
        >
          ID從小到大排序
        </button>
        <button
          onClick={() => {
            // 用order=desc進行向server重要資料
            // fetch在didUpdate裡進行，確保order已設定完成
            setOrder('desc');
          }}
        >
          ID從大到小排序
        </button>
      </div>
      {isLoading ? spinner : display}
      <div>{pagination}</div>
    </>
  );
}

export default UserList;
