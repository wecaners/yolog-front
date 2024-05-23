import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '@/app/components';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '기본 버튼',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '비활성화 버튼',
  },
};

export const Angled: Story = {
  args: {
    angled: true,
    children: '직각 버튼',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: '작은 사이즈 버튼',
  },
};
