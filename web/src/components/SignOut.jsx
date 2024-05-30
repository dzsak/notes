import { useEffect } from "react";

const SignOut = ({ queryClient }) => {
  useEffect(() => {
    queryClient.signOut();
    window.location.replace("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default SignOut;
