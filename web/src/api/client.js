import axios from "axios";

export default class {
  constructor(onError) {
    this.onError = onError
  }

  getUser = () => this.get("/api/user")

  signOut = () => this.get("/api/auth/signout")

  signup = (body) => this.post("/api/auth/signup", body)

  login = (body) => this.post("/api/auth/login", body)

  googleAuth = (body) => this.post("/api/auth/google", body)

  get = async (path) => {
    try {
      const { data } = await axios.get(path);
      return data;
    } catch (error) {
      this.onError(error.response)
      throw error.response;
    }
  };

  post = async (path, body) => {
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
      this.onError(error.response)
      throw error.response;
    }
  }
}
