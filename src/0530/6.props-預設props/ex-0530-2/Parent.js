import Child from './Child';

function Parent() {
  return (
    <>
      <Child />

      <Child text="Hello" fullName="Amy" />
    </>
  );
}

export default Parent;
