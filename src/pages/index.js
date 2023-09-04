import auth from "@/firebase/firebase.auth";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {

  const {data:session}=useSession();
  const [user] = useAuthState(auth);

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop:"10%" }}>Welcome To Next Auth Home Page</h1>
      {/* <p style={{textAlign: "center", marginTop:"5px"}} >Logged User Name:{session?.user?.name}</p>
      <p style={{textAlign: "center", marginTop:"5px"}} >Logged User Name:{session?.user?.email}</p> */}
      {/* email and password login */}
     {
      user?.email&& <p style={{textAlign: "center", marginTop:"5px"}} >Logged User Email:{user?.email}</p>
     }
      

    
    </div>
  );
};

export default HomePage;
