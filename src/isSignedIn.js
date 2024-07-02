import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const useAuth = () => {
  const [{ user }] = useStateValue();
  const navigate = useNavigate();

  const isSignedIn = () => {
    if (user !== null) {
      return true;
    }
    navigate("/login");
    return false;
  };

  return { isSignedIn };
};

export default useAuth;
