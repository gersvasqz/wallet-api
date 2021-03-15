import valid from "./helpers";
import soapService from "./services";

export default async (body, res, operation, status) => {
  const errors = valid(body, operation);
  if (errors.length > 0)
    return res.status(422).json({ error: true, errors, msg: "Invalid Params" });
  const response = await soapService(operation, body);
  if (response.error) return res.status(422).json(response);
  return res.status(status).json(response);
};
