import { useState } from 'react';
import './App.css';

function App() {
  //代表選中的選單項目
  const [selectedItem, setSelectedItem] = useState('');

  // 所有選單項目，先組成陣列
  const menuItems = ['首頁', '關於我們', '產品'];

  return (
    <>
      <ul>
        {/* 用mpa跑出陣列中所有的值 */}
        {menuItems.map((v, i) => {
          return (
            <li
              //記得加key
              key={i}
              //點擊li時更新當前用map跑出的v狀態
              onClick={() => {
                setSelectedItem(v);
              }}
            >
              {/* 假如v狀態為更新完後的狀態(當前點擊)則為它添加上active反之則不添加 */}
              <a href="#/" className={v === selectedItem ? 'active' : ''}>
                {v}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
