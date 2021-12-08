import axios from "axios";

export const API = {
  addPost: async (object) => {
    const url = "http://localhost:5000/v1/artical";
    const data = await axios.post(url, object);
    console.log(data.data.status);
    return data.data.status;
  },
  getAllArtical: async () => {
    const url = "http://localhost:5000/v1/artical";
    const data = await axios.get(url);
    console.log(data.data.data.articals);
    return data.data.data.articals;
  },
  getArticalByID: async (id) => {
    const url = `http://localhost:5000/v1/artical/${id}`;
    const data = await axios.get(url);
    console.log([data.data.data.artical]);
    return [data.data.data.artical];
  },
  deletePost: {},
  addUser: async (object) => {
    const url = "http://localhost:5000/v1/user";
    const data = await axios.post(url, object);
    return data.data.data.user._id;
  },
  deleteArtical: async (id) => {
    const url = `http://localhost:5000/v1/artical/${id}`;
    const data = await axios.delete(url, id);
    console.log(data.data.status);
    return data.data.status;
  },
};
