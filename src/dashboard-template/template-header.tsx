import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import "./Template.scss";
import { useEffect } from "react";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    label: "a danger item",
  },
];


const TemplateHeader = (props:any) => {

  useEffect(()=>{
    console.log('---', props.BgColor)
  },[props.BgColor])
  return (
    <>
      <div
        className="TemplateHeader"
        style={{
         background:props.BgColor,
         color:props.BgColor==="transparent"? "#fff": "#000000"
        }}
      >
        <strong style={{ fontSize: "2rem" }}>
          Aspire Link
        </strong>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space style={{fontFamily:'Poppins', fontSize: "1.3rem" }}>Home</Space>
          </a>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space style={{fontFamily:'Poppins',  fontSize: "1.3rem" }}>Use Cases</Space>
          </a>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space style={{fontFamily:'Poppins',  fontSize: "1.3rem" }}>Packages</Space>
          </a>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space style={{ fontFamily:'Poppins', fontSize: "1.3rem" }}>About Us</Space>
          </a>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space style={{ fontFamily:'Poppins', fontSize: "1.3rem" }}>Contact Us</Space>
          </a>
        </Dropdown>
      </div>
    </>
  );
};

export default TemplateHeader;
