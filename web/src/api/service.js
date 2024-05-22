import axios from "axios";

export const getData = () => get("/api/data")

export const postData = (body) => post("/api/data", body)

const get = async (path) => {
  try {
    const { data } = await axios.get(path);
    return data;
  } catch (error) {
    console.warn("TODO");
    throw error.response;
  }
};

const post = async (path, body) => {
  try {
    const { data } = await axios
      .post(path, body, {
        credentials: 'include',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    return data;
  } catch (error) {
    console.warn("TODO")
    throw error.response;
  }
}
