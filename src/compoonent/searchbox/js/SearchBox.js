import React, { useEffect, useState } from 'react';
import { Button, Flex, Form, Input } from 'antd';
import '../assets/style.scss'

const SearchBox = ({ data, setData, filterData, setFilterData }) => {
  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  const onFinish = async (values) => {
    const filterUsers = await data.filter(user => {
      if (user.firstname.toLowerCase().trim() === values.firstname.toLowerCase().trim() &&
        user.lastname.toLowerCase().trim() === values.lastname.toLowerCase().trim() &&
        user.code.trim() === values.code.trim()) {
        return user;
      }
    })

    if (filterData.length) {
      setFilterData(filterUsers)
    } else {
      alert("کاربری با این مشخصات یافت نشد !!!")
    }
  };

  const resetSearch = () => {
    form.resetFields();
    setFilterData(data);
  }


  return (
    <div className='box'>
      <h2>جستجو</h2>
      <Form
        form={form}
        style={{
          paddingLeft: 200,
          paddingBottom: 20,
        }}
        name="horizontal_login"
        layout="inline"
        labelAlign='Right'
        onFinish={onFinish}>
        <Flex align='center' justify='center' wrap gap="middle" >
         

          <Form.Item
            name="firstname"
            rules={[
              {
                required: true,
                message: ' لطفا نام خود را وارد کنید',
              },
            ]}
          >
            <Input placeholder="نام" />
          </Form.Item> 

          <Form.Item
            name="lastname"
            rules={[
              {
                required: true,
                message: ' لطفا نام خانوادگی خود را وارد کنید',
              },
            ]}
          >
            <Input placeholder=" نام خانوادگی" />
          </Form.Item>


          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: ' لطفا  کدملی خود را وارد کنید',
              },
            ]}
          >
            <Input placeholder="کدملی" />
          </Form.Item>



          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                htmlType="submit">
                جستجو
              </Button>
            )}
          </Form.Item>

          <Form.Item shouldUpdate>
            {() => (
              <Button
           
                onClick={resetSearch}
                type="dashed"
                htmlType="button">
                ریست
              </Button>
            )}
          </Form.Item>
        </Flex>
      </Form>
    </div>
  );
};
export default SearchBox;