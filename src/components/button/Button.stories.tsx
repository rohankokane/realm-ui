import React from "react"

import { Story, Meta } from "@storybook/react/types-6-0"
import Button from "./Button"

export default {
  title: "Example/Button",
  component: Button,
} as Meta

const Template: Story = (args) => <Button {...args}>my btn</Button>

export const Default = Template.bind({})

Default.args = {
  disabled: false,
}
