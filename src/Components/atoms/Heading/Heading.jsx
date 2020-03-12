import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { composeClassName } from "../../../utilities"
import "./Heading.scss"

class Heading extends PureComponent {
  static propTypes = {
    /** CSS class to be added along with default classes */
    className: PropTypes.string,
    /** The selection for the size of the heading */
    size: PropTypes.oneOf(["XL", "L", "M", "S", "XS"]).isRequired,
    /** If true, the heading is centered; otherwise it is left-aligned */
    centered: PropTypes.bool,
    /** If true, an underline appears below the heading */
    underlined: PropTypes.bool,
    /** The RGB color of the underline if it exists */
    underlineColor: PropTypes.string,
    /** Color of the text, defaults to brand navy. */
    whiteText: PropTypes.bool,
  }

  static defaultProps = {
    className: "",
    centered: false,
    underlined: false,
    underlineColor: "#1d2530",
    whiteText: false,
  }

  render() {
    const {
      size,
      centered,
      underlined,
      underlineColor,
      children,
      className,
      whiteText,
    } = this.props

    let headingBody = null
    switch (size) {
      case "XL":
        headingBody = <h1 className="XL">{children}</h1>
        break
      case "L":
        headingBody = <h2 className="L">{children}</h2>
        break
      case "M":
        headingBody = <h3 className="M">{children}</h3>
        break
      case "S":
        headingBody = <h4 className="S">{children}</h4>
        break
      case "XS":
        headingBody = <h5 className="XS">{children}</h5>
        break
      default:
        headingBody = null
    }
    const underline = underlined ? (
      <div style={{ backgroundColor: underlineColor }} />
    ) : null

    const classNameList = [className, "Heading"]
    if (centered) {
      classNameList.push("Centered")
    }
    if (underlined) {
      classNameList.push("Underlined")
    }

    if (whiteText) classNameList.push("whiteText")

    const composedClassName = composeClassName(classNameList)
    return (
      <div className={composedClassName}>
        {headingBody}
        {underline}
      </div>
    )
  }
}

export default Heading
