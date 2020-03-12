import React from "react"
import { Paragraph, Container, Col, Heading } from "../Components/atoms"

export default () => (
  <Container className="Container-Class">
    <Col xs={{ span: 12 }} md={{ span: 6 }}>
      <Heading size="XL">Heading XL</Heading>
      <Heading size="L">Heading L</Heading>
      <Heading size="M">Heading M</Heading>
      <Heading size="S">Heading S</Heading>
      <Heading size="XS">Heading XS</Heading>
    </Col>
    <Col xs={{ span: 12 }} md={{ span: 6 }}>
      <Paragraph centered>test</Paragraph>
    </Col>
  </Container>
)
