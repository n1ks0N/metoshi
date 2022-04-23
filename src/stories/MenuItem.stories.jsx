import React from "react";

import { MenuItem } from "./MenuItem";

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
  argTypes: {}
}

const Template = (args) => <MenuItem {...args} />

export const Standard = Template.bind({});
Standard.args = {
  size: 'standard',
  text: 'Standard'
}