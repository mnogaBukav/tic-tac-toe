import { Component } from 'react'
import styles from './Cell.module.css'
import { X } from './X'
import { O } from './O'

class Cell extends Component {
    handleClick = () => {
        const { cellContent, whoWon, cellIndex, updateField } = this.props

        if (cellContent === undefined && !whoWon) {
            updateField(cellIndex)
        }
    }

    render() {
        const { cellContent, winCombination, cellIndex } = this.props;
        const isWinCell = winCombination?.includes(cellIndex) && styles.win_cell;
        const isCellWithContent = cellContent ? styles.cell_with_content : styles.cell;
        const cellStyle = `${isWinCell} ${isCellWithContent}`

        return (
            <div
                className={cellStyle}
                onClick={this.handleClick}
            >
                {cellContent === 'x' && <X />}
                {cellContent === 'o' && <O />}
            </div>
        )
    }
}

export { Cell }
