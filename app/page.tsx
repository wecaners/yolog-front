import Input from './components/input';
import { PROFILE_NAME_VALIDATION } from './lib/constants/validation';

export default function Home() {
  return (
    <div className="flex justify-center items-center w-500pxr h-500pxr bg-white">
      <Input
        placeholder="프로필 이름을 입력해주세요."
        registerName="profileName"
        title="프로필 이름"
        type="text"
        rules={PROFILE_NAME_VALIDATION}
        validMessage="사용할 수 있는 이름이에요."
      />
    </div>
  );
}
