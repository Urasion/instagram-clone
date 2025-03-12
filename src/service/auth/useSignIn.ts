import { signIn } from '@/auth';
import useToast from '@/hook/useToast';
import { ErrorType, SignIn } from '@/type';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export default function useSignIn() {
  const navigate = useRouter();
  const { toast } = useToast();
  const mutate = useMutation({
    mutationFn: async (form: SignIn) => {
      await signIn('credentials', {
        email: form.email || '',
        password: form.password || '',
      });
    },
    onSuccess: () => {
      navigate.push('/');
    },
    onError: (error: ErrorType) => {
      toast('warning', error.response.data);
    },
  });
  return mutate;
}
