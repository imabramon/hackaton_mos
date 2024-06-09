import React, { useRef } from 'react'
import styled from 'styled-components'
import CommandPalette from './CommandPalette'
import useInput from './useInput'

const MessageInputHeight = '50px'

const Input = styled.input`
  width: 100%;
  height: ${MessageInputHeight};
`

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`

const Button = styled.button`
  border: 0;
  padding: 0;
  height: ${MessageInputHeight};
  width: ${MessageInputHeight};
  border-radius: 50%;
`

const MessageInput = ({
  dispatchMessage,
  dispatchCommand: dispatchCommand,
  commands,
  disabledInput,
}) => {
  const [input, onChange, clearInput] = useInput('')

  const sendMessage = () => {
    dispatchMessage(input)
    clearInput()
  }

  return (
    <Container>
      <CommandPalette
        dispatchCommand={dispatchCommand}
        commands={commands}
        dispatchMessage={dispatchMessage}
      />
      <Input
        value={input}
        onChange={onChange}
        onKeyDown={(e) => (e.key === 'Enter' ? sendMessage() : null)}
      />
      <Button onClick={sendMessage}> {'->'}</Button>
    </Container>
  )
}

export default MessageInput
