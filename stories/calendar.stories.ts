import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '@/app/components';
import { fn } from '@storybook/test';

const meta = {
  title: 'Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startDate: '2001-09-17',
  },
};
