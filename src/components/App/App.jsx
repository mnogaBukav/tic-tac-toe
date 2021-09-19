import { Component } from 'react'
import { createPortal } from 'react-dom'
import { Cell } from '../Cell/Cell'
import { Modal } from '../Modal/Modal'
import { Header } from '../Header/Header'
import styles from './App.module.css'

const INITIAL_FIELD = Array(9).fill(undefined)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      field: INITIAL_FIELD,
      whatToWrite: 'x',
      whoWon: null,
      isModalOpen: false,
      winCombination: null
    }
    // this.closePopup = this.closePopup.bind(this)
  }

  updateField = cellIndex => {
    const newState = [...this.state.field]
    
    newState[cellIndex] = this.state.whatToWrite
    this.setState({ field: newState })

    if (this.state.whatToWrite === 'x') {
      this.setState({ whatToWrite: 'o' })
    } else {
      this.setState({ whatToWrite: 'x' })
    }
  }

  checkWinner = (index1, index2, index3) => {
    const cell1 = this.state.field[index1];
    const cell2 = this.state.field[index2];
    const cell3 = this.state.field[index3];
    if(cell1 && cell1===cell2 && cell2===cell3) {
      this.setState({winCombination: [index1, index2, index3]})
      return true;
    } 
    return false;
  }

  componentDidUpdate() {
    if (!this.state.whoWon) {
      if (
        this.checkWinner(0, 1, 2) ||
        this.checkWinner(3, 4, 5) ||
        this.checkWinner(6, 7, 8) ||
        this.checkWinner(0, 3, 6) ||
        this.checkWinner(1, 4, 7) ||
        this.checkWinner(2, 5, 8) ||
        this.checkWinner(0, 4, 8) ||
        this.checkWinner(2, 4, 6)
      ) {
        this.setState({
          whoWon: this.state.whatToWrite==='x' ? 'o' : 'x',
          isModalOpen: true
        })
      }
    }
  }

  startNewGame = () => {
    this.setState({ 
      field: INITIAL_FIELD,
      whoWon: null,
      isModalOpen: false,
      winCombination: null
    })
  }

  // closePopup() {
  //   this.setState({isModalOpen: false})
  // }

  // openPopup = () => {
  //   this.setState({isModalOpen: true})
  // }

  togglePopup = () => {
    this.setState(prevState => ({
      ...prevState,
      isModalOpen: !prevState.isModalOpen
    }))
  }

  render() {
    const { field, whatToWrite, whoWon, isModalOpen, winCombination } = this.state;

    return (
      <div className={styles.app}>
        <Header
          whatToWrite={whatToWrite}
          whoWon={whoWon}
          isModalOpen={isModalOpen}
          togglePopup={this.togglePopup}
        />

        <div className={styles.field}>
          {field.map((cellContent, cellIndex) => (
            <Cell
              key={cellIndex}
              whoWon={whoWon}
              updateField={this.updateField}
              cellContent={cellContent}
              cellIndex={cellIndex}
              winCombination={winCombination}
            />
          ))}
        </div>

        {isModalOpen && createPortal(
          <Modal 
            startNewGame={this.startNewGame} 
            whoWon={whoWon}
            closePopup={this.togglePopup}
          />,
          document.getElementById('root')
        )}
      </div>
    )
  }
}

export { App }
