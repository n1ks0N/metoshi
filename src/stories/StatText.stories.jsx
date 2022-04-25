import React from "react";

import { StatText } from "./StatText";

export default {
  title: 'Components/Text',
  component: StatText
}

const Template = (args) => <StatText {...args} />

export const StatItem = Template.bind({})
StatItem.args = {
  type: 'unique'
}