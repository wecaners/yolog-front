'use client';

import { Button, Input } from './index';
import { PROFILE_NAME_VALIDATION } from '../lib/constants/validation';
import { useForm } from 'react-hook-form';

function SignupProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({ mode: 'onChange' });

  const onSubmit = () => {
    console.log('submitted');
  };

  const profileName = watch('profileName', '');

  return (
    <form
      className="flex flex-col mx-17pxr justify-between h-full"
      onSubmit={handleSubmit(() => onsubmit)}
    >
      <Input
        title="프로필 이름"
        registerName="profileName"
        placeholder="프로필 이름을 입력해주세요."
        validMessage="사용할 수 있는 이름이에요."
        rules={PROFILE_NAME_VALIDATION}
        register={register}
        errors={errors}
        value={profileName}
        defaultMessage={`4~12자 이내로 입력해주세요.
이름은 14일에 한 번 변경할 수 있어요.`}
      />
      <Button disabled={!isValid}>가입 완료</Button>
    </form>
  );
}

export default SignupProfileForm;
