import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => (
    <Button>
      <Button.Text>Click me</Button.Text>
    </Button>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Button>
      <Button.Icon>
        <span style={{ fontSize: 20 }}>🚀</span>
      </Button.Icon>
      <Button.Text>Launch</Button.Text>
    </Button>
  ),
};

export const Small: Story = {
  render: () => (
    <Button size='$sm'>
      <Button.Text>Small Button</Button.Text>
    </Button>
  ),
};

export const Large: Story = {
  render: () => (
    <Button size='$lg'>
      <Button.Text>Large Button</Button.Text>
    </Button>
  ),
};
