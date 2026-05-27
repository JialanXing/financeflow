import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import {
  getExpenses,
  addExpense,
} from "../services/expenseService";

function Dashboard() {
  const [expenses, setExpenses] =
    useState([]);

  const [title, setTitle] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const fetchExpenses = async () => {
    try {
      const data = await getExpenses();

      setExpenses(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleAddExpense = async (
    e
  ) => {
    e.preventDefault();

    try {
      await addExpense({
        title,
        amount,
        category: "General",
        type: "expense",
      });

      setTitle("");

      setAmount("");

      fetchExpenses();
    } catch (error) {
      console.log(error);
    }
  };

  const totalExpense = expenses.reduce(
    (acc, item) =>
      acc + Number(item.amount),
    0
  );

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
        }}
      >
        <h1
          style={{
            marginBottom: "30px",
          }}
        >
          Finance Dashboard
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "16px",
              width: "250px",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Total Expenses</h3>

            <h1>
              ${totalExpense}
            </h1>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "16px",
              width: "250px",
              boxShadow:
                "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Total Transactions</h3>

            <h1>
              {expenses.length}
            </h1>
          </div>
        </div>

        <form
          onSubmit={handleAddExpense}
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            style={{
              padding: "12px",
              borderRadius: "10px",
              border:
                "1px solid #ddd",
            }}
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
            style={{
              padding: "12px",
              borderRadius: "10px",
              border:
                "1px solid #ddd",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "12px 20px",
              border: "none",
              borderRadius: "10px",
              background: "#2563eb",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add Expense
          </button>
        </form>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "16px",
            boxShadow:
              "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Transactions
          </h2>

          {expenses.map((expense) => (
            <div
              key={expense._id}
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                padding: "14px 0",
                borderBottom:
                  "1px solid #eee",
              }}
            >
              <span>
                {expense.title}
              </span>

              <span>
                ${expense.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;