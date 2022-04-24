import React from "react";

import { Title } from "./Title";

export default {
  title: 'Components/Text',
  component: Title,
}

const Template = (args) => <Title {...args} />

export const h2 = Template.bind({});
h2.args = {
  size: 96,
  text: 'Headline 2'
}