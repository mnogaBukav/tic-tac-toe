import { Component } from "react";

class X extends Component {
	render() {
		return (
			<svg
        xmlns="http://www.w3.org/2000/svg"
        width="80%"
        height="80%"
        viewBox="0 0 10 10.5"
        stroke="#bbdb9b"
        strokeLinecap="round"
      >
        <g stroke="#abc4a1">
          <line x1="1" y1="1.5" x2="9" y2="9.5" />
          <line x1="9" y1="1.5" x2="1" y2="9.5" />
        </g>
        <line x1="1" y1="1" x2="9" y2="9" />
        <line x1="9" y1="1" x2="1" y2="9" />
      </svg>
		)
	}
}

export { X }
