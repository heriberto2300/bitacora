const post = async (url, data) => {
  const params = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }
  const response = await fetch(url, params);
  
  return response;
};

module.exports = post;