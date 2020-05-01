import axios from "axios";

const getBooks = (search) => {
  let queryURL = `https://www.googleapis.com/books/v1/volumes?q=space&key=AIzaSyB9gzYT1IRsmSLSF44W9n0gu1W5v72vTKU`;

  let config = {
    method: "get",
    url: queryURL,
  };

  return axios(config).then((res) => {
    console.log(res);
    return res;
  });
};

export default getBooks;
