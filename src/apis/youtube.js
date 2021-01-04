import axios from "axios";

const KEY = "AIzaSyDXCQRixjXFhydp2_szkzhNu0CVLqP601M";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
