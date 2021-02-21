import { useHistory } from "react-router-dom";

export const historyPush = (path, data) => {
  const history = useHistory();
  return history.push({
    pathname: path,
    state: {
      data,
    },
  });
};
