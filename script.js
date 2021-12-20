pm.sendRequest(
  {
    url: '', // The URL of the request
    method: 'POST',
    header: {
      'Accept': 'application/json'
    },
    body: {
      mode: 'urlencoded',
      urlencoded : [
        { key: 'email', value: ''}, // Here should be the email
        { key: 'password', value: ''}, // Here should be the password
      ]
    }
  }, (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      pm.globals.set('', response.json().access); // Here should be the global variable name
    }
);