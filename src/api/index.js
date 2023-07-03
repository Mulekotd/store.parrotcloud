import axios from "axios";

export async function getUsers() {
  try {
    const response = await axios.get("http://ec2-54-210-110-136.compute-1.amazonaws.com:3000/api/users");
    return Object.values(response.data);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getGames() {
  try {
    const response = await axios.get("http://ec2-54-210-110-136.compute-1.amazonaws.com:3000/api/games");
    return Object.values(response.data);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPosts() {
  try {
    const response = await axios.get("http://ec2-54-210-110-136.compute-1.amazonaws.com:3000/api/community-posts");
    return Object.values(response.data);
  } catch (error) {
    console.error(error);
    return [];
  }
}
