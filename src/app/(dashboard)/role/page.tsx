"use client";
import React, { useState } from "react";
import { Button, Input, Modal, Radio, Table } from "antd";
import TableComponent from "../components/TableComponent";
import Checkbox, { CheckboxGroupProps, CheckboxProps } from "antd/es/checkbox";

const RolePage = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div>
      <div>
        <Button
          className="mb-4"
          type="primary"
          onClick={() => setModal2Open(true)}
        >
          Update role
        </Button>
      </div>
      <TableComponent />
      <Modal
        title="Create a user"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <Input size="large" placeholder="Enter a role name" />
        <h2 className="my-4 font-bold">Role Permissions</h2>
        {Array.from("123456").map((_,index) => (
          <div className={`flex items-center gap-5  ${index === 0 ? "border-y" :"border-b"} py-3`}>
            <div>
              <h2>Home</h2>
            </div>
            <div>
              <Checkbox onChange={onChange}>Read</Checkbox>
              <Checkbox onChange={onChange}>Write</Checkbox>
            </div>
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default RolePage;
