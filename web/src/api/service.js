import axios from "axios";

export const getTest = () => get("/api/user")

export const signup = (body) => post("/api/auth/signup", body)

const get = async (path) => {
  try {
    const { data } = await axios.get(path);
    return data;
  } catch (error) {
    console.warn("Cannot get data");
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
    console.warn("Cannot post data")
    throw error.response;
  }
}
