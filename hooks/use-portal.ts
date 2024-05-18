import { useEffect, useRef } from 'react';

function usePortal(id: string) {
  const rootElementRef = useRef<HTMLElement | null>(null);

  // useEffect로 렌더링 되면 id값을 가진 rootdiv가 있는지 없는지 확인
  // 없으면 생성해주기
  // 더이상 사용하지 않으면 (그 루트 디브 안에 내용이 없으면) 삭제해주기

  useEffect(() => {
    let parentElement = document.querySelector(`#${id}`) as HTMLElement | null;

    if (!parentElement) {
      parentElement = document.createElement('div');
      parentElement.setAttribute('id', id);
      document.body.appendChild(parentElement);
    }

    rootElementRef.current = parentElement; // 여기 잘 이해가 안된다.

    return () => {
      if (parentElement && !parentElement.childElementCount) {
        parentElement.remove();
      }
    };
  }, [id]);

  return rootElementRef.current;
}

export default usePortal;
