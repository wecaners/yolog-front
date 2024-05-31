import Link from 'next/link';
import { SigninBottom, SocialButton } from '../components';
import { gowunBatang } from '../components/ui/fonts';
import { SOCIAL_BUTTONS } from '../lib/constants/social-buttons';

function SignPage() {
  return (
    <div className="bg-gradient-to-b from-[#8DAC67] to-[#F8F7EE] h-full">
      <div className="h-54pxr bg-transparent" />
      <div className="flex flex-col">
        <div className="flex flex-col gap-16pxr ml-35pxr mt-47pxr mb-205pxr">
          <p
            className={`drop-shadow-textShadow ${gowunBatang.className} text-28pxr leading-[47px] tracking-[0.28px] text-white`}
          >
            여행의 모든 감동을
            <br />
            나만의 이야기로
            <br />
            기록해보세요.
          </p>
          <p
            className={`text-white ${gowunBatang.className} text-18pxr font-normal`}
          >
            3초면 회원가입이 가능해요!
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-16pxr items-center mx-16pxr">
            {SOCIAL_BUTTONS.map((button) => (
              <Link href="/signup/terms" key={button.id} className="w-full">
                <SocialButton type={button.type} />
              </Link>
            ))}
          </div>
        </div>
        <SigninBottom className="mt-22pxr mb-12pxr flex items-center justify-center" />
        <div className="h-21pxr" />
      </div>
    </div>
  );
}

export default SignPage;
