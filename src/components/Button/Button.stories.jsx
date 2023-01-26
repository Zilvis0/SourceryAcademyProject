import React from 'react';

import { Button } from './Button';
import { ArrowDown } from '../Icons';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Icon = Template.bind({});
Icon.args = {
  children: <ArrowDown />,
  icon: true,
};
