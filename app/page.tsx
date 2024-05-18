'use client';
import useToast from '@/hooks/use-toast';

export default function Home() {
  const showToast = useToast();

  return (
    <div>
      <button
        className="w-200pxr h-120pxr bg-primary300"
        onClick={() =>
          showToast({
            message: '성공적으로 토스트가 생성됐습니다!',
            type: 'success',
          })
        }
      >
        토스트 테스트 버튼
      </button>
    </div>
  );
}
