import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//---------------------0526---------------------
// import JsCounter from './0526/1.js-計數器/index';
// import ReactCounter from './0526/2.react-計數器/App';
// import Jsx1 from './0526/3.jsx-各種類型值呈現/App';
// import Jsx2 from './0526/4.jsx-map範例-1/App';
// import Jsx3 from './0526/5.jsx-map範例-2-key/App';
// import Jsx4 from './0526/6.jsx-map範例-3-key/App';
// import Jsx5 from './0526/7.jsx-map範例-4-使用json檔/App';
// import Jsx6 from './0526/8.jsx-三元與inline-if/App';
// import Jsx7 from './0526/9.jsx-map-table練習/App';
//---------------------0530---------------------
// import SetState from './0530/1.setState異步處理樣式-1/App';
// import ChangeCss from './0530/2.練習題-homwork1/App';
// import Props1 from './0530/3.props-基本範例-P到C/App';
// import Props2 from './0530/4.props-解構props-1/App';
// import Props3 from './0530/5.props-解構props-2/App';
// import Props4 from './0530/6.props-預設props/App';
// import Props5 from './0530/7.props-props限制屬性/App';
// import Props6 from './0530/8.props-資料流-P到C/App';
// import Props7 from './0530/8.props-資料流-P到C/App';
// import Props7 from './0530/9.props-資料流-C到P/App';
// import Props8 from './0530/10.props-資料流-C到P-一呈現即回傳/App';
// import Props9 from './0530/11.props-資料流-C到C/App';
// import HomeWork3 from './0530/12.練習題/HomeWork3';
// import OrderPage from './0530/13.OrderPage/App';
//---------------------0601---------------------
// import OrderPageOperate1 from './0601/0601-訂購單/1.實作單一產品功能/App';
// import OrderPageOperate2 from './0601/0601-訂購單/2.實作多個產品-狀態為陣列/App';
// import OrderPageOperate3 from './0601/0601-訂購單/3.實作多個產品-狀態為陣列中物件/App';
// import OrderPageOperate4 from './0601/0601-訂購單/4.實作多個產品-刪除功能/App';
// import Input1 from './0601/0601-Input.CheckBox/1.Controlled';
// import MultpleInput from './0601/0601-多重输入表單/MultpleInput';
//---------------------0606---------------------
// import BMI from './0606/1.BMI計算-練習-介面/App';
// import BMI2 from './0606/2.BMI計算-練習-完成/App';
// import Postcode from './0606/3.郵遞區號連動下拉選單-完成-1/App';
// import Postcode2 from './0606/3.郵遞區號連動下拉選單-完成-索引狀態/App';
// import Postcode3 from './0606/4.郵遞區號連動下拉選單-完成-值狀態/App';
// import HTML5 from './0606/6.HTML5表單驗証-示範/App';
// import HTML5_2 from './0606/7.HTML5表單驗証-formdata與state/App';
// import HTML5_3 from './0606/8.HTML5表單驗証-共用state物件/App';
// import HTML5_4 from './0606/9.HTML5表單驗証-驗証訊息自訂位置呈現/App';
// import HTML5_5 from './0606/10.HTML5表單驗証-加入checkbox與radio/App';
// import HTML5_6 from './0606/11.HTML5表單驗証-密碼與確認密碼-自訂驗証/App';
//---------------------0606---------------------
// import Refs from './0607/1.refs-與id的比較範例/App';
// import App from './0607/2.生命周期-更新階段/App';
// import Class from './0607/3.Class類別型元件-生命週期/App';
// import UseEffect from './0607/4.生命周期-函式型元件-useEffect-didMount/App';
// import UseEffect2 from './0607/5.生命周期-函式型元件-useEffect-didUpdate-1/App';
// import UseEffect3 from './0607/6.生命周期-函式型元件-useEffect-didUpdate-2/App';
import UserList from './0607/7.生命週期/App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*----------0526----------*/}
    {/* <JsCounter /> */}
    {/* <ReactCounter /> */}
    {/* <Jsx1 /> */}
    {/* <Jsx2 /> */}
    {/* <Jsx3 /> */}
    {/* <Jsx4 /> */}
    {/* <Jsx5 /> */}
    {/* <Jsx6 /> */}
    {/* <Jsx7 /> */}
    {/*----------0530----------*/}
    {/* <SetState /> */}
    {/* <ChangeCss /> */}
    {/* <Props1 /> */}
    {/* <Props2 /> */}
    {/* <Props3 /> */}
    {/* <Props4 /> */}
    {/* <Props5 /> */}
    {/* <Props6 /> */}
    {/* <Props7 /> */}
    {/* <Props8 /> */}
    {/* <Props9 /> */}
    {/* <HomeWork3 /> */}
    {/* <OrderPage /> */}
    {/*----------0601----------*/}
    {/* <OrderPageOperate1 /> */}
    {/* <OrderPageOperate2 /> */}
    {/* <OrderPageOperate3 /> */}
    {/* <OrderPageOperate4 /> */}
    {/* <Input1 /> */}
    {/* <MultpleInput /> */}
    {/*----------0606----------*/}
    {/* <BMI /> */}
    {/* <BMI2 /> */}
    {/* <Postcode /> */}
    {/* <Postcode2 /> */}
    {/* <Postcode3 /> */}
    {/* <HTML5 /> */}
    {/* <HTML5_2 /> */}
    {/* <HTML5_3 /> */}
    {/* <HTML5_4 /> */}
    {/* <HTML5_5 /> */}
    {/* <HTML5_6 /> */}
    {/*----------0606----------*/}
    {/* <Refs /> */}
    {/* <App /> */}
    {/* <Class /> */}
    {/* <UseEffect /> */}
    {/* <UseEffect2 /> */}
    {/* <UseEffect3 /> */}
    <UserList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
