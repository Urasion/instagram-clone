import { SignUp } from '@/type';
import { useMutation } from '@tanstack/react-query';
import { instance } from '../axios';

export default function useSignUp() {
  const mutate = useMutation({
    mutationFn: async (form: SignUp) => {
      const { data } = await instance.post('/user/sign-up', form);
      console.log(data);
    },
  });
  return mutate;
}
