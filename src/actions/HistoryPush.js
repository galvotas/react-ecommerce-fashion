import { useHistory } from "react-router-dom";

export const HistoryPush = (path, data) => {
  const history = useHistory();
  return history.push({
    pathname: path,
    state: {
      data,
    },
  });
};
