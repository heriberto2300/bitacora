class api {
  async post(url, data) {
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

  async get(url) {
    const params = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    }
    const response = await fetch(url, params);
    
    return response;
  }
  
  async getCourses(user) {
    const data = {user: user,};
    const url = "http://192.168.100.11:8000/courses"
    const response = await this.get(url, data); 
    return response.json();
  }
}

const API = new api();

module.exports = API;



