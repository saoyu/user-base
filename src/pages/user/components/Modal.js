import { Component } from 'react';
import { Form, Input, Modal } from 'antd';

const FormItem = Form.Item;

class UserEditModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  // 显示madal
  showModelHandler = (e) => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  //隐藏madal
  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  //确认
  okHandler = () => {
    const { onOk } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModelHandler();
        console.log("modal："+values);
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const {id, username, nickname, city, province } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 12 },
    };
    console.log(this.props.form);
    return (
      <span>
          <span onClick={this.showModelHandler}>
              {children}
          </span>
          <Modal
            title="Edit User"
            visible={this.state.visible}
            onOk={this.okHandler}
            onCancel={this.hideModelHandler}
          >
              <Form horizontal='true' onSubmit={this.okHandler}>
                {/*id*/}
                <FormItem
                  {...formItemLayout}
                  label="Id"
                >
                  {
                    getFieldDecorator('id', {
                      initialValue: id,
                    })(<Input/>)
                  }
                  </FormItem>
                {/*用户名*/}
                <FormItem
                  {...formItemLayout}
                  label="Userame"
                >
                  {
                    getFieldDecorator('username', {
                      initialValue: username,
                    })(<Input/>)
                  }
                  </FormItem>
                {/*昵称*/}
                <FormItem
                  {...formItemLayout}
                  label="Nickname"
                >
                  {
                    getFieldDecorator('nickname', {
                      initialValue: nickname,
                    })(<Input/>)
                  }
                  </FormItem>
                {/*省份*/}
                <FormItem
                  {...formItemLayout}
                  label="Province"
                >
                  {
                    getFieldDecorator('province', {
                      initialValue: province,
                    })(<Input/>)
                  }
                  </FormItem>
                {/*城市*/}
                <FormItem
                  {...formItemLayout}
                  label="City"
                >
                  {
                    getFieldDecorator('city', {
                      initialValue: city,
                    })(<Input/>)
                  }
                  </FormItem>
              </Form>
          </Modal>
      </span>
    );
  }
}

export default Form.create()(UserEditModal);
