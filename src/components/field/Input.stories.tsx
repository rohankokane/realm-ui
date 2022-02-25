import React from "react"
import { Story, Meta } from "@storybook/react"
import Field from "."
import Input from "./Input"

export default {
  title: "Example/Input",
  component: Input,
  subcomponents: { field: Field, label: Field.Label },
} as Meta

export const Default: Story = ({ placeholder }) => {
  return (
    <Field>
      <Field.Label>Input Label</Field.Label>
      <Field.Input placeholder={placeholder} />
    </Field>
  )
}

Default.args = {
  placeholder: "Placeholder content",
}
