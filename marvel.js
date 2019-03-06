const APIKey = "9f736bb7a2a33eaf359d4c3915b0ca64";
const BaseURL = "https://gateway.marvel.com:443/v1/public/";

function makeAPIURL(resource) {
  return '${BaseURL}/${resource}'
}

console.log(makeAPIURL("characters"));

// https://gateway.marvel.com:443/vt/public/characters