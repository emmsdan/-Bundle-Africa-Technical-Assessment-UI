import axios from "axios";
const baseURL = 'https://bundle-africa.herokuapp.com'
// const baseURL = "http://bundle-africa.emmsdan.com.ng"
export default axios.create({ baseURL });
