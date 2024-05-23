'use-client';

import { ChangeEventHandler } from 'react';

interface Props {
  size?: number;
  name?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

function Checkbox({ size = 18, name, checked, onChange }: Props) {
  const defaultStyles = 'bg-[rgba(0, 0, 0, 0)] border-black';
  const checkedStyles = 'bg-primary500 border-primary500 bg-check-icon';

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(!checked);
  };

  return (
    <input
      type="checkbox"
      className={`${checked ? checkedStyles : defaultStyles} appearance-none border border-solid rounded-[5px] transition-colors duration-100`}
      name={name}
      checked={checked}
      style={{
        width: size,
        height: size,
      }}
      onChange={handleChange}
    />
  );
}

export default Checkbox;
