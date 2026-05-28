import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import {
  getExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} from "../services/expenseService";

import { getActivities } from "../services/activityService";

function Dashboard() {
  const [expenses, setExpenses] =
    useState([]);

  const [activities, setActivities] =
    useState([]);

  const [title, setTitle] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [category, setCategory] =
    useState("Food");

  const [type, setType] =
    useState("expense");

  const [editingId, setEditingId] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const fetchExpenses = async () => {
    try {
      const data =
        await getExpenses();

      setExpenses(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchActivities =
    async () => {
      try {
        const data =
          await getActivities();

        setActivities(data);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchExpenses();

    fetchActivities();
  }, []);

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    if (!title || !amount) {
      alert(
        "Please enter title and amount"
      );
      return;
    }

    const expenseData = {
      title,
      amount,
      category,
      type,
    };

    try {
      if (editingId) {
        await updateExpense(
          editingId,
          expenseData
        );
      } else {
        await addExpense(
          expenseData
        );
      }

      setTitle("");

      setAmount("");

      setCategory("Food");

      setType("expense");

      setEditingId(null);

      fetchExpenses();

      fetchActivities();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (
    expense
  ) => {
    setEditingId(expense._id);

    setTitle(expense.title);

    setAmount(expense.amount);

    setCategory(expense.category);

    setType(expense.type);
  };

  const handleDelete = async (
    id
  ) => {
    try {
      await deleteExpense(id);

      fetchExpenses();

      fetchActivities();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const totalExpense = expenses
    .filter(
      (item) =>
        item.type === "expense"
    )
    .reduce(
      (sum, item) =>
        sum + Number(item.amount),
      0
    );

  const totalIncome = expenses
    .filter(
      (item) =>
        item.type === "income"
    )
    .reduce(
      (sum, item) =>
        sum + Number(item.amount),
      0
    );

  const balance =
    totalIncome - totalExpense;

  const categories = [
    "Food",
    "Transport",
    "Shopping",
    "Salary",
    "Entertainment",
  ];

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <div className="sidebar">
          <h2>FinanceFlow</h2>

          <div className="menu">
            <a href="#top">
              Dashboard
            </a>

            <a href="#transactions">
              Transactions
            </a>

            <a href="#categories">
              Categories
            </a>
            
          </div>
        </div>

        <div
          className="main-content"
          id="top"
        >
          <h1 className="page-title">
            Expense Dashboard
          </h1>

          <div className="cards">
            <div className="card">
              <h3>Balance</h3>

              <h1>${balance}</h1>
            </div>

            <div className="card income">
              <h3>Income</h3>

              <h1>${totalIncome}</h1>
            </div>

            <div className="card expense">
              <h3>Expense</h3>

              <h1>${totalExpense}</h1>
            </div>

            <div className="card">
              <h3>Transactions</h3>

              <h1>{expenses.length}</h1>
            </div>
          </div>

          <div className="form-card">
            <h2>
              {editingId
                ? "Edit Transaction"
                : "Add Transaction"}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="expense-form"
            >
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
              />

              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) =>
                  setAmount(
                    e.target.value
                  )
                }
              />

              <select
                value={category}
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
              >
                <option>
                  Food
                </option>

                <option>
                  Transport
                </option>

                <option>
                  Shopping
                </option>

                <option>
                  Salary
                </option>

                <option>
                  Entertainment
                </option>
              </select>

              <select
                value={type}
                onChange={(e) =>
                  setType(
                    e.target.value
                  )
                }
              >
                <option value="expense">
                  Expense
                </option>

                <option value="income">
                  Income
                </option>
              </select>

              <button type="submit">
                {editingId
                  ? "Update"
                  : "Add"}
              </button>
            </form>
          </div>

          <div
            className="transaction-card"
            id="transactions"
          >
            <h2>Transactions</h2>

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="search-input"
            />

            {filteredExpenses.length ===
            0 ? (
              <p>
                No transactions found.
              </p>
            ) : (
              filteredExpenses.map(
                (expense) => (
                  <div
                    className="transaction"
                    key={expense._id}
                  >
                    <div>
                      <h3>
                        {expense.title}
                      </h3>

                      <p>
                        {
                          expense.category
                        }
                      </p>
                    </div>

                    <div>
                      <strong>
                        {expense.type ===
                        "income"
                          ? "+"
                          : "-"}
                        $
                        {
                          expense.amount
                        }
                      </strong>
                    </div>

                    <div className="actions">
                      <button
                        className="edit-btn"
                        onClick={() =>
                          handleEdit(
                            expense
                          )
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          handleDelete(
                            expense._id
                          )
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )
              )
            )}
          </div>

          <div
            className="transaction-card"
            id="categories"
          >
            <h2>Category Summary</h2>

            {categories.map((item) => {
              const categoryItems =
                expenses.filter(
                  (expense) =>
                    expense.category ===
                    item
                );

              const categoryTotal =
                categoryItems.reduce(
                  (sum, expense) =>
                    sum +
                    Number(
                      expense.amount
                    ),
                  0
                );

              return (
                <div
                  className="transaction"
                  key={item}
                >
                  <div>
                    <h3>{item}</h3>

                    <p>
                      {
                        categoryItems.length
                      }{" "}
                      transactions
                    </p>
                  </div>

                  <strong>
                    ${categoryTotal}
                  </strong>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;