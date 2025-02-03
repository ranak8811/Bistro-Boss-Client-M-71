import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://bistro-boss-server-xi-mocha.vercel.app",
  // baseURL: "http://localhost:4000",
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
