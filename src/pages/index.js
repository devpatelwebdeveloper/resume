import React from "react"
import { Paragraph, Container, Col } from "../Components/atoms"

export default () => (
  <Container className="Container-Class">
    <Col xs={{ span: 12 }} md={{ span: 4 }}>
      <Paragraph centered>test</Paragraph>
    </Col>
    <Col xs={{ span: 12 }} md={{ span: 4 }}>
      <Paragraph centered>test</Paragraph>
    </Col>
    <Col xs={{ span: 12 }} md={{ span: 4 }}>
      <Paragraph centered>test</Paragraph>
    </Col>
  </Container>
)
