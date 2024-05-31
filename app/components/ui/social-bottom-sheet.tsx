import { SOCIAL_BUTTONS } from '@/app/lib/constants/social-buttons';
import { SocialButton } from '../../components';
function SocialBottomSheet() {
  return (
    <div className="flex flex-col gap-16pxr items-center mt-37pxr mx-16pxr">
      {SOCIAL_BUTTONS.map((button) => (
        <SocialButton
          key={button.id}
          type={button.type}
          onClick={button.onClick}
        />
      ))}
    </div>
  );
}

export default SocialBottomSheet;
