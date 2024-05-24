interface Props {
  children: string | JSX.Element | (string | JSX.Element)[];
  onClick?: () => void;
}

function FloatingButton({ children, onClick }: Props) {
  return (
    <button
      className="flex items-center justify-center w-61pxr h-61pxr bg-primary400 rounded-full shadow-floatingButton"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default FloatingButton;
