import React from "react"
import { Story, Meta } from "@storybook/react"
import Field from "./Field"

export default {
  title: "Example/TextArea",
  component: Field,
  subcomponents: { textarea: Field.Textarea, label: Field.Label },
} as Meta

const Template: Story = (args) => (
  <Field>
    <Field.Label>Textarea Label</Field.Label>
    <Field.Textarea {...args} />
  </Field>
)

export const Default = Template.bind({})
Default.args = {
  placeholder: "Placeholder content",
  isResizable: true,
}
