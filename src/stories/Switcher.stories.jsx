import React from "react";

import { Switcher } from "./Switcher";

export default {
  title: 'Components/Link',
  component: Switcher,
}

const Template = (args) => <Switcher {...args} />

export const SwitcherItem = Template.bind({});
SwitcherItem.args = {
  text: 'Switcher',
  selected: true
}