import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from "react-router";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CMAction from '../../action/action';
import ServiceTool from '../../service/http-service';

class LoginComponent extends Component {
  constructor(props){
    super(props);
  }
  componentWillMount() {
    ServiceTool.getDataFormApi((data) => {
      this.props.ACTIONS.UserInfo(data);
      console.log(this.props.USERINFO.toJS());
    })
  }

  toLogin(refs) {
    console.log(refs.username.value);
  }

  render() {
    return (
      <section className="login-cmp">
        <div className="login-box">
          <h3>登录</h3>
          <ul>
            <li>
              <label>姓名：</label>
              <input type="text" ref="username" />
            </li>
            <li>
              <label>密码：</label>
              <input type="password" ref="pwd" />
            </li>
          </ul>
          <a href="javascript:;" className="btn" onClick={() => {this.toLogin(this.refs)}}>登录</a>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state){
	return {
		USERINFO:state.MdCount.get('USERINFO')
	};
};
function mapDispatchToProps(dispatch){
	return {
		ACTIONS:bindActionCreators(CMAction,dispatch)
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);
