import React from "react";

import { Link } from "./Link";

export default {
  title: 'Components/Link',
  component: Link,
}

const Template = (args) => <Link {...args} />

export const MenuItem = Template.bind({});
MenuItem.args = {
  size: 'standard',
  text: 'MenuItem',
  background: '#000'
}