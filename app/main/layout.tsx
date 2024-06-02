import { MainHeader } from '../components';

function MainPageLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="bg-mainPageBackground w-full">{children}</div>;
}

export default MainPageLayout;
