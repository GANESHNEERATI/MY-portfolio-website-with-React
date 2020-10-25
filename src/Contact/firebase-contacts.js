import axios from "axios";
const contacts = axios.create({
  baseURL: "https://my-portfolio-blog-98a7e.firebaseio.com/",
});

export default contacts;
