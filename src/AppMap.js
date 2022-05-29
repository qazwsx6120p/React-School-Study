//用map在頁面印出名子
//導入student.js資料
import { data } from './data/student.js';


function AppMap() {
  console.log(data);
  //創建一個新陣列儲存成<li>{v.name}</li>
  const studentData = data.map((v, i) => {
    // key值一定要，有id用id，最不得已(or靜態資料才用index值)
    return <li key={v.id}>{v.name}</li>;
  });
  console.log(studentData);

  //將<li>{v.name}</li>放入<ul></ul>
  return (
    <>
      <ul>{studentData}</ul>
    </>
  );
}
//導出檔案
export default AppMap;
