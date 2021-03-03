import React, { Component } from 'react';
const css = require('./index.scss');

class Detail extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
		<div className={css.login}>
			详情页面
		</div>
		);
	}
}

export default Detail;
