import "./Template.scss";
import { useEffect } from "react";
import { SmileOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Button } from "antd";

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
];

const TemplateHeader = (props: any) => {
  useEffect(() => {}, [props.BgColor]);
  return (
    <>
      <div
        className="TemplateHeader"
        style={{
          background: props.BgColor,
          color: props.BgColor === "transparent" ? "#fff" : "#000000",
        }}
      >
        <strong style={{ fontSize: "2rem" }}>Aspire Link</strong>
        <Dropdown menu={{ items }}>
          <Space
            style={{
              fontFamily: "Poppins",
              fontSize: "1.3rem",
              cursor: "pointer",
            }}
          >
            Home
          </Space>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <Space
            style={{
              fontFamily: "Poppins",
              fontSize: "1.3rem",
              cursor: "pointer",
            }}
          >
            Use Cases
          </Space>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <Space
            style={{
              fontFamily: "Poppins",
              fontSize: "1.3rem",
              cursor: "pointer",
            }}
          >
            Packages
          </Space>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <Space
            style={{
              fontFamily: "Poppins",
              fontSize: "1.3rem",
              cursor: "pointer",
            }}
          >
            About Us
          </Space>
        </Dropdown>
        <Dropdown menu={{ items }}>
          <Space
            style={{
              fontFamily: "Poppins",
              fontSize: "1.3rem",
              cursor: "pointer",
            }}
          >
            Contact Us
          </Space>
        </Dropdown>

        <div style={{ marginLeft: "80px" }}>
          <Button
            type="primary"
            style={{
              background: props.BgColor === "transparent" ? "#fff" : "#551a8b",
              color: props.BgColor === "transparent" ? "#551a8b" : "#fff",
            }}
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </>
  );
};

export default TemplateHeader;
