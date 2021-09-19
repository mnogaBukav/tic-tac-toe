import { Component } from 'react';
import { Button } from '../Button/Button'
import styles from './Header.module.css'

class Header extends Component {

  render() {
    const { whatToWrite, whoWon, isModalOpen, togglePopup } = this.props;

    return (
      <div className={styles.header}>
        {!whoWon && (
          <span className={styles.text}>{whatToWrite}, your move:</span>
        )}

        {whoWon && !isModalOpen && (
          <Button onClick={togglePopup}>New game</Button>
        )}
      </div>
    )
      
  }
}

export { Header }
