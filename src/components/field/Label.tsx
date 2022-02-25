import React from "react"
import { useField } from "."
import { StyledLabel } from "./styles"

const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<"label">
>((props, ref) => {
  const id = useField()

  return <StyledLabel ref={ref} htmlFor={id} {...props} />
})
Label.displayName = "Field.Label"

export default Label
