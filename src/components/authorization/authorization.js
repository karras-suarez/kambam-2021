import { useState } from "react";
import { Password } from "./password";
export const Authorization = (props) => {
  const [isAuthorized, setIsAuthorized] = useState(() => localStorage.getItem("authorized") === 'true');

  if (!isAuthorized) {
    return <Password setIsAuthorized={setIsAuthorized} />;  
  }


  return props.children
};
