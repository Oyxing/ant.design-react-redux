import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Nav extends Component{
      
    render() {
      return (
        <Menu
            mode="horizontal"
        >
            <Menu.Item key="index">
                <Link to="/">首页</Link>
            </Menu.Item>
            <Menu.Item key="design" >
                <Link to="/design">design</Link>
            </Menu.Item>
            <Menu.Item key="login" style={{float: 'right',marginRight:'10px'}}>
                <Link to="/login">登录</Link>
            </Menu.Item>
        </Menu>
      )
    };
}

export default Nav