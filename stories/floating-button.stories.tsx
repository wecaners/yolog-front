import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { FloatingButton, IconPlus } from '@/app/components';

const meta = {
  title: 'UI/FloatingButton',
  component: FloatingButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <IconPlus />,
  },
};
