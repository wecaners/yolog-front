'use client';

import {
  FieldErrors,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from 'react-hook-form';

interface IInputProps {
  placeholder?: string;
  registerName: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  title: string;
  type?: 'text';
  rules?: RegisterOptions;
  validMessage: string;
  value: string;
  defaultMessage?: string;
}

function Input({
  placeholder,
  registerName,
  type = 'text',
  title,
  rules,
  validMessage,
  register,
  errors,
  value,
  defaultMessage,
}: IInputProps) {
  const titleStyle = `text-14pxr font-semibold text-gray mb-18pxr`;
  const inputStyle = `indent-[5px] w-356pxr border-0 border-b-[3px] focus:outline-none border-inputGray text-17pxr font-semibold text-[#626262] placeholder:font-normal`;
  const isValid = !errors[registerName];
  const valid = isValid && value?.length !== 0;

  const getTitleClassName = () => {
    if (valid) {
      return `${titleStyle} !text-[#3e5c16]`;
    } else if (!isValid) {
      return `${titleStyle} !text-[#ff0000]`;
    } else if (value?.length === 0) {
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
          className={`${inputStyle} ${getInputClassName()} bg-transparent`}
          type={type}
          id={registerName}
          placeholder={placeholder}
          {...register(registerName, rules)}
        />
      </div>
      {valid ? (
        <p className="text-13pxr leading-[18pxr] mt-9pxr text-inputGreen w-356pxr h-18pxr">
          {validMessage}
        </p>
      ) : (
        <pre
          className={`text-13pxr leading-[18pxr] mt-9pxr w-356pxr h-18pxr ${value.length === 0 ? 'text-gray' : `text-error`}`}
        >
          {value.length === 0
            ? defaultMessage
            : (errors[registerName]?.message as string)}
        </pre>
      )}
    </div>
  );
}

export default Input;
