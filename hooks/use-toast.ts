import { addToast, removeToast } from '@/app/lib/redux/toast-slice';
import { useDispatch } from 'react-redux';

interface IUseToastProps {
  message: string;
  type: 'default' | 'error' | 'success';
}

const TOAST_AVAILABLE_TIME = 2000;

function useToast() {
  const dispatch = useDispatch();

  const showToast = ({ message, type }: IUseToastProps) => {
    const id = Date.now();
    const newToast = { id, message, type };
    dispatch(addToast(newToast));

    setTimeout(() => {
      dispatch(removeToast(id));
    }, TOAST_AVAILABLE_TIME);
  };

  return showToast;
}

export default useToast;
