import valid from "./helpers";
import soapService from "./services";

export default async (req, res, operation, status) => {
  const errors = valid(req.body, operation);
  if (errors.length > 0) return res.status(422).json({ error: false, errors });
  const response = await soapService(operation, req.body);
  if (response.error) return res.status(422).json(response);
  return res.status(status).json(response);
};
