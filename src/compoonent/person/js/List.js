import { useEffect, useState } from 'react';
import { Popconfirm } from 'antd';
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import Table from '../../../utils/Table';
import Data from '../../data/data.json';
import NewModal from './NewModal';
import EditModal from './EditModal';
import SearchBox from '../../searchbox/js/SearchBox';
import '../assets/style.scss'

export default function List() {
  const [data, setData] = useState(Data);
  const [filterData, setFilterData] = useState(Data)
  const [isEditeModalOpen, setIsEditeModalOpen] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    setFilterData(data)
  }, [data])

  const handleDelete = (id) => {
    const newData = filterData.filter((item) => item.id !== id);
    setData(newData);
  };

  const infoHandler = (data) => {
    setIsEditeModalOpen(true);
    setUserInfo(data);
  };



  const columns = [
    { key: 'id', title: 'شناسه' },
    { key: 'firstname', title: 'نام' },
    { key: 'lastname', title: 'نام خانوادگی' },
    { key: 'city', title: 'شهر' },
    { key: 'code', title: 'کدملی' },
    {
      key: 'actions',
      title: 'عملیات',
      render: (_, data) => (
        <>
          <EyeOutlined onClick={() => infoHandler(data)} />
          <Popconfirm
            title='آیا از حذف این رکورد مطمین هستید؟'
            onConfirm={() => handleDelete(data.id)}
          >
            <DeleteOutlined
              style={{ margin: '10px', color: 'red', cursor: 'pointer' }}
            />
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <>
      <EditModal
        isEditeModalOpen={isEditeModalOpen}
        setIsEditeModalOpen={setIsEditeModalOpen}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
        setData={setData}
        data={data}
      />

      <SearchBox
        type='text'
        placeholder='جستجو'
        data={data}
        setData={setData}
        filterData={filterData}
        setFilterData={setFilterData}
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />

      <NewModal
        isNewModalOpen={isNewModalOpen}
        setIsNewModalOpen={setIsNewModalOpen}
        setData={setData}
      />

      <div className='table'>
        <Table data={filterData} columns={columns} />
      </div>
    </>
  );
}