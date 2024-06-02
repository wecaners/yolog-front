import { IconMenu } from '../icon';
import { gowunBatang } from './fonts';

function MainHeader() {
  return (
    <header className="mx-16pxr flex justify-between items-center h-65pxr">
      <div className="flex gap-28pxr">
        <button
          className={`${gowunBatang.className} text-17pxr font-bold opacity-[0.25]`}
        >
          여행 일기
        </button>
        <button
          className={`${gowunBatang.className} text-17pxr font-bold opacity-[0.25]`}
        >
          빠른 메모
        </button>
      </div>
      <button>
        <IconMenu />
      </button>
    </header>
  );
}

export default MainHeader;
