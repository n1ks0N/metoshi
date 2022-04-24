import React from 'react';

import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Main = Template.bind({})
Main.args = {
  text: '30.000 $METO',
  popup: false,
}
