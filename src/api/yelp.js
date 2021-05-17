import axios from "axios";

const version = "v3";
const clientId = "cmqMyZHf6179ohriU0itbg";
const APIKey =
  "Teac8UWJ1ucMsIJWONDYKfDPX9-SGPqyJKej1DOvaVdF7sHztfRTn4rNWLMcIxztCVPNuHy3w2pVx6-uV-tDxcRheJUxaKQ4DrO9vNZXZKbXv3pv-3urnhAEySKaYHYx";

export default axios.create({
  baseURL: "https://api.yelp.com/" + version,
  headers: {
    Authorization: "Bearer " + APIKey,
  },
});
