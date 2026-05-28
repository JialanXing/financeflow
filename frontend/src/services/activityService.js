import axios from "axios";

const API =
  "http://localhost:5001/api/activities";

const getConfig = () => {
  const token =
    localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getActivities =
  async () => {
    const res = await axios.get(
      API,
      getConfig()
    );

    return res.data;
  };