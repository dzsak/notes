import axios from "axios";

export const getUser = () => get("/api/user")

export const signup = (body) => post("/api/auth/signup", body)

export const login = (body) => post("/api/auth/login", body)

export const googleAuth = (body) => post("/api/auth/google", body)

const get = async (path) => {
  try {
    const { data } = await axios.get(path);
    return data;
  } catch (error) {
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
    throw error.response;
  }
}
