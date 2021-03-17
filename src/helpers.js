const valid = (
  { dni, name, email, phone, value, token, session },
  operation
) => {
  const errors = [];
  const json = {
    dni,
    name,
    email,
    phone: Number(phone),
    value: Number(value),
    token,
    session,
  };
  if (operation === "ConfirmToken") return { errors, json };
  if (!dni) errors.push("dni is required");
  if (!phone) errors.push("phone is required");
  if (typeof Number(phone) !== "number") errors.push("invalid phone");
  if (operation === "RegisterClient") {
    if (!name) errors.push("name is required");
    if (!email) errors.push("email is required");
    else if (
      !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
        email
      )
    )
      errors.push("invalid email");
  } else if (operation !== "GetBalance") {
    if (!value) errors.push("value is required");
    else if (typeof Number(value) !== "number") errors.push("invalid value");
    else if (Number(value) < 0) errors.push("invalid value");
  }

  return { errors, json };
};

export default valid;
