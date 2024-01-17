require("dotenv").config();
require("./config/database").connect();
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const Event = require("./models/events");
const Registration = require("./models/registration");
const User = require("./models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Event Management System");
});

app.post("/register", async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!(email && password && fullname)) {
      return res.status(400).send("All fields are required");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(401).send("User already exists");
    }

    const myEncPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullname,
      email: email.toLowerCase(),
      password: myEncPassword,
    });

    //token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    user.password = undefined;
    // res.status(201).json(user);
    return res.status(201).send(`<h3>${fullname} you have successfully registered</h3>`)
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send("Field is missing");
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          user_id: user._id,
          email_id: email,
          password,
          firstname: user.firstname,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;
      user.password = undefined;
      // res.status(200).json(user);
      return res.status(200).send(`<h3>You have successfully logged in</h3>`)
    }

    return res.status(400).send("email or password is incorrect");
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/events/upcoming", async (req, res) => {
  try {
    const upcomingEvents = await Event.find({ status: "upcoming" });
    res.json(upcomingEvents);
  } catch (error) {
    console.error("Error fetching upcoming events:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/events/past", async (req, res) => {
  try {
    const pastEvents = await Event.find({ status: "past" });
    res.json(pastEvents);
  } catch (error) {
    console.error("Error fetching past events:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/events/add", async (req, res) => {
  try {
    const { name, date, mode, status } = req.body;

    if (!name || !date || !mode || !status) {
      return res
        .status(400)
        .json({ error: "Name, date, and status are required fields." });
    }

    const existingEvent = await Event.findOne({ name });

    if (existingEvent) {
      return res.status(401).send("Event already exists");
    }

    const event = await Event.create({
      name,
      date,
      mode,
      status,
    });
    res
      .status(201)
      .json({ message: "Event added successfully!", event: event });
  } catch (error) {
    console.error("Error adding event:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/mypost", async (req, res) => {
  // console.log(req.body);
  // res.send(req.body);
  try {
    const { eventName, fullName, emailAddress, usn, contactNumber } = req.body;
    const registration = await Registration.create({
      eventName,
      fullName,
      emailAddress,
      usn,
      contactNumber,
    });
    res.send(`<h3>Thanks ${fullName} for registering for ${eventName}</h3>`);
    // res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = app;
