import React, { PureComponent } from "react"
import PropTypes from "prop-types"

import { composeClassName } from "../../../utilities"

class Col extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    /** The column sizing. Same as bootstrap but with different sizings.
     * xs is required, since it's mobile first. */
    xs: PropTypes.shape({
      span: PropTypes.number,
      offset: PropTypes.number,
    }).isRequired,
    sm: PropTypes.shape({
      span: PropTypes.number,
      offset: PropTypes.number,
    }),
    md: PropTypes.shape({
      span: PropTypes.number,
      offset: PropTypes.number,
    }),
    lg: PropTypes.shape({
      span: PropTypes.number,
      offset: PropTypes.number,
    }),
    xl: PropTypes.shape({
      span: PropTypes.number,
      offset: PropTypes.number,
    }),
    className: PropTypes.string,
  }

  render() {
    const { className, children, xs, sm, md, lg, xl } = this.props
    const cols = { xs, sm, md, lg, xl }

    const classes = []
    Object.keys(cols).forEach(col => {
      if (!cols[col]) return
      const { span, offset } = cols[col]
      /* eslint-disable */
      if (span) classes.push(`col-${col}-${span}`)
      if (offset || offset === 0) classes.push(`col-${col}-offset-${offset}`)
    })

    const composedClassName = composeClassName([className, ...classes])
    return <div className={composedClassName}>{children}</div>
  }
}

export default Col
