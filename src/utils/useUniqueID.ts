import { customAlphabet } from "nanoid"
import { useState } from "react"

const nanoid = customAlphabet("1234567890abcdef", 8)

export const useUniqueID = () => {
  const [id] = useState(nanoid())
  return id
}
