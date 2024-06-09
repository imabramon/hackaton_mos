import styled, { css } from 'styled-components'

const Right = css`
  margin-left: auto;
`

const Left = css`
  margin-right: auto;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  min-width: 100px;
  width: fit-content;
  padding: 10px;
  border-radius: 10px;

  ${({ position }) => (position === 'left' ? Left : Right)}
`

const Title = styled.span`
  font-size: 16px;
  font-weight: bold;
`

const Text = styled.p`
  font-size: 18px;
`

const MessageBox = ({ text, title, position }) => {
  return (
    <Container position={position}>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  )
}

export default MessageBox
