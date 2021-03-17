import { createClientAsync } from "soap";

const url = `http://${process.env.HOST_SOAP}?wsdl`;

const callback = (err, result, res) => {
  if (err) {
    console.error(
      `${new Date().toISOString()} -- SOAP error --\n${err.toString()}\n________\n`
    );
    res({
      error: true,
      errors: [],
      msg: err.toString(),
    });
  } else res(result);
};

const soapService = async (operation, data) => {
  const client = await createClientAsync(url);
  if (!client[operation]) {
    return {
      error: true,
      errors: [],
      msg: "Invalid operation",
    };
  }
  return new Promise((res) =>
    client[operation](data, (e, r) => callback(e, r, res))
  );
};

export default soapService;
