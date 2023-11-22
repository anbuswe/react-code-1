import {Component} from 'react'
import styled from 'styled-components'

export default class Editable extends Component {
  state = {text: '', isEditable: 'true'}

  changeInput = event => {
    this.setState({text: event.target.value})
  }

  onClickInput = () => {
    this.setState(prevState => ({
      isEditable: !prevState.isEditable,
    }))
  }

  render() {
    const {text, isEditable} = this.state

    return (
      <MainContainer>
        <SubContainer>
          <Heading>Editable Text Input</Heading>
          <BlockLine>
            {isEditable ? (
              <SearchInput
                type="text"
                value={text}
                onChange={this.changeInput}
              />
            ) : (
              <Paragraph>{text}</Paragraph>
            )}
            {isEditable ? (
              <Button onClick={this.onClickInput}>Save</Button>
            ) : (
              <Button onClick={this.onClickInput}>Edit</Button>
            )}
          </BlockLine>
        </SubContainer>
      </MainContainer>
    )
  }
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
  height: 100vh;
`
const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  height: 200px;
  width: 400px;
  border-radius: 4px;
`
const Heading = styled.div`
  font-size: 20px;
  font-family: 'roboto';
`
const BlockLine = styled.div`
  align-items: center;
  display: flex;
  margin-top: 15px;
`
const SearchInput = styled.input`
  width: 250px;
  height: 30px;
  background-color: transparent;
  border: 1px solid #cbd2d9;
  padding: 4px 10px 4px 10px;
  color: #323f4b;
`
const Paragraph = styled.p`
  color: #323f4b;
  font-size: 15px;
`
const Button = styled.button`
  background-color: #d946ef;
  color: #fff;
  outline: none;
  border: none;
  padding: 4px 10px;
  width: 50px;
  height: 30px;
  margin-left: 10px;
`
