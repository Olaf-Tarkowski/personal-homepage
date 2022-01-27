import axios from "axios";
import { username } from "./username";

const base_url = "https://api.github.com";

export const personalHomepageApi = () =>
  axios
    .get(`${base_url}/users/${username}/repos`)
    .then(response => response.data);
