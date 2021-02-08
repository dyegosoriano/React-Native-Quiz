import React, { ReactNode } from 'react'

import { Container, Header } from './styles'

interface ButtonProps {
  button?: ReactNode
}

const ApplicationBody: React.FC<ButtonProps> = ({ button, children }) => {
  return (
    <Container>
      <Header>{children}</Header>

      {button}
    </Container>
  )
}

export default ApplicationBody
