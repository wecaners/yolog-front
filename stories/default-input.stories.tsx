import { Input } from '@/app/components';
import { PROFILE_NAME_VALIDATION } from '@/app/lib/constants/validation';
import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof Input> = {
  title: 'Input/default-input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{ width: '465px', display: 'flex', justifyContent: 'center' }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    placeholder: {
      control: 'text',
      description: '프로필 이름을 입력해주세요.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ProfileInput: Story = {
  args: {
    type: 'text',
    title: '프로필 이름',
    validMessage: '사용할 수 있는 이름이에요.',
    placeholder: '프로필 이름을 입력해주세요.',
    registerName: 'profileName',
    rules: PROFILE_NAME_VALIDATION,
    defaultMessage: `4~12자 이내로 입력해주세요.
이름은 14일에 한 번 변경할 수 있어요.`,
  },
  render: (args) => {
    const {
      register,
      watch,
      formState: { errors },
    } = useForm();
    const profileName = watch(args.registerName, '');

    return (
      <Input
        {...args}
        register={register}
        errors={errors}
        value={profileName}
      />
    );
  },
};
