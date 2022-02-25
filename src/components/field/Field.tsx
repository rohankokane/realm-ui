import React, { useContext } from "react"
import { useUniqueID } from "../../utils/useUniqueID"
import { FieldContext } from "./FieldContext"
import Input from "./Input"
import Label from "./Label"
import Textarea from "./Textarea"

export const useField = () => {
  const id = useContext(FieldContext)
  if (id === undefined) {
    throw new Error(`Must be used within a Field component`)
  }
  return id
}

interface FieldComposition {
  Label: typeof Label
  Input: typeof Input
  Textarea: typeof Textarea
}

/**
 * Field component for user inputs with accessible label
 */
const Field: React.FC & FieldComposition = ({ children }) => {
  const id = useUniqueID()

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>
}
Field.displayName = "Field"

Field.Label = Label
Field.Input = Input
Field.Textarea = Textarea

export default Field
