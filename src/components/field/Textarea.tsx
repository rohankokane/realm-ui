import React, { useContext } from "react"
import PropTypes from "prop-types"

import { FieldContext } from "./FieldContext"
import { StyledTextarea } from "./styles"

export interface TextareaProps
  extends React.ComponentPropsWithoutRef<"textarea"> {
  isResizable?: boolean
}

/**
 * Textarea for user inputs
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ isResizable, ...props }, ref) => {
    const id = useContext(FieldContext)

    return (
      <StyledTextarea isResizable={isResizable} ref={ref} id={id} {...props} />
    )
  },
)

Textarea.displayName = "Field.Textarea"
Textarea.defaultProps = {
  isResizable: true,
}
Textarea.propTypes = {
  isResizable: PropTypes.bool,
}

export default Textarea
