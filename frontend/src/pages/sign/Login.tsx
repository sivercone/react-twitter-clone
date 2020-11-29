import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignIn } from '../../store/ducks/user/actionCreators';
import { selectUserStatus } from '../../store/ducks/user/selectors';
import { LoadingState } from '../../store/ducks/user/state';

const loginFormSchema = yup.object().shape({
   email: yup.string().email().required(),
   password: yup.string().min(6).required(),
});

export interface LoginFormProps {
   email: string;
   password: string;
}

export const Login: React.FC = () => {
   const dispatch = useDispatch();
   const loadingStatus = useSelector(selectUserStatus);

   const { register, handleSubmit, errors } = useForm<LoginFormProps>({
      resolver: yupResolver(loginFormSchema),
   });

   const onSubmit = async (data: LoginFormProps) => {
      try {
         dispatch(fetchSignIn(data));
      } catch (error) {
         console.log(errors);
      }
   };

   React.useEffect(() => {
      if (loadingStatus === LoadingState.LOADED) {
         alert('success');
      } else if (loadingStatus === LoadingState.ERROR) {
         alert('error');
      }
   }, [loadingStatus]);

   return (
      <div className="wrapper_loginSignup">
         <div className="loginSignup">
            <svg viewBox="0 0 24 24" className="loginSignup__icon svg">
               <g>
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
               </g>
            </svg>
            <h1>Log in to Twitter</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="loginSignup__inputs">
                  <div className="loginSignup__input">
                     <span>E-mail</span>
                     <input type="email" name="email" ref={register} />
                  </div>
                  <div className="loginSignup__input">
                     <span>Password</span>
                     <input type="password" name="password" ref={register} />
                  </div>
               </div>
               <button type="submit" className="loginSignup__btn btn_blue">
                  Log in
               </button>
            </form>
            <Link className="link" to="/signup">
               Sign up for Twitter
            </Link>
         </div>
      </div>
   );
};
