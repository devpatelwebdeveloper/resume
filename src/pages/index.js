import React from "react"
import { Paragraph, Container, Col } from "../Components/atoms"

export default () => (
  <Container className="Container-Class">
    <Col xs={{ span: 12 }} md={{ span: 4 }}>
      <Paragraph centered>
        Growing your skills takes dedication, but it also takes time and
        flexibility. Whether you’re an individual or scheduling training for
        your organization, we understand the challenges of fitting coursework
        into a busy schedule, so we offer three convenient delivery options — in
        class , live, online courses , or private team training.
      </Paragraph>
    </Col>
    <Col xs={{ span: 12 }} md={{ span: 4 }}>
      <Paragraph centered>test</Paragraph>
    </Col>
    <Col xs={{ span: 12 }} md={{ span: 4 }}>
      <Paragraph centered>test</Paragraph>
    </Col>
  </Container>
)
