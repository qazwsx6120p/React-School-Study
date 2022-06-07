import { Component } from 'react';

class CCLifecycle extends Component {
  constructor() {
    super();
    this.state = { total: 0 };
    console.log('constructor');
  }
  //組件已經掛載
  componentDidMount() {
    console.log('componentDidMount');
  }
  //組件已經更新
  //componentDidUpdate第二個參數為更新完的前一個狀態
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    console.log(this.state.total, prevState.total);
    if (this.state.total === 12) {
      this.setState({ total: 11 });
    }
  }
  //只有父元件可以移除CCLifecycle元件
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    console.log('render');
    return (
      <>
        <h1>類別型元件</h1>
        <h2
          onClick={() => {
            this.setState({ total: this.state.total + 1 });
          }}
        >
          {this.state.total}
        </h2>
      </>
    );
  }
}
export default CCLifecycle;
