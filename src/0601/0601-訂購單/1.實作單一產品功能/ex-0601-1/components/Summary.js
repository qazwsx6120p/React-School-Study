import React from 'react';

function Summary(props) {
  //解構運算完的總數量跟總價格
  const { totalNumber, totalPrice } = props;

  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>付款摘要</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          {/* 將總數量放入 */}
          <div className="col col-style">共 {totalNumber} 項目</div>
        </div>
        <div className="row row-style">
          <div className="col">總價</div>
          {/* 將總價格放入 */}
          <div className="col text-right">${totalPrice}</div>
        </div>
        <button className="btn">前往付款</button>
      </div>
    </>
  );
}

export default Summary;
