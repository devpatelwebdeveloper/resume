import React from "react"
import PropTypes from "prop-types"
import { composeClassName } from "../../../utilities"
import "./Paragraph.scss"

export default class Paragraph extends React.Component {
  static propTypes = {
    size: PropTypes.oneOf(["L", "M", "S", "XS"]),
    /** Color of the text, defaults to brand navy. */
    whiteText: PropTypes.bool,
    centered: PropTypes.bool,
  }
  static defaultProps = {
    size: "S",
    whiteText: false,
    centered: false,
  }
  render() {
    const { size, children, className, whiteText, centered } = this.props
    const composedClassName = composeClassName([
      `BodyText ${size}`,
      className,
      whiteText ? "whiteText" : "",
      centered ? "Centered" : "",
    ])

    return <p className={composedClassName}>{children}</p>
  }
}
