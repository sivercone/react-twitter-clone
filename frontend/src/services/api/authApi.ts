// import axios from 'axios';
import { LoginFormProps } from '../../pages/sign/Login';
import { axios } from '../../core/axios';
import { RegisterFormProps } from '../../pages/sign/SignUp';

interface ResponseAPI {
   status: string;
   data: any;
}

export const AuthApi = {
   async signIn(postData: LoginFormProps): Promise<ResponseAPI> {
      const { data } = await axios.post<ResponseAPI>('/auth/login', { username: postData.email, password: postData.password });
      return data;
   },

   async signUp(postData: RegisterFormProps): Promise<ResponseAPI> {
      const { data } = await axios.post<ResponseAPI>('/auth/register', {
         email: postData.email,
         username: postData.username,
         fullname: postData.fullname,
         password: postData.password,
         password2: postData.password2,
      });
      return data;
   },

   async getMe(): Promise<ResponseAPI> {
      const { data } = await axios.get<ResponseAPI>('/users/me');
      return data;
   },
};
