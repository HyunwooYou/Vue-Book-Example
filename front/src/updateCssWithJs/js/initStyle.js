import $axios from 'axios';

let initStyle = {

  setStyleProperties() {
    const BASE_URL = 'https://api.myjson.com/bins/';
    const ID = 'cu8b6';
    const root = document.documentElement;

    $axios.get(BASE_URL + ID)
      .then(res => res.data)
      .then(data => Object.keys(data).map((key) => [key, data[key]]))
      .then(array => {
        array.forEach(function (item) {
          root.style.setProperty(item[0], item[1]); // item[0]:key, item[1]:value
        })
      })
      .catch(ex => console.log('setStyleProperties error : ' + ex));
  }
};

export default initStyle;
