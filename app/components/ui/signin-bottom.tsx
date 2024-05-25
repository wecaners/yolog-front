import { gowunBatang } from './fonts';

interface Props {
  className?: string;
}

function SigninBottom({ className }: Props) {
  return (
    <p
      className={`text-[#646464] ${gowunBatang.className} text-14pxr font-normal leading-[20px] underline ${className}`}
    >
      기존 계정으로 <span className="text-primary400">로그인</span>
    </p>
  );
}

export default SigninBottom;
