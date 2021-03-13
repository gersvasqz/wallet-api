const valid = ({ dni, name, email, phone, value }, operation) => {
  const errors = [];
  if (operation === "confirm") return errors;
  if (!dni) errors.push("dni is required");
  if (!phone) errors.push("phone is required");
  if (!Number.isInteger(phone)) errors.push("invalid phone");
  if (operation === "register") {
    if (!name) errors.push("name is required");
    if (!email) errors.push("email is required");
    else if (
      !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
        email
      )
    )
      errors.push("invalid email");
  } else if (operation !== "balance") {
    if (!value) errors.push("value is required");
    else if (!Number.isInteger(value)) errors.push("invalid value");
  }

  return errors;
};

export default valid;
