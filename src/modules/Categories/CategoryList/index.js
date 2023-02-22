import { Space, Table } from "antd";
import { useCallback, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";

import cateList from "./categoryData.json";
import CustomTooltip from "~/ui/CustomTooltip";
import { MSG07 } from "~/system/Messages";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalCount, setTotalCount] = useState(1);

  const getCategories = useCallback((pageIndex) => {
    setCategories(
      cateList.map((c, index) => {
        return {
          key: c.Id,
          ...c,
        };
      })
    );
    setTotalCount(cateList.length);
  }, []);

  useEffect(() => {
    getCategories(pageIndex);
  }, [pageIndex]);

  const cellButton = (record) => {
    return (
      <Space>
        <CustomTooltip title="Xem chi tiết" color="#014B92">
          <Button className="mx-4" variant="outline-info" size="sm">
            <FontAwesomeIcon icon={faEye} />
          </Button>
        </CustomTooltip>
      </Space>
    );
  };

  const columns = [
    { title: "Id", dataIndex: "Id", key: "id" },
    { title: "Tên loại hàng", dataIndex: "name", key: "name" },
    { title: "Phân loại", dataIndex: "categoryType", key: "type" },
    { title: "Ngày cập nhật", dataIndex: "UpdatedDate", key: "updatedDate" },
    {
      title: "Hành động",
      dataIndex: "button",
      key: "button",
      width: 100,
      render: (text, record) => cellButton(record),
    },
  ];

  return (
    <>
      <div className="text-center">
        <h3>Danh sách loại hàng</h3>
      </div>

      <Table
        locale={{ emptyText: MSG07 }}
        columns={columns}
        dataSource={categories}
        pagination={{
          pageSize: pageSize,
          total: totalCount,
          position: ["bottomCenter"],
          onChange: (page) => {
            setPageIndex(page);
          },
        }}
        bordered
      />
    </>
  );
}

export default CategoryList;
