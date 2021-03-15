const valid = ({ dni, name, email, phone, value }, operation) => {
  const errors = [];
  if (operation === "ConfirmToken") return errors;
  if (!dni) errors.push("dni is required");
  if (!phone) errors.push("phone is required");
  if (!Number.isInteger(phone)) errors.push("invalid phone");
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
    else if (typeof value !== "number") errors.push("invalid value");
  }

  return errors;
};

export default valid;
