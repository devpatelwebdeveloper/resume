import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { composeClassName } from "../../../utilities"

class Container extends PureComponent {
  static propTypes = {
    /** True if fluid, false if not. */
    fluid: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    /** Children are rendered into the container */
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  }

  static defaultProps = {
    fluid: false,
    className: "",
  }

  render() {
    const { children, className, fluid, style } = this.props
    const containerClassName = fluid ? "container-fluid" : "container"
    return (
      <div
        className={composeClassName([containerClassName, className])}
        style={style}
      >
        {children}
      </div>
    )
  }
}

export default Container
