const Expense = require("../models/Expense");

const Activity = require("../models/Activity");

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

    await Activity.create({
      user: req.user._id,
      action: "ADD_EXPENSE",
      details: `${title} added`,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getExpenses = async (
  req,
  res
) => {
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

const updateExpense = async (
  req,
  res
) => {
  try {
    const expense =
      await Expense.findById(
        req.params.id
      );

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    const updatedExpense =
      await Expense.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    await Activity.create({
      user: req.user._id,
      action: "UPDATE_EXPENSE",
      details: `${expense.title} updated`,
    });

    res.status(200).json(
      updatedExpense
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteExpense = async (
  req,
  res
) => {
  try {
    const expense =
      await Expense.findById(
        req.params.id
      );

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    await expense.deleteOne();

    await Activity.create({
      user: req.user._id,
      action: "DELETE_EXPENSE",
      details: `${expense.title} deleted`,
    });

    res.status(200).json({
      message:
        "Expense deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
};