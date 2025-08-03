import axios from "axios";

const GITHUB_API_BASE = "https://api.github.com/users";

export default async function fetchUserData(username) {
  const url = `${GITHUB_API_BASE}/${username}`;

  const response = await axios.get(url);

  // GitHub returns 404 if user not found, which throws an error — handle that in Search.jsx
  return response.data;
}
