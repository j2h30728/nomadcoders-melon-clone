import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: { type: String, qruied: true },
  artist: { type: String, qruied: true },
  genre: { type: String, required: true },
  fileUrl: { type: String, required: true },
  imgUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, trim: true, required: true },
  meta: {
    playing: { type: Number, default: 0, required: true },
  },
});

const Song = mongoose.model("Song", songSchema);

export default Song;
