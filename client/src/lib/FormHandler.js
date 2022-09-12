const handleAuthForm = (target, data, update) => {
  const { name, value } = target;
  const newValues = {
    ...data,
    [name]: value,
  }

  update(newValues);
}

module.exports = handleAuthForm;