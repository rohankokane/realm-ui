import React from "react"
import { useField } from "./FieldContext"
import { StyledInput } from "./styles"

/**
 * Input component for user inputs
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
