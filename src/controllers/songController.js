import Song from "../models/Song";
import User from "../models/User";

export const home = async (req, res) => {
  const songs = await Song.find({});
  return res.render("home", { pageTitle: "Home", songs });
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload song" });
};
export const postUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload song" });
};

export const registerPlaying = async (req, res) => {
  const { id } = req.params;
  const song = await Song.findById(id);
  if (!song) {
    return res.sendStatus(404);
  }
  song.meta.playing = song.meta.playing + 1;
  await song.save();
  return res.sendStatus(200);
};
