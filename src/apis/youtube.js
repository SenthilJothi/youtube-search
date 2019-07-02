import axios from "axios";
const KEY = "AIzaSyB9f6Mhj4MTk6sLmEmeoo9lY9dZ4a31iXo";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
