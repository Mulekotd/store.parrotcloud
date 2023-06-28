import axios from "axios";

export async function getUsers() {
  try {
    const response = await axios.get("https://parrotcloud-api.herokuapp.com/api/users");
    return Object.values(response.data);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getGames() {
  try {
    const response = await axios.get("https://parrotcloud-api.herokuapp.com/api/games");
    return Object.values(response.data);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getPosts() {
  try {
    const response = await axios.get("https://parrotcloud-api.herokuapp.com/api/community-posts");
    return Object.values(response.data);
  } catch (error) {
    console.error(error);
    return [];
  }
}