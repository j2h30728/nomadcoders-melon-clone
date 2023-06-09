import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
  return res.render("join", { pageTitle: "JOIN" });
};

export const postJoin = async (req, res) => {
  const pageTitle = "join";
  const { username, email, password, password2 } = req.body;
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This username/email is already taken.",
    });
  }
  try {
    await User.create({
      username,
      email,
      password,
    });
    return res.redirect("/login");
  } catch (error) {
    console.log(error);
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: error._message,
    });
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const postLogin = async (req, res) => {
  const { email, password } = req.body;
  // 존재하지 않는 username 일 경우,
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "An account with this email does not exists.",
    });
  }
  // 입력한 비밀번호가 맞는지 확인
  const isOkay = await bcrypt.compare(password, user.password);
  if (!isOkay)
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "Wrong password.",
    });
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/");
};
