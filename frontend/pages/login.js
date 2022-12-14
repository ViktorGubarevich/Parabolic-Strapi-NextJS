import { useFetchUser } from "../lib/authContext";
import { default as LoginComponent } from "../components/Login";
import Home from ".";

const Register = () => {
  const { user, loading } = useFetchUser();

  return <>{!user ? <LoginComponent user={user} /> : <Home />}</>;
};

export default Register;
