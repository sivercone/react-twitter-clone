// import axios from 'axios';
import { LoginFormProps } from '../../pages/sign/Login';
import { axios } from '../../core/axios';

interface ResponseAPI {
   status: string;
   data: any;
}

export const AuthApi = {
   async signIn(postData: LoginFormProps): Promise<ResponseAPI> {
      const { data } = await axios.post<ResponseAPI>('/auth/login', { username: postData.email, password: postData.password });
      return data;
   },

   async getMe(): Promise<ResponseAPI> {
      const { data } = await axios.get<ResponseAPI>('/users/me');
      return data;
   },
};
