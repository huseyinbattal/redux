export const SET_USERNAME = "SET_USERNAME";

export const setUserName = (userName) => {
  return {
    type: SET_USERNAME,
    payload: userName,
  };
};
