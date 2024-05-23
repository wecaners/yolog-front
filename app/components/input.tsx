'use client';

import { RegisterOptions, useForm } from 'react-hook-form';

interface IInputProps {
  placeholder?: string;
  registerName: string;
  title: string;
  type: 'text';
  rules: RegisterOptions;
  validMessage: string;
}

function Input({
  placeholder,
  registerName,
  type,
  title,
  rules,
  validMessage,
}: IInputProps) {
  const {
    watch,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const titleStyle = `text-14pxr font-semibold text-gray mb-18pxr`;
  const inputStyle = `indent-[5px] w-356pxr border-0 border-b-[3px] focus:outline-none border-inputGray text-17pxr font-semibold text-[#626262] placeholder:font-normal`;
  const watchInput = watch(registerName, false);
  const valid = isValid && watchInput?.length !== 0;

  const getTitleClassName = () => {
    if (valid) {
      return `${titleStyle} !text-[#3e5c16]`;
    } else if (!isValid) {
      return `${titleStyle} !text-[#ff0000]`;
    } else if (watchInput?.length === 0) {
      return titleStyle;
    }
  };

  const getInputClassName = () => {
    if (valid) {
      return `${inputStyle} !border-[#3E5C16]`;
    } else if (!isValid) {
      return `${inputStyle} !border-[#ff0000]`;
    } else {
      return inputStyle;
    }
  };

  return (
    <div>
      <p className={getTitleClassName()}>{title}</p>
      <label htmlFor={registerName}></label>
      <div className="flex">
        <input
          autoComplete="off"
          className={`${inputStyle} ${getInputClassName()}`}
          type={type}
          id={registerName}
          placeholder={placeholder}
          {...register(registerName, rules)}
        />
      </div>
      {registerName === 'profileName' && valid ? (
        <p className="text-13pxr leading-[18pxr] mt-9pxr text-inputGreen w-356pxr h-18pxr">
          {validMessage}
        </p>
      ) : (
        <p className="text-13pxr leading-[18pxr] mt-9pxr text-error w-356pxr h-18pxr">
          {errors[registerName]?.message as string}
        </p>
      )}
    </div>
  );
}

export default Input;
