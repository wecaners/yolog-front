import { IconNavigateRight } from '../icon';

interface Props {
  icon: React.ReactNode;
  title: string;
}

function MenuBarButton({ icon, title }: Props) {
  return (
    <button className="flex justify-between items-center w-full border-b border-[#EAEAEA] py-25pxr">
      <div className="flex gap-27pxr items-center ml-26pxr">
        {icon}
        <span className="text-16pxr font-semibold">{title}</span>
      </div>
      <IconNavigateRight />
    </button>
  );
}

export default MenuBarButton;
