const express = require("express");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  purchasedCourses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
});

const CourseSchema = new mongoose.Schema({
  title: String,
  price: 5999,
});

const User = mongoose.model("User", UserSchema);

const Course = mongoose.model("Course", CourseSchema);

// Create

User.create({
  username: req.body.username,
  password: req.body.password,
});

// Read

User.findById("1");
User.find({
  username: "example@gmail.com",
});
User.findOne({
  username: "example@gmail.com",
});

// Update

User.updateOne({ id: "1" }, { $push: { purchasedCourses: courseId } });

User.updateOne(
  {
    id: "1",
  },
  {
    password: "New Password",
  }
);

User.update(
  {},
  {
    premium: true,
  }
);

// Delete

User.deleteMany({}),
  User.deleteOne({
    username: "abc",
  });

module.exports = {
  User,
  Course,
};
