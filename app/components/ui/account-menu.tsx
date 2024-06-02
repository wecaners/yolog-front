import AccountMenuBarButton from './account-menu-bar-button';
import MenuBarButton from './menu-bar-button';

function AccountMenu() {
  return (
    <>
      <AccountMenuBarButton socialType="google" />
      <MenuBarButton title="로그아웃" />
      <MenuBarButton title="계정 탈퇴" />
    </>
  );
}

export default AccountMenu;
