import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userAction from '../../actions/user';
import { User } from "../../components";
class UserApp extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount(){
        //  引入行为 
            const { actions } = this.props
            actions.setUser({
                "users":[1,2,3],
                "usersById":[
                    {
                        "id":1,
                        "name":"小明1"
                    },
                    {
                        "id":2,
                        "name":"小明2"
                    },
                    {
                        "id":3,
                        "name":"小明3"
                    }
                ]
            })
    }
    render(){
        return(
            <div>
              <User userdata={this.props}/>
            </div>
        )
    }
}
//  调用两次 1-初始化  2-赋值
const mapStateToProps = state => {
    return {
        users: state.user.users,
        usersById: state.user.usersById
    }
}
//Redux中的bindActionCreators(组件相关的方法,dispatch)，是通过dispatch将action包裹起来，
// 这样可以通过bindActionCreators创建的方法，直接调用dispatch(action)(隐式调用）。
// 初始化 actinos 内部方程 用来调用 
//  使用之前 actions:{}   使用之后 引入组件的方程付给它 actions:{setgetUser(),setUser()}
const mapDispatcToProps = (dispatch) => (
    {
        actions: bindActionCreators(userAction,dispatch)
    }
)

export default connect(mapStateToProps,mapDispatcToProps)(UserApp)