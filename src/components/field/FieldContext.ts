import { createContext, useContext } from "react"

export const FieldContext = createContext<string | undefined>(undefined)

export const useField = () => {
  const id = useContext(FieldContext)
  if (id === undefined) {
    throw new Error(`Must be used within a Field component`)
  }
  return id
}
