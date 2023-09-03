import { Button } from "antd";
import { GoogleOutlined, GithubOutlined,LinkedInOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import auth from "@/firebase/firebase.auth";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const LoginPage = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const { register, handleSubmit,formState: { errors } } = useForm();
  

  const onSubmit=(data)=>{
    createUserWithEmailAndPassword(data.email,data.password);
    
  }

  console.log(user);

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined  onClick={()=>signIn("google",{callbackUrl:'http://localhost:3000/'})}/>
          <GithubOutlined  onClick={()=>signIn("github",{callbackUrl:'http://localhost:3000/'})}/>
          <LinkedInOutlined onClick={()=>signIn("likedin",{callbackUrl:'http://localhost:3000/'})}/>
        </div>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Enter Your Email</label>
          <input {...register("email", { required: true })} type="email" />
          {errors.email && <span>email field is required</span>}
          <label htmlFor="">Enter Your Password</label>
          <input {...register("password", { required: true })} type="password" />
          {errors.password && <span>password field is required</span>}
          
          
          <button  type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
