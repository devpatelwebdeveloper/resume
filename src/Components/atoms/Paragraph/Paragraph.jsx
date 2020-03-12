import React from "react"
import PropTypes from "prop-types"
import { composeClassName } from "../../../utilities"
import "./Paragraph.scss"

export default class Paragraph extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    centered: PropTypes.bool.isRequired,
  }
  static defaultProps = {
    children: "",
    centered: false,
  }
  render() {
    const { children, centered } = this.props
    const centerText = centered ? "text-center" : ""
    const composedClassName = composeClassName(["Paragraph", centerText])

    return <p className={composedClassName}>{children}</p>
  }
}
