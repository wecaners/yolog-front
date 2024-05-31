import { BottomSheet, SocialBottomSheet } from '@/app/components';
import useBottomSheet from '@/hooks/use-bottom-sheet';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'bottom-sheet',
  component: BottomSheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SocialSigninBottomSheet: Story = {
  args: {
    children: <SocialBottomSheet />,
    title: '기존 계정으로 로그인',
    isOpen: false,
  },
  render: (args) => {
    const { isSheetOpen, setIsSheetOpen, bottomSheetRef, handleOutsideClick } =
      useBottomSheet();

    return (
      <div style={{ position: 'relative' }}>
        <button onClick={() => setIsSheetOpen(!isSheetOpen)}>
          바텀시트 열기
        </button>
        <BottomSheet
          title={args.title}
          isOpen={isSheetOpen}
          bottomSheetRef={bottomSheetRef}
          onOutsideClick={handleOutsideClick}
          onClose={() => setIsSheetOpen(false)}
        >
          {args.children}
        </BottomSheet>
      </div>
    );
  },
};
