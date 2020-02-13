import { backendUrl } from "../../urls";

// Services Exported
export const postService = {
  GetPosts
};

// Authentification Services
function GetPosts(token: string) {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `JWT ${token}`,
      "Content-Type": "application/json"
    }
  };
  return fetch(backendUrl.getpost, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
}
