import { useQuery } from "react-query";

import { getUser } from "../api/service";

const BasicRequests = () => {
  const res = useQuery('user', getUser);
  console.log(res)

  return null;
}

export default BasicRequests;
