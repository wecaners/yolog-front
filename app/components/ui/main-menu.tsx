import { IconHeadPhone, IconPerson } from '../icon';
import MenuBarButton from './menu-bar-button';

function MainMenu() {
  return (
    <div>
      <MenuBarButton title="계정" icon={<IconPerson />} />
      <MenuBarButton title="고객센터" icon={<IconHeadPhone />} />
    </div>
  );
}

export default MainMenu;
