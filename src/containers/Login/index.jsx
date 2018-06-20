import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox,Row } from 'antd';
import { Link } from 'dva/router';
const FormItem = Form.Item;
class Login extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
      render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row type="flex" justify="center" style={{marginTop: 20,}}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                    </FormItem>
                    <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                    </FormItem>
                    <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox> 记住密码</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">忘记了密码</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    Or <Link to="/register">注册</Link>
                    </FormItem>
                </Form>
            </Row>
        )
    };
}
 

export default Form.create()(Login);