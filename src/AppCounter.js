import { useState } from 'react';

function AppCounter() {
  const [total, setTotal] = useState(0);

  return (
    <>
      <h1
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        {total}
      </h1>
      {/* 示範三元表達式 */}
      <p>{total > 10 ? 'total大於10了' : '目前小於等於10'}</p>
      {/* 示範inline if 語法 */}
      <p>{total > 10 && 'total大於5了'}</p>
    </>
  );
}

export default AppCounter;
