import axios from "axios";

const API =
  "http://localhost:5001/api/expenses";

const getConfig = () => {
  const token =
    localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const getExpenses =
  async () => {
    const res = await axios.get(
      API,
      getConfig()
    );

    return res.data;
  };

export const addExpense = async (
  expenseData
) => {
  const res = await axios.post(
    API,
    expenseData,
    getConfig()
  );

  return res.data;
};

export const updateExpense =
  async (id, expenseData) => {
    const res = await axios.put(
      `${API}/${id}`,
      expenseData,
      getConfig()
    );

    return res.data;
  };

export const deleteExpense =
  async (id) => {
    const res = await axios.delete(
      `${API}/${id}`,
      getConfig()
    );

    return res.data;
  };