import axios from "axios";

/*
create() method will create an instance of the
axios client with some default properties
*/
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ec7eadecce5e7879854f9a687b0fdea87790c4766acee6c6d257b5da82c06b08"
  }
});
