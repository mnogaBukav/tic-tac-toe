import { Component } from "react";
import styles from './Button.module.css'

class Button extends Component {

  render() {
    const { onClick, children } = this.props;
       
    return (
      <button className={styles.button} onClick={onClick}>
        {children}
      </button>
    ) 
  }
}

export { Button }
