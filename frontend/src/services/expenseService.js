import axios from "axios";

const API =
  "http://localhost:5001/api/expenses";

export const getExpenses = async () => {
  const token =
    localStorage.getItem("token");

  const res = await axios.get(API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const addExpense = async (
  expenseData
) => {
  const token =
    localStorage.getItem("token");

  const res = await axios.post(
    API,
    expenseData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};