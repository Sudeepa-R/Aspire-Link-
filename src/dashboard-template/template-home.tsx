import "./Template.scss";
import lImage from "../assets/hero_homepage.webp";
import imgae2 from "../assets/image.png";
import image3 from "../assets/image3.webp";
import { Button, Col, Row, Statistic, Card } from "antd";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import DashboardFooter from "./dashboard-footer";

const TemplateHome = () => {
  const formatter = (value: any) => <CountUp end={value} separator="," />;
  const items = [
    "Mentor Match - Streamline efforts. Highlight impact.",
    "ERG Management Software - Provide centralized hub for sign-ups",
    "Establish and execute seamless events",
    "Build connection across purpose and leadership styles",
    "Showcase ERG success with customizable reporting",
  ];
  return (
    <>
      <Row className="TemplateHome">
        <Col xs={24} sm={24} md={24} lg={24}>
          <section
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexGrow: "1",
            }}
          >
            <Row style={{ margin: "30px", padding: "30px", height: "100vh" }}>
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                  marginBottom: "50px",
                }}
              >
                <span>
                  <div>
                    <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
                      <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl font-bold"
                      >
                        <strong style={{ color: "#fff", fontSize: "45px" }}>
                          {" "}
                          Welcome to the Aspire Link
                        </strong>
                      </motion.h1>
                    </div>

                    <p style={{ fontSize: "26px", color: "#fff" }}>
                      Guiding Futures, Building Success!
                    </p>

                    <Button type="primary" className="DemoBtn">
                      Book Demo
                    </Button>
                  </div>
                </span>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <motion.h1
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="text-4xl font-bold"
                >
                  <img
                    src={lImage}
                    alt=""
                    style={{ width: "70%", height: "70%" }}
                  />
                </motion.h1>
              </Col>
            </Row>
          </section>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          style={{
            backgroundColor: "#551A8B",
            marginTop: "40px",
            padding: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{ color: "#fff", fontSize: "28px", fontFamily: "Roboto" }}
          >
            Delivering Impact Across the Globe
          </span>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Row gutter={16} className="mt-5">
              <Col style={{ background: "#fff" }}>
                <Card className="cardShadow m-2" style={{ borderRadius: "5%" }}>
                  <Statistic
                    title="Active Users"
                    value={112893}
                    formatter={formatter}
                  />
                </Card>
              </Col>
              <Col style={{ background: "#fff" }}>
                <Card className="cardShadow m-2" style={{ borderRadius: "5%" }}>
                  <Statistic
                    title="Active Mentee"
                    value={82193}
                    precision={2}
                    formatter={formatter}
                  />
                </Card>
              </Col>
              <Col style={{ background: "#fff" }}>
                <Card className="cardShadow m-2" style={{ borderRadius: "5%" }}>
                  <Statistic
                    title="Active Mentors"
                    value={21293}
                    precision={2}
                    formatter={formatter}
                  />
                </Card>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Col>
        <Row style={{padding: "30px" }}>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <span>
              <h3
                style={{
                  fontWeight: "700",
                  fontFamily: `"Poppins", sans-serif"`,
                }}
              >
                AspireLink – Connecting Mentors, Empowering Growth!
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  color: "#677294",
                  fontWeight: "400",
                }}
              >
                AspireLink is a smart and seamless mentor-matching platform
                designed to foster meaningful connections. With AI-driven
                matching, intuitive collaboration tools, and real-time
                engagement, we make mentorship quick, effective, and
                value-driven—empowering individuals to thrive! 🚀
              </p>
            </span>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <motion.div
                  className={`w-60 h-40 rounded-xl text-white flex items-center justify-center text-xl font-bold shadow-lg mx-2`}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  animate={{ opacity: 1, scale: 0.5, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 * 0.2 }}
                  whileHover={{ scale: 0.6 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={imgae2}
                    alt=""
                    style={{ width: "100%", height: "90%" }}
                  />
                </motion.div>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ padding: "30px", backgroundColor: "#551A8B" }}>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            {/* <img src={image3} alt="" style={{ width: "80%", height: "90%" }} /> */}
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <motion.div
                  className={`w-60 h-40 rounded-xl text-white flex items-center justify-center text-xl font-bold shadow-lg mx-2`}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  animate={{ opacity: 1, scale: 0.5, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 * 0.2 }}
                  whileHover={{ scale: 0.6 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image3}
                    alt=""
                    style={{ width: "100%", height: "90%" }}
                  />
                </motion.div>
              </div>
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <span>
              <h3
                style={{
                  fontWeight: "700",
                  fontFamily: `"Poppins", sans-serif"`,
                  color: "#fff",
                }}
              >
                AspireLink – Connecting Mentors, Empowering Growth!
              </h3>
              <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
                <div className="space-y-4">
                  {items.map((text, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }} // Start slightly below
                      animate={{ opacity: 1, y: 0 }} // Move up & fade in
                      transition={{ duration: 0.6, delay: index * 0.2 }} // Staggered animation
                      className="text-lg font-semibold bg-gray-800 p-4 rounded-lg shadow-lg"
                      style={{fontSize:"1.15rem"}}
                    >
                      {text}
                    </motion.div>
                  ))}
                </div>
              </div>
            </span>
          </Col>
        </Row>
      </Row>
      <DashboardFooter/>
    </>
  );
};

export default TemplateHome;
