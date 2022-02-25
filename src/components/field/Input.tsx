import React from "react"
import { useField } from "."
import { StyledInput } from "./styles"

/**
 * Input for user inputs
 */
const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>((props, ref) => {
  const id = useField()

  return <StyledInput ref={ref} id={id} {...props} />
})
Input.displayName = "Field.Input"

export default Input
