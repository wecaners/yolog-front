import { gowunBatang } from './fonts';

interface Props {
  children: React.ReactNode;
  className?: string;
}

function SignupGowunTitle({ children, className }: Props) {
  return (
    <p
      className={`text-center ${gowunBatang.className} text-22pxr leading-[35px] tracking-[0.22px] ${className}`}
    >
      {children}
    </p>
  );
}

export default SignupGowunTitle;
