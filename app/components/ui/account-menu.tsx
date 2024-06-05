import AccountMenuBarButton from './account-menu-bar-button';
import MenuBarButton from './menu-bar-button';

interface Props {
  onClick: () => void;
}

function AccountMenu({ onClick }: Props) {
  return (
    <>
      <AccountMenuBarButton socialType="google" onClick={onClick} />
      <MenuBarButton title="로그아웃" />
      <MenuBarButton title="계정 탈퇴" />
    </>
  );
}

export default AccountMenu;
