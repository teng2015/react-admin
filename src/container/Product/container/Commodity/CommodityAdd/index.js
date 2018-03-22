import React from 'react';
import { Button, Form, Input, Icon, Row, Col } from 'antd';
import { EditorState } from 'draft-js';
import Selector from 'container/Product/component/Selector';
import UploadImage from 'container/Product/component/UploadImage';
import RichEditor from 'container/Product/component/RichEditor';
import 'public/style/product/commodity-add.less';

const FormItem = Form.Item;

class CommodityAdd extends React.Component {
  goBack = () => {
    this.props.history.goBack();
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, value) => {
      if (!err) {
        console.log('received values of fomr', value);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        // xs: { span: 24 },
        // sm: { span: 8 },
        // md:{span:8},
        // lg:{span:8},
        span: 4
      },
      wrapperCol: {
        // xs: { span: 24 },
        // sm: { span: 16 },
        span: 20
      }
    };
    return (
      <div class="productadd-page">
        <div class="title">
          <h3>商品添加页</h3>
          <Button type="primary" ghost onClick={this.goBack}>
            返回上一页
          </Button>
        </div>
        <div class="form-container">
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              wrapperCol={{ span: 14 }}
              label="商品名称"
            >
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入商品名称' }]
              })(<Input placeholder="请输入商品名称" />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              wrapperCol={{ span: 14 }}
              label="商品描述"
            >
              {getFieldDecorator('subtitle', {
                rules: [{ required: true, message: '请输入商品描述' }]
              })(<Input placeholder="请输入商品描述" />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              wrapperCol={{ span: 14 }}
              label="商品分类"
            >
              {getFieldDecorator('categoryId', {
                initialValue: { one: 0, two: 0, current: 0 }
                // rules: [{ validator:this.customCheckCategoryId }]
              })(<Selector />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              wrapperCol={{ span: 5 }}
              label="商品价格"
            >
              {getFieldDecorator('price', {
                rules: [{ required: true, message: '请输入商品价格' }]
              })(<Input type="number" addonAfter="元" placeholder="价格" />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              wrapperCol={{ span: 5 }}
              label="商品库存"
            >
              {getFieldDecorator('stock', {
                rules: [{ required: true, message: '请输入商品库存' }]
              })(<Input type="number" addonAfter="件" placeholder="库存" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="商品图片">
              {getFieldDecorator('subImages', {
                initialValue: { fileList: [] }
                // rules:[{validator:this.customCheckUploadImage}]
              })(<UploadImage />)}
            </FormItem>
            <FormItem
              {...formItemLayout}
              wrapperCol={{ span: 16 }}
              label="商品详情"
            >
              {getFieldDecorator('detail', {
                initialValue: EditorState.createEmpty()
              })(<RichEditor />)}
            </FormItem>
            <FormItem wrapperCol={{ offset: 4 }}>
              <Button type="primary" htmlType="submit">
                添加
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(CommodityAdd);
