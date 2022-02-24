import React from "react"
import { StyledButton } from "./styles"
import PropTypes from "prop-types"

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  /**
   * What's variant of the button?
   */
  variant?: "primary" | "secondary" | "danger"
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large"
  /**
   * Button should take the full width of the container?
   */
  isFullWidth?: boolean
}

/**
 * Button UI component for user interaction
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "secondary",
      size = "medium",
      isFullWidth = false,
      ...props
    },
    ref,
  ) => {
    return (
      <StyledButton
        type="button"
        variant={variant}
        size={size}
        isFullWidth={isFullWidth}
        ref={ref}
        {...props}
      >
        {children}
      </StyledButton>
    )
  },
)

Button.displayName = "Button"
Button.propTypes = {
  variant: PropTypes.oneOf(["secondary", "primary", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  isFullWidth: PropTypes.bool,
}

export default Button
