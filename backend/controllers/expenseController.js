const Expense = require("../models/Expense");

const addExpense = async (req, res) => {
  try {
    const {
      title,
      amount,
      category,
      type,
    } = req.body;

    const expense = await Expense.create({
      user: req.user._id,
      title,
      amount,
      category,
      type,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addExpense,
  getExpenses,
};