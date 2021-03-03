import React, { Component } from 'react';
const css = require('./index.scss');

class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		let times = new Date();
		return (
		<div className={css.login}>
			当前时间：{times.getMinutes()}
		</div>
		);
	}
}

export default Detail;
