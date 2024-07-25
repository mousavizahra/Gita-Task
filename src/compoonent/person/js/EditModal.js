import React, { useState } from 'react';
import { Divider, Modal, Button, Input, } from 'antd';


const EditModal = ({
  isEditeModalOpen,
  setIsEditeModalOpen,
  userInfo,
  setUserInfo,
  setData,
  data }) => {


  const [editing, setEditing] = useState(false);
  const [isLoading, setIsLoadin] = useState(false);

  const closeModal = () => {
    setIsEditeModalOpen(false);
    setEditing(false);
    setUserInfo(null)
  };


  const handleSave = async () => {
    try {
      setIsLoadin(true);
      const newData = await data?.map(item => {
        if (item?.id === userInfo?.id) {
          item = userInfo;
        }
        return item
      })
      setData(newData);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadin(false)
      closeModal();
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div>
      <Modal
        title="نمایش کاربر"
        open={isEditeModalOpen}
        onCancel={closeModal}
        footer={[
          <Button
            key="cancel"
            onClick={closeModal}>
            Cancel
          </Button>,
          editing ? (
            <Button
              key="save"
              type="primary"
              loading={isLoading}
              onClick={handleSave}>
              Save
            </Button>
          ) : (
            <Button
              key="edit"
              onClick={() => setEditing(true)}>
              Edit
            </Button>
          ),
        ]}
      >
        <label>نام:</label>
        <Divider type="vertical" />
        {editing ? (
          <Input
            name="firstname"
            defaultValue={userInfo.firstname}
            onChange={handleInputChange}
            placeholder="نام"
          />
        ) : (
          <span>{userInfo?.firstname || "Unknown"}</span>
        )}
        <Divider />

        <label> نام خانوادگی </label>
        <Divider type="vertical" />
        {editing ? (
          <Input
            name="lastname"
            defaultValue={userInfo?.lastname}
            onChange={handleInputChange}
            placeholder="نام خانوادگی"
          />
        ) : (
          <span>{userInfo?.lastname || 'Unknown'}</span>
        )}
        <Divider />

        <label> کدملی</label>
        <Divider type="vertical" />
        {editing ? (
          <Input
            name="code"
            defaultValue={userInfo?.code}
            onChange={handleInputChange}
            placeholder="کدملی"
          />
        ) : (
          <span>{userInfo?.code || 'Unknown'}</span>
        )}
      </Modal>
    </div>
  );
};

export default EditModal;