import { socialButtons } from '@/app/lib/constants/social-buttons';
import { SocialButton } from '../../components';
function SocialBottomSheet() {
  return (
    <div className="flex flex-col gap-16pxr items-center mt-37pxr mx-16pxr">
      {socialButtons.map((button) => (
        <SocialButton key={button.id} type={button.type} />
      ))}
    </div>
  );
}

export default SocialBottomSheet;
