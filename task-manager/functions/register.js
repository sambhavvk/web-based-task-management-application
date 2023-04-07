exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: 'Method Not Allowed' };
    }
  
    const { username, password } = JSON.parse(event.body);
  
    // Here, you can add your logic to store the user data, e.g., save it to a database, etc.
  
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `User ${username} registered successfully!` }),
    };
  };
  