const baseURL = process.env.REACT_APP_API_URL;

const query = prompt("What food would you like nutrition info of?")
export const url = `${baseURL}?query=${query}`;