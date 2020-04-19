//import two JS files in js directory (after exporting)
import {formSubmit} from './js/formHandler.js';
//import {name} from './js/name'
const baseURL = "https://api.aylien.com/api/v1/sentiment";

const getData = async(baseURL, textapi, url) => {
  const res = await fetch(baseURL + textapi + url);
  try{
    const data = await res.json();
    console.log(data);
  } catch(error){
    console.log("error", error);
  }
}

textapi.sentiment({
  'text': 'John is a very good football player!'
}, function(error, response) {
  if (error === null) {
    console.log(response);
  }
});
