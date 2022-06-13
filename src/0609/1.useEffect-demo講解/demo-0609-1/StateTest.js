import { useEffect, useState } from 'react';

function StateTest(props) {
  const [name, setName] = useState('Bob');

  // didMount + didUpdate
  // useEffect(() => {
  //   setName('John');
  // }, [name]);

  return (
    <div>
      {name}
      <button onClick={() => setName('Amy')}>change name to Amy</button>
    </div>
  );
}

export default StateTest;
