import { useState, useEffect, useRef } from 'react';

function FCLifecycle(props) {
  const [total, setTotal] = useState(0);
  const didMountRef = useRef(false);

  // 完整模擬didUpdate
  useEffect(() => {
    if (didMountRef.current) {
      console.log('模擬didUpdate(useRef)');
    } else didMountRef.current = true;
  }, [total]);

  return (
    <>
      {console.log('render')}
      <h1>函式型元件</h1>
      <h2 onClick={() => setTotal(total + 1)}>{total}</h2>
    </>
  );
}

export default FCLifecycle;
