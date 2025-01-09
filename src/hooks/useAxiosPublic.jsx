import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://bistro-boss-server-xi-mocha.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
