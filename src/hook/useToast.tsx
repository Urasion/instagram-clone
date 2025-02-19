import { toast as sonner } from 'sonner';
export default function useToast() {
  const toast = (
    type: 'success' | 'info' | 'warning' | 'error',
    title: string,
    description?: string,
    action?: { label: string; onClick: () => void },
    duration = 5000
  ) => {
    const toastId = sonner[type](title, {
      description,
      action,
    });
    setTimeout(() => {
      sonner.dismiss(toastId);
    }, duration);
  };

  return { toast };
}
