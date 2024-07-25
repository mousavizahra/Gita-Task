import { Table as AntTable } from 'antd'
import React, { useMemo } from 'react'

export default function Table ({ data, columns, rowKey = 'id' }) {
  const newColumns = useMemo(() => {
    return columns.map(column => ({
      dataIndex: column.key,
      ...column
    }))
  }, [columns])

  return <AntTable dataSource={data} columns={newColumns} rowKey={rowKey} />
}
