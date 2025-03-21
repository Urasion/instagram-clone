import { ErrorType, SignUp } from '@/type';
import { useMutation } from '@tanstack/react-query';
import { instance } from '../axios';
import { useRouter } from 'next/navigation';
import useToast from '@/hook/useToast';

export default function useSignUp() {
  const navigate = useRouter();
  const { toast } = useToast();
  const mutate = useMutation({
    mutationFn: async (form: SignUp) => {
      await instance.post('/user/sign-up', form);
    },
    onSuccess: () => {
      navigate.push('/sign-in');
    },
    onError: (error: ErrorType) => {
      toast('warning', error.response.data);
    },
  });
  return mutate;
}
