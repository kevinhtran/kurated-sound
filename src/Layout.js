import React from 'react'
import Container from 'react-bootstrap/Container';

const Layout = (props) => {
  return (
    <Container>
      {/* Anything we render with props.children should land in the middle of the container */}
      {props.children}
    </Container>
  )
}

export default Layout;