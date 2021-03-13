const soap = require("soap");

// const url = "http://127.0.0.1:1337/wallet?wsdl";
const url = "http://127.0.0.1:1337/testService?wsdl";

const soapService = (operation, data) => {
  console.log("saliendo al soap", url);
  // const args = { operation, data };
  return new Promise((resolve) => {
    soap.createClientAsync(url, (err, client) => {
      if (err) console.log("error del client", err);
      else {
        client.test1({ myArg1: "hola", myArg2: "mundo" }, (err2, result) => {
          if (err) console.log("error del soap", err2.toString());
          console.log("llego del soap", result);
          resolve(result);
        });
      }
    });
  });
};

export default soapService;
