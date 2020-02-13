/*  URL absolute path
    Two object are exported
    frontendUrl and backendUrl
    like this we won't need to have a super long list of import at the begining of
    a given views we will only need to import one of these two and get the right parameter
*/

// Backend Urls
/*Switch between the 2 urls below depending on deployment or local */
//const backendUrl = "https://grad4-backend.herokuapp.com/api/v1/"
// when you change you variable environment don't forget to start with REACT_APP_
let baseBackendUrl = process.env.REACT_APP_BACKEND_URL;

if (baseBackendUrl === undefined) {
  console.info("Set the url of the backend directory in .env (If you are in testing mode ignore this message)");

  baseBackendUrl = "no-base/";
}

export const backendUrl = {
  // Backend Location
  api: baseBackendUrl,
  getpost: baseBackendUrl + "post/"

  // Authentication
  // register: baseBackendUrl + 'rest-auth/registration/name-registration/',
  // login: baseBackendUrl + 'login/',
  // passwordRecovery: baseBackendUrl + 'rest-auth/password/reset/',
  // passwordRecoveryConfirmation: baseBackendUrl + 'profile/resend-email-confirm/',
  // passwordReset: baseBackendUrl + 'rest-auth/password/reset/confirm/',
  // refreshToken: baseBackendUrl + 'token-refresh/',
};

// Frontend Urls
export const frontendUrl = {
  // Static Pages
  home: "/",
  about: "/about",
  maintenance: "/maintenance"
};
