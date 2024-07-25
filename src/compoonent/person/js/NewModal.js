import React, { useState } from 'react';
import { Button, Modal, Flex, Divider, Input, Form } from 'antd';
import '../assets/style.scss'




const NewModal = ({ isNewModalOpen, setIsNewModalOpen, setData }) => {

  const [form] = Form.useForm();

  const [isLoading, setIsLoadin] = useState(false);

  const showModal = () => {
    setIsNewModalOpen(true);
  };

  const closeModal = () => {
    setIsNewModalOpen(false);
    form.resetFields();
  };


  const submitHandler = (e) => {
    console.log(e);
    try {
      setIsLoadin(true);
      const newUser = { ...e, id: Math.floor(Math.random() * 1000) };
      setData((prevUser) => ([...prevUser, newUser]));
      closeModal();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadin(false);
    }
  }


  return (
    <>
     <div className='new'>
     <Flex align="start">
        <Button type="primary" onClick={showModal}>
          افزودن
        </Button>
      </Flex>

      {isNewModalOpen &&
        <Modal
          title=" افزودن"
          open={isNewModalOpen}
          onCancel={closeModal}
          footer={null}
        >
          <Form
            name="control-add-user"
            form={form}
            onFinish={submitHandler}
          >
            <Form.Item
              name="firstname"
              label="نام"
              rules={[
                { required: true },
                { max: 5 }
              ]}
            >
              <Input/>
            </Form.Item>
            <Divider type="horizontal" />


            <Form.Item
              name="lastname"
              label="نام خانوادگی"
              rules={[
                { required: true },
                { max: 10 }
              ]}
            >
              <Input/>
            </Form.Item>
            <Divider type="horizontal" />

            <Form.Item
              name="code"
              label="کدملی"
              rules={[
                { required: true },
                { len: 12 }
              ]}
            >
              <Input/>
            </Form.Item>
            <Divider type="horizontal" />

            <Flex gap="middle" >
              <Button
                key="cancel"
                onClick={closeModal}>
                لغو
              </Button>
              <Button
                htmlType='submit'
                key="save"
                type="primary"
                loading={isLoading}
              >
                ذخیره
              </Button>
            </Flex>
          </Form>
        </Modal>}

     </div>
      
    </>
  );
};

export default NewModal;