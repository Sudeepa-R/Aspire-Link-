import "./Template.scss";
import lImage from "../assets/hero_homepage.webp";
import { Button, Col, Row } from "antd";

const TemplateHome = () => {
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
            <Row style={{ width: "100%" }}>
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={12}
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ marginLeft: "120px" }}>
                  <strong style={{ color: "#fff", fontSize: "45px" }}>
                    {" "}
                    Welcome to the Aspire Link
                  </strong>
                  <p style={{ fontSize: "26px", color: "#fff" }}>
                    Guiding Futures, Building Success!
                  </p>
                  <Button type="primary" className="DemoBtn">Book Demo</Button>
                </div>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={12}
                style={{
                  width: "50%",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "70%" }} src={lImage} alt="Image" />
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </>
  );
};

export default TemplateHome;
