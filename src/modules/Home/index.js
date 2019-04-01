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
		};
	}

	render() {
		return (
			<div className={css.modle}>
				<Button type="primary" onClick={() => this.goLogin()}>跳转登录</Button>
			</div>
		);
	}

	goLogin = () => {
		history.push('/login', { some: 'state' });
	}

}

export default App;
