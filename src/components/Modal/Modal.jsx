import { Component } from 'react'
import { Button } from '../Button/Button'
import styles from './Modal.module.css'

class Modal extends Component {
    stopPropagation = event => event.stopPropagation()

    render() {
        const { closePopup, whoWon, startNewGame } = this.props;

        return (
            <div className={styles.popup_wrapper} onClick={closePopup}>
                <div className={styles.popup} onClick={this.stopPropagation}>
                    <span className={styles.text}>{whoWon} is winner!</span>
                    
                    <span className={styles.text}>Start new game?</span>

                    <div className={styles.actions}>
                        <Button onClick={startNewGame}>Yes</Button>
                        <Button onClick={closePopup}>No</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export { Modal }
