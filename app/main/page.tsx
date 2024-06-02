import { FloatingButton, IconPlus, MainHeader } from '../components';
import MainDiaryList from '../components/ui/main-diary-list';

function MainPage() {
  return (
    <div className="relative h-full">
      <MainDiaryList />
      <div className="absolute bottom-38pxr left-1/2 -translate-x-1/2">
        <FloatingButton>
          <IconPlus />
        </FloatingButton>
      </div>
    </div>
  );
}

export default MainPage;
