import { createClientAsync } from "soap";
import { config } from "dotenv";

config();

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
  try {
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
  } catch (e) {
    return {
      error: true,
      errors: [e.toString()],
      msg: "Invalid operation",
    };
  }
};

export default soapService;
