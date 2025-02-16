import { Col, Row, Divider } from "antd";
import logo from "../assets/logo.png";
import {
  InstagramOutlined,
  GithubOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const socialLinks = [
  { id: 1, icon: <FacebookOutlined />, link: "https://facebook.com" },
  { id: 2, icon: <GithubOutlined />, link: "https://github.com" },
  { id: 3, icon: <InstagramOutlined />, link: "https://instagram.com" },
  { id: 4, icon: <LinkedinOutlined />, link: "https://linkedin.com" },
  { id: 4, icon: <YoutubeOutlined />, link: "https://youtube.com" },
];

const DashboardFooter = () => {
  return (
    <>
      <Row style={{ margin: "30px", padding: "30px" }}>
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={6}
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   alignContent: "center",
          // }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong style={{ fontSize: "1.75rem" }}>
              <img
                src={logo}
                alt=""
                style={{ width: "250px", height: "90px" }}
              />
            </strong>
            <span style={{ fontSize: "1rem" }}>
              Aspir Link connects mentors and mentees for guided career growth.
            </span>
          </div>
        </Col>

        <Col
          xs={24}
          sm={24}
          md={6}
          lg={6}
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   alignContent: "center",
          // }}
        >
          <div>
            <strong style={{ fontSize: "1.75rem" }}>Company</strong>
            <ul
              style={{
                listStyleType: "none",
                color: "black",
                fontSize: "1rem",
              }}
            >
              <li>Home</li>
              <li>Use Cases</li>
              <li>Packages</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={6}
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   alignContent: "center",
          // }}
        >
          <div>
            <strong style={{ fontSize: "1.75rem" }}>Location</strong>
            <ul
              style={{
                listStyleType: "none",
                color: "black",
                fontSize: "1rem",
              }}
            >
              <li>2nd stage Jayanagar, Bangalore south, Karnataka 560087 📍</li>
            </ul>
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={6}
          // style={{
          //   display: "flex",
          //   justifyContent: "center",
          //   alignItems: "center",
          //   alignContent: "center",
          // }}
        >
          <div>
            <strong style={{ fontSize: "1.75rem" }}>Follow Us</strong>
            {/* <div>
                  <InstagramOutlined />
                  <GithubOutlined />
                  <LinkedinOutlined />
                  <YoutubeOutlined />
                  <FacebookOutlined />
                </div> */}
            <div style={{ display: "flex", margin: "2px" }}>
              {socialLinks.map(({ id, icon }) => (
                <motion.h3
                  style={{ margin: "7px" }}
                  key={id}
                  whileHover={{ scale: 1.2, y: -5, color: "#551A8B" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {icon}
                </motion.h3>
              ))}
            </div>
          </div>
        </Col>
        <Divider
          style={{
            borderColor: "#8A92AC",
          }}
        >
          Made with 💜 in India
        </Divider>
        <div
          style={{
            width:"100%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems:'center',
          }}
        >
          <span>© 2024 Aspire Link. All rights reserved.</span>
        </div>
      </Row>
    </>
  );
};

export default DashboardFooter;
