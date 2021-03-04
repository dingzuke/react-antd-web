import React, { Component } from 'react';
import { history } from 'src/utils/router';
import { Button } from 'antd';
const css = require('./index.scss');

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: 'blueTab',
			hidden: false,
			fullScreen: false,
			data: undefined,
		};
	}
	componentDidMount() {
		// 模拟异步数据
		setTimeout(() => {
			let num = Math.ceil(Math.random() * 10);
			this.setState({ data: num });
		}, 100);
	}
	render() {
		return (
			<div className={css.modle}>
				<div>随机数：{this.state.data}</div>	
				<Button type="primary" onClick={() => this.goLogin()}>跳转登录</Button> 
				<Button type="primary" onClick={() => this.goDetail()}>跳转详情页</Button>
			</div>
		);
	}

	goLogin = () => {
		history.push('/login', { some: 'state' });
	}
	goDetail = () => {
		history.push('/detail', { some: 'state' });
	}

}

export default App;
